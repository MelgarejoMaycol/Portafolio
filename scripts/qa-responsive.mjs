// Auditoría real de interfaz en Chromium contra el build local de Vite.
// No se envían formularios ni se modifican datos de aplicaciones externas.
import assert from 'node:assert/strict'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { chromium } from 'playwright'

const base = (process.env.QA_BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '')
const folder = resolve(process.cwd(), 'qa-evidence')
mkdirSync(folder, { recursive: true })

const sizes = [
  { name: 'movil-360', width: 360, height: 800 },
  { name: 'movil-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'escritorio-1440', width: 1440, height: 900 },
  { name: 'movil-horizontal', width: 844, height: 390 }
]
const fileNames = {
  frontend: 'CV_Maycol_Melgarejo_Frontend.pdf',
  fullstack: 'CV_Maycol_Melgarejo_Full_Stack.pdf',
  backend: 'CV_Maycol_Melgarejo_Backend.pdf'
}

const results = []
const browser = await chromium.launch({ headless: true })

async function noHorizontalOverflow(page, label) {
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth
  }))
  assert.ok(dimensions.documentWidth <= dimensions.viewport + 3,
    label + ': desbordamiento horizontal ' + JSON.stringify(dimensions))
}

async function visibleInsideViewport(page, selector, label) {
  const b = await page.locator(selector).boundingBox()
  assert.ok(b, label + ': elemento no disponible')
  const { width, height } = page.viewportSize()
  assert.ok(b.x + b.width <= width + 4 && b.x >= -4 && b.y + b.height <= height + 4,
    label + ': fuera de pantalla ' + JSON.stringify({ b, width, height }))
}

async function checkPdf(page, role, name) {
  const href = '/cv/' + name
  const pdf = await page.request.get(base + href, { timeout: 20000 })
  assert.equal(pdf.status(), 200, role + ': HTTP de PDF')
  const content = await pdf.body()
  assert.ok(content.length > 10000, role + ': PDF demasiado pequeño')
  assert.equal(content.subarray(0, 5).toString(), '%PDF-', role + ': PDF inválido')
  return { name, bytes: content.length }
}

for (const size of sizes) {
  const errors = []
  const logs = []
  const context = await browser.newContext({
    viewport: { width: size.width, height: size.height },
    acceptDownloads: true,
    reducedMotion: 'reduce'
  })
  const page = await context.newPage()
  page.on('pageerror', err => errors.push('JavaScript: ' + err.message))
  try {
    const response = await page.goto(base + '/', { waitUntil: 'domcontentloaded', timeout: 30000 })
    assert.equal(response.status(), 200, size.name + ': portada HTTP')
    await page.locator('#inicio h1').waitFor({ state: 'visible' })
    await page.locator('.inicio-image').evaluate(img => new Promise((resolve, reject) => {
      if (img.complete) return img.naturalWidth > 0 ? resolve() : reject(new Error('Retrato principal roto'))
      img.addEventListener('load', resolve, { once: true })
      img.addEventListener('error', () => reject(new Error('Retrato principal roto')), { once: true })
    }))
    await page.screenshot({ path: resolve(folder, size.name + '-inicio.png'), animations: 'disabled' })
    await noHorizontalOverflow(page, size.name + ' portada')
    assert.equal(await page.locator('.inicio-actions a, .inicio-actions button').count(), 3)
    logs.push('Portada y tres acciones visibles')

    await page.locator('.inicio-actions a[href="#proyectos"]').click()
    await page.waitForTimeout(350)
    const navAndTitle = await page.evaluate(() => ({
      navBottom: document.querySelector('.navbar').getBoundingClientRect().bottom,
      titleTop: document.querySelector('#proyectos-titulo').getBoundingClientRect().top
    }))
    assert.ok(navAndTitle.titleTop >= navAndTitle.navBottom - 5,
      'El título de Proyectos queda oculto por el menú fijo: ' + JSON.stringify(navAndTitle))
    logs.push('Navegación a Proyectos sin título oculto')

    const hashes = await page.locator('a[href^="#"]').evaluateAll(links =>
      links.map(a => a.getAttribute('href')).filter(h => h.length > 1 && !document.querySelector(h))
    )
    assert.deepEqual(hashes, [], 'Enlaces internos sin destino')

    if (size.width < 992) {
      await page.locator('.navbar-toggler').click()
      await page.locator('#navbarNav').waitFor({ state: 'visible', timeout: 5000 })
      await page.locator('#navbarNav a[href="#proyectos"]').click()
      await page.locator('#navbarNav').waitFor({ state: 'hidden', timeout: 5000 })
      logs.push('Menú móvil abre y se cierra al navegar')
    }

    await page.locator('#proyectos').scrollIntoViewIfNeeded()
    await page.locator('#proyectos').screenshot({
      path: resolve(folder, size.name + '-proyectos.png'), animations: 'disabled'
    })
    await noHorizontalOverflow(page, size.name + ' proyectos')

    const cards = page.locator('.proyectos-destacados .project-card')
    assert.equal(await cards.count(), 3, 'Deben mostrarse tres proyectos en Todos')
    for (const image of await page.locator('.project-card-media img, .backend-feature-preview img').all()) {
      await image.scrollIntoViewIfNeeded()
      await image.evaluate(img => new Promise((resolve, reject) => {
        if (img.complete) return img.naturalWidth > 0 ? resolve() : reject(new Error('Imagen dañada: ' + img.src))
        img.addEventListener('load', resolve, { once: true })
        img.addEventListener('error', () => reject(new Error('Imagen dañada: ' + img.src)), { once: true })
      }))
      assert.ok(await image.evaluate(img => img.naturalWidth > 0), 'Captura rota')
    }
    const fit = await page.locator('.project-card-media--contain img').first().evaluate(img => getComputedStyle(img).objectFit)
    assert.equal(fit, 'contain', 'Captura configurada para no recortar')
    logs.push('Cuatro imágenes del catálogo disponibles, proporción correcta')

    await page.locator('.project-card').first().locator('.project-preview-trigger').click()
    await page.getByRole('dialog', { name: /Captura ampliada de/ }).waitFor({ state: 'visible' })
    await page.screenshot({ path: resolve(folder, size.name + '-captura.png'), animations: 'disabled' })
    await page.keyboard.press('Escape')
    await page.locator('.image-preview-dialog').waitFor({ state: 'hidden' })

    await page.locator('.project-card').first().locator('.project-case-cta').click()
    await page.getByRole('dialog', { name: /Cifrya: cuentas/ }).waitFor({ state: 'visible' })
    await page.screenshot({ path: resolve(folder, size.name + '-caso.png'), animations: 'disabled' })
    await page.keyboard.press('Escape')
    await page.locator('.project-case-dialog').waitFor({ state: 'hidden' })
    logs.push('Visores de imagen y caso técnico abren y cierran con Escape')

    await page.locator('.proyectos-filtro').filter({ hasText: 'Frontend' }).click()
    assert.ok(await page.locator('.proyectos-destacados .project-card').count() >= 1)
    await page.locator('.proyectos-filtro').filter({ hasText: 'Todos' }).click()
    logs.push('Filtros de especialidad operativos')

    await page.locator('.inicio-actions button').filter({ hasText: 'Ver CV' }).click()
    await page.locator('#cv-dialog-title').waitFor({ state: 'visible' })
    await noHorizontalOverflow(page, size.name + ' modal CV')
    const thumbnail = page.locator('.cv-preview-image')
    await thumbnail.waitFor({ state: 'visible' })
    await thumbnail.evaluate(img => new Promise((resolve, reject) => {
      if (img.complete) return img.naturalWidth > 0 ? resolve() : reject(new Error('Miniatura PDF no cargó'))
      img.addEventListener('load', resolve, { once: true })
      img.addEventListener('error', () => reject(new Error('Miniatura PDF no cargó')), { once: true })
    }))
    await page.screenshot({ path: resolve(folder, size.name + '-cv.png'), animations: 'disabled' })
    await visibleInsideViewport(page, '.cv-dialog-close', 'Cerrar CV')
    await visibleInsideViewport(page, '.cv-dialog-footer .cv-actions', 'Abrir y descargar CV')
    assert.equal(await page.locator('.cv-options button').count(), 3)
    const found = []
    for (const [role, filename] of Object.entries(fileNames)) {
      const option = role === 'frontend' ? 'Frontend' : role === 'fullstack' ? 'Full Stack' : 'Backend'
      await page.locator('.cv-options button').filter({ hasText: option }).click()
      await page.locator('.cv-preview-image').evaluate(img => new Promise((resolve, reject) => {
        if (img.complete) return img.naturalWidth > 0 ? resolve() : reject(new Error('Miniatura PDF rota: ' + img.src))
        img.addEventListener('load', resolve, { once: true })
        img.addEventListener('error', () => reject(new Error('Miniatura PDF rota: ' + img.src)), { once: true })
      }))
      const downloadLink = page.locator('.cv-actions a[download]')
      assert.equal(await downloadLink.getAttribute('href'), '/cv/' + filename)
      const pdf = await checkPdf(page, role, filename)
      found.push(pdf)
      const [download] = await Promise.all([
        page.waitForEvent('download', { timeout: 15000 }),
        downloadLink.click()
      ])
      const saved = readFileSync(await download.path())
      assert.equal(saved.subarray(0, 5).toString(), '%PDF-', 'Descarga real: ' + role)
      assert.equal(saved.length, pdf.bytes, 'La descarga no coincide con el recurso PDF')
    }
    await page.keyboard.press('Escape')
    await page.locator('.cv-dialog').waitFor({ state: 'hidden' })
    logs.push('Tres PDF HTTP y tres descargas reales verificadas: ' + found.map(x => x.name + ' (' + x.bytes + ' B)').join(', '))
    assert.deepEqual(errors, [], 'Errores de ejecución JavaScript')
    results.push({ size, status: 'PASS', logs })
    console.log('PASS ' + size.name + ': ' + logs.join('; '))
  } catch (error) {
    const message = error?.stack || String(error)
    results.push({ size, status: 'FAIL', error: message, logs, pageErrors: errors })
    console.error('FAIL ' + size.name + ': ' + message)
    await page.screenshot({ path: resolve(folder, size.name + '-fallo.png'), animations: 'disabled' }).catch(() => {})
  } finally {
    await context.close()
  }
}

await browser.close()
writeFileSync(resolve(folder, 'resultado.json'), JSON.stringify({
  base, generatedAt: new Date().toISOString(), results
}, null, 2))
const passing = results.filter(r => r.status === 'PASS').length
console.log('AUDITORÍA ' + passing + '/' + results.length + ' tamaños aprobados')
if (passing !== results.length) process.exitCode = 1

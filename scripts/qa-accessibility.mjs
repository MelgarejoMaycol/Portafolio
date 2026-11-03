// Auditoría automatizada WCAG A/AA en la compilación de producción.
// Evalúa el estado inicial y los tres diálogos. No envía datos a servicios externos.
import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const origin = (process.env.QA_BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '')
const evidence = resolve(process.cwd(), 'qa-accessibility')
mkdirSync(evidence, { recursive: true })
const sizes = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 }
]
const report = []
const browser = await chromium.launch()
const tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
for (const size of sizes) {
  const context = await browser.newContext({ viewport: { width: size.width, height: size.height }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  try {
    await page.goto(origin, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await page.locator('#inicio h1').waitFor()
    await page.addScriptTag({ path: resolve(process.cwd(), 'node_modules/axe-core/axe.min.js') })
    async function inspect(state) {
      await page.waitForTimeout(100)
      const result = await page.evaluate(async tagsToCheck => {
        const out = await window.axe.run(document, { runOnly: { type: 'tag', values: tagsToCheck } })
        return { violations: out.violations.map(v => ({
          id: v.id, impact: v.impact, help: v.help,
          nodes: v.nodes.map(n => ({ target: n.target, failureSummary: n.failureSummary, html: n.html.slice(0, 350) }))
        })), passes: out.passes.length, incomplete: out.incomplete.map(v=>v.id) }
      }, tags)
      report.push({ size: size.name, state, ...result })
      const relevant = result.violations.map(v => v.id + ' (' + v.impact + ', ' + v.nodes.length + ' nodos)').join('; ')
      console.log((result.violations.length?'FAIL ':'PASS ')+size.name+'/'+state+': '+(relevant || 'sin infracciones automáticas'))
    }
    await inspect('home')
    await page.locator('.inicio-actions button').filter({ hasText: 'Ver CV' }).click()
    await page.locator('#cv-dialog-title').waitFor()
    await inspect('cv')
    await page.keyboard.press('Escape')
    await page.locator('.cv-dialog').waitFor({ state: 'hidden' })
    await page.locator('.project-card').first().locator('.project-preview-trigger').click()
    await page.locator('.image-preview-dialog').waitFor()
    await inspect('image')
    await page.keyboard.press('Escape')
    await page.locator('.image-preview-dialog').waitFor({ state: 'hidden' })
    await page.locator('.project-card').first().locator('.project-case-cta').click()
    await page.locator('.project-case-dialog').waitFor()
    await inspect('case')
  } catch (error) {
    report.push({ size: size.name, state: 'error', error: String(error?.stack || error) })
    console.error('ERROR '+size.name+': '+String(error))
  } finally {
    await context.close()
  }
}
await browser.close()
writeFileSync(resolve(evidence, 'wcag.json'), JSON.stringify({ origin, generatedAt: new Date().toISOString(), results: report }, null, 2))
const violations=report.flatMap(r=>r.violations||[])
const blockers=report.filter(r=>r.error)
const critical=violations.filter(v=>v.impact==='critical'||v.impact==='serious')
console.log('RESUMEN WCAG: '+report.length+' estados; '+violations.length+' reglas incumplidas (incluye repeticiones); '+critical.length+' graves/críticas')
if (violations.length || blockers.length) process.exitCode=1

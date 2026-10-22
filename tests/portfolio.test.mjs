import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { CV_FILES, getCvPath, downloadCV } from '../src/utils/downloadCV.js'

test('se ofrecen las tres especializaciones y cada PDF es un documento válido', () => {
  assert.deepEqual(Object.keys(CV_FILES).sort(), ['backend', 'frontend', 'fullstack'])
  for (const [specialty, url] of Object.entries(CV_FILES)) {
    assert.equal(getCvPath(specialty), url)
    const file = resolve(process.cwd(), 'public' + url)
    assert.ok(statSync(file).size > 1024, specialty + ' debe tener contenido')
    assert.equal(readFileSync(file).subarray(0, 5).toString(), '%PDF-', specialty)
  }
})

test('una especialización no reconocida utiliza el CV Frontend', () => {
  assert.equal(getCvPath('unknown'), CV_FILES.frontend)
  assert.equal(getCvPath('__proto__'), CV_FILES.frontend)
  assert.equal(getCvPath(undefined), CV_FILES.frontend)
})

test('descargar CV selecciona el archivo solicitado', () => {
  const clicks = []
  const previousDocument = globalThis.document
  globalThis.document = {
    createElement: () => ({
      click() { clicks.push(this.href) },
      remove() {},
      href: '',
      download: ''
    }),
    body: { appendChild() {} }
  }
  try {
    downloadCV('frontend')
    downloadCV('backend')
    downloadCV('fullstack')
    assert.deepEqual(clicks, [CV_FILES.frontend, CV_FILES.backend, CV_FILES.fullstack])
  } finally {
    if (previousDocument === undefined) delete globalThis.document
    else globalThis.document = previousDocument
  }
})

test('el portafolio no publica ni enlaza el documento interno de TrackFile', () => {
  const catalogo = readFileSync(resolve(process.cwd(), 'src/data/proyectos.js'), 'utf8')
  const ficha = readFileSync(resolve(process.cwd(), 'docs/TRACKFILE_CASO_TECNICO.md'), 'utf8')
  assert.ok(catalogo.includes("linkCaseStudy: '#caso-trackfile'"))
  assert.ok(catalogo.includes('TRACKFILE_CASO_TECNICO.md'))
  assert.ok(!catalogo.includes('F-DC-125'))
  assert.ok(ficha.includes('TrackFile'))
})

test('Frontend mantiene un modal para las tres versiones del CV', () => {
  const inicio = readFileSync(resolve(process.cwd(), 'src/components/Inicio.jsx'), 'utf8')
  const modal = readFileSync(resolve(process.cwd(), 'src/components/CVModal.jsx'), 'utf8')
  assert.ok(inicio.includes('Desarrollador Frontend'))
  assert.ok(inicio.includes('onOpenCV'))
  assert.ok(modal.includes('role="dialog"'))
  assert.ok(modal.includes('getCvPath'))
  assert.ok(!inicio.includes('inicio-evidencia'))
  assert.ok(!inicio.includes('proyectos destacados'))
})


test('ambas tarjetas abren su caso dentro de un único modal y conservan enlaces externos', () => {
  const proyectos = readFileSync(resolve(process.cwd(), 'src/components/Proyectos.jsx'), 'utf8')
  const casos = readFileSync(resolve(process.cwd(), 'src/components/CasoTecnico.jsx'), 'utf8')
  assert.ok(proyectos.includes('project-card-hitarea'))
  assert.ok(proyectos.includes("setProyectoActivo(proyecto.id)"))
  assert.ok(proyectos.includes("id={'caso-' + proyecto.id}"))
  assert.ok(proyectos.includes('<CasoTecnico'))
  assert.ok(proyectos.includes('proyecto.linkDemo'))
  assert.ok(casos.includes('cifrya:') && casos.includes('trackfile:'))
  assert.ok(casos.includes('aria-modal="true"'))
  assert.ok(!proyectos.includes('<CasoTecnico />'))
  assert.ok(!proyectos.includes('<FichaTrackFileModal'))
  assert.ok(!casos.includes('F-DC-125'))
})

test('Sobre mí conserva acceso al CV y presenta un diseño de dos columnas', () => {
  const sobre = readFileSync(resolve(process.cwd(), 'src/components/SobreMi.jsx'), 'utf8')
  const css = readFileSync(resolve(process.cwd(), 'src/index.css'), 'utf8')
  assert.ok(sobre.includes('sobre-layout'))
  assert.ok(sobre.includes('onOpenCV'))
  assert.ok(css.includes('grid-template-columns: minmax(0, 1.2fr)'))
  assert.ok(css.includes('@media (max-width: 991px)'))
})

test('se conservan los proyectos secundarios en desplegable', () => {
  const proyectos = readFileSync(resolve(process.cwd(), 'src/components/Proyectos.jsx'), 'utf8')
  assert.ok(proyectos.includes('<details className="otros-proyectos-panel"'))
  assert.ok(proyectos.includes('otrosProyectos.map'))
})

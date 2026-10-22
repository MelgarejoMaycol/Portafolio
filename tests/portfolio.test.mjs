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

test('se prioriza Frontend con modal y dos casos de estudio', () => {
  const inicio = readFileSync(resolve(process.cwd(), 'src/components/Inicio.jsx'), 'utf8')
  const modal = readFileSync(resolve(process.cwd(), 'src/components/CVModal.jsx'), 'utf8')
  const casos = readFileSync(resolve(process.cwd(), 'src/components/CasoTecnico.jsx'), 'utf8')
  assert.ok(inicio.includes('Desarrollador Frontend'))
  assert.ok(modal.includes('role="dialog"'))
  assert.ok(modal.includes('getCvPath'))
  assert.ok(casos.includes('caso-cifrya') && casos.includes('caso-trackfile'))
})

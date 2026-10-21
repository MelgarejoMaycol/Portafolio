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

test('una especialización no reconocida conserva el CV Full Stack', () => {
  assert.equal(getCvPath('unknown'), CV_FILES.fullstack)
  assert.equal(getCvPath('__proto__'), CV_FILES.fullstack)
  assert.equal(getCvPath(undefined), CV_FILES.fullstack)
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

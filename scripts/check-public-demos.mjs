// Comprobación de solo lectura: no usa cuentas ni modifica datos.
const endpoints = [
  { name: 'Portafolio', url: 'https://melgarejomaycol.vercel.app/', kind: 'html' },
  { name: 'Cifrya demo', url: 'https://cifrya.com/demo', kind: 'html' },
  { name: 'Recetas TS', url: 'https://recetas-ts.vercel.app/', kind: 'html' },
  { name: 'TrackFile', url: 'https://trackfile.vercel.app/', kind: 'html' },
  { name: 'Recetas API health', url: 'https://recetas-api-j4p8.onrender.com/health', kind: 'health' },
  { name: 'Recetas API OpenAPI', url: 'https://recetas-api-j4p8.onrender.com/api-docs.json', kind: 'openapi' },
]

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function probe({ name, url, kind }) {
  const maxAttempts = 3
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(url, {
        redirect: 'follow',
        headers: { 'User-Agent': 'Maycol-Portfolio-Public-Demo-Check/1.0' },
        signal: AbortSignal.timeout(60000),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const type = response.headers.get('content-type') || ''
      if (kind === 'html' && !type.includes('text/html')) {
        throw new Error(`Se esperaba HTML y llegó ${type || 'sin Content-Type'}`)
      }
      if (kind === 'health' || kind === 'openapi') {
        const body = await response.json()
        if (kind === 'health' && body.status !== 'ok') throw new Error('Health sin estado ok')
        if (kind === 'openapi' && (!body.paths || typeof body.paths !== 'object')) {
          throw new Error('OpenAPI sin rutas publicadas')
        }
      }
      console.log(`OK  ${name} (${response.status}, intento ${attempt})`)
      return true
    } catch (error) {
      console.warn(`Intento ${attempt}/${maxAttempts} de ${name}: ${error.message}`)
      if (attempt !== maxAttempts) await sleep(15000)
    }
  }
  console.error(`FAIL ${name}: ${url}`)
  return false
}

const outcomes = await Promise.all(endpoints.map(probe))
console.log(`Resultado: ${outcomes.filter(Boolean).length}/${outcomes.length} servicios con respuesta válida.`)
if (outcomes.some(result => !result)) process.exitCode = 1

// Monitor público: solicitudes de solo lectura, sin iniciar sesión ni modificar datos.
// Se ejecuta semanalmente desde .github/workflows/public-demos.yml.
const portfolio = 'https://melgarejomaycol.vercel.app'
const recetasApi = 'https://recetas-api-k91i.onrender.com'

const endpoints = [
  { name: 'Portafolio', url: portfolio + '/', kind: 'html' },
  { name: 'Cifrya demo', url: 'https://cifrya.com/demo', kind: 'html' },
  { name: 'Recetas TS', url: 'https://recetas-ts.vercel.app/', kind: 'html' },
  { name: 'TrackFile', url: 'https://trackfile.vercel.app/', kind: 'html' },
  { name: 'Recetas API inicio', url: recetasApi + '/', kind: 'html' },
  { name: 'Recetas API Swagger', url: recetasApi + '/api-docs/', kind: 'html' },
  { name: 'Recetas API health', url: recetasApi + '/health', kind: 'health' },
  { name: 'Recetas API OpenAPI', url: recetasApi + '/api-docs.json', kind: 'openapi' },
  { name: 'CV Frontend PDF', url: portfolio + '/cv/CV_Maycol_Melgarejo_Frontend.pdf', kind: 'pdf' },
  { name: 'CV Backend PDF', url: portfolio + '/cv/CV_Maycol_Melgarejo_Backend.pdf', kind: 'pdf' },
  { name: 'CV Full Stack PDF', url: portfolio + '/cv/CV_Maycol_Melgarejo_Full_Stack.pdf', kind: 'pdf' },
]

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function validate(response, kind) {
  const type = (response.headers.get('content-type') || '').toLowerCase()

  if (kind === 'html') {
    if (!type.includes('text/html')) {
      throw new Error('Se esperaba HTML; respuesta: ' + (type || 'sin Content-Type'))
    }
    return
  }

  if (kind === 'pdf') {
    // Evita falsos positivos: un fallback HTML de Vercel puede responder 200.
    if (type.includes('text/html')) {
      throw new Error('Se recibió HTML en lugar del PDF')
    }
    const bytes = new Uint8Array(await response.arrayBuffer())
    if (bytes.length < 1024 || new TextDecoder().decode(bytes.subarray(0, 5)) !== '%PDF-') {
      throw new Error('La descarga no contiene un PDF válido')
    }
    return
  }

  const body = await response.json()
  if (kind === 'health' && (body.status !== 'ok' || body.service !== 'recetas-api')) {
    throw new Error('Health no confirma que Recetas API esté operativa')
  }
  if (kind === 'openapi' && (!body.paths || typeof body.paths !== 'object')) {
    throw new Error('OpenAPI no publica un objeto de rutas')
  }
  if (kind === 'openapi' && body.servers?.[0]?.url !== '/') {
    throw new Error('Swagger no utiliza el origen público actual por defecto')
  }
}

async function probe({ name, url, kind }) {
  const maxAttempts = 3
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(url, {
        redirect: 'follow',
        headers: { 'User-Agent': 'Maycol-Portfolio-Public-Demo-Check/1.1' },
        signal: AbortSignal.timeout(60000),
      })
      if (!response.ok) throw new Error('HTTP ' + response.status)
      await validate(response, kind)
      console.log('OK  ' + name + ' (' + response.status + ', intento ' + attempt + ')')
      return true
    } catch (error) {
      console.warn('Intento ' + attempt + '/' + maxAttempts + ' de ' + name + ': ' + error.message)
      if (attempt !== maxAttempts) await sleep(15000)
    }
  }
  console.error('FAIL ' + name + ': ' + url)
  return false
}

const outcomes = await Promise.all(endpoints.map(probe))
const successful = outcomes.filter(Boolean).length
console.log('Resultado: ' + successful + '/' + outcomes.length + ' servicios y documentos con respuesta válida.')
if (outcomes.some(result => !result)) process.exitCode = 1

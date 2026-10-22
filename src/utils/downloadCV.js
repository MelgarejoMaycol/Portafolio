export const CV_FILES = Object.freeze({
  fullstack: '/cv/CV_Maycol_Melgarejo_Full_Stack.pdf',
  frontend: '/cv/CV_Maycol_Melgarejo_Frontend.pdf',
  backend: '/cv/CV_Maycol_Melgarejo_Backend.pdf'
})

export function getCvPath(tipo = 'frontend') {
  return typeof tipo === 'string' && Object.hasOwn(CV_FILES, tipo)
    ? CV_FILES[tipo]
    : CV_FILES.frontend
}

export function downloadCV(tipo = 'frontend') {
  const path = getCvPath(tipo)
  const link = document.createElement('a')
  link.href = path
  link.download = path.split('/').pop()
  document.body.appendChild(link)
  link.click()
  link.remove()
}

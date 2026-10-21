const CV_FILES = {
  fullstack: '/cv/CV_Maycol_Melgarejo_Full_Stack.pdf',
  frontend: '/cv/CV_Maycol_Melgarejo_Frontend.pdf',
  backend: '/cv/CV_Maycol_Melgarejo_Backend.pdf'
}

export function downloadCV(tipo = 'fullstack') {
  const variante = typeof tipo === 'string' && tipo in CV_FILES ? tipo : 'fullstack'
  const link = document.createElement('a')
  link.href = CV_FILES[variante]
  link.download = CV_FILES[variante].split('/').pop()
  document.body.appendChild(link)
  link.click()
  link.remove()
}

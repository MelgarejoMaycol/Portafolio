import cvPdf from '../assets/CV_Maycol_Melgarejo_Full_Stack.pdf'

export function downloadCV() {
  const link = document.createElement('a')

  link.href = cvPdf
  link.download = 'CV_Maycol_Melgarejo_Full_Stack.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

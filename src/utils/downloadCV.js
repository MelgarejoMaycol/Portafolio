import { CV_FRONTEND_PDF_BASE64 } from '../assets/cvFrontendBase64'

function base64ToBlob(base64, mimeType) {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }

  return new Blob([bytes], { type: mimeType })
}

export function downloadCV() {
  const blob = base64ToBlob(CV_FRONTEND_PDF_BASE64, 'application/pdf')
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = 'CV_Maycol_Melgarejo_Frontend.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()

  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

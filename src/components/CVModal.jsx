import { useEffect, useRef, useState } from 'react'
import { getCvPath } from '../utils/downloadCV'

const OPCIONES = [
  { id: 'frontend', etiqueta: 'Frontend · principal', descripcion: 'React, TypeScript e interfaces' },
  { id: 'fullstack', etiqueta: 'Full Stack', descripcion: 'React y Node.js' },
  { id: 'backend', etiqueta: 'Backend', descripcion: 'Node.js y bases de datos' }
]

export default function CVModal({ open, onClose }) {
  const [tipo, setTipo] = useState('frontend')
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const animationFrame = window.requestAnimationFrame(() => dialogRef.current?.focus())

    const handleKeys = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = [...dialogRef.current.querySelectorAll('a[href], button:not([disabled]), iframe')]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeys)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      document.removeEventListener('keydown', handleKeys)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null
  const path = getCvPath(tipo)
  const opcion = OPCIONES.find((item) => item.id === tipo)

  return (
    <div className="cv-overlay" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <section className="cv-dialog" role="dialog" aria-modal="true" aria-labelledby="cv-dialog-title" aria-describedby="cv-dialog-description" tabIndex={-1} ref={dialogRef}>
        <div className="cv-dialog-header">
          <div>
            <p className="text-primary fw-bold small mb-1">Hoja de vida</p>
            <h2 id="cv-dialog-title">Mi perfil profesional</h2>
          </div>
          <button type="button" onClick={onClose} className="cv-dialog-close" aria-label="Cerrar ventana del CV">
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <p className="cv-dialog-description" id="cv-dialog-description">
          Mi enfoque principal es Frontend. Puedes revisar el CV en esta ventana o escoger una especialización según la vacante.
        </p>
        <div className="cv-options" role="group" aria-label="Versión del CV">
          {OPCIONES.map((item) => (
            <button key={item.id} type="button" aria-pressed={tipo === item.id} onClick={() => setTipo(item.id)} title={item.descripcion}>
              {item.etiqueta}
            </button>
          ))}
        </div>
        <div className="cv-viewer">
          <iframe key={path} src={path + '#toolbar=0&navpanes=0&view=FitH'}
            title={'Vista previa de CV ' + opcion.etiqueta} loading="lazy" />
        </div>
        <div className="cv-dialog-footer">
          <div className="cv-selection-status">
            <p>Versión seleccionada: <strong>{opcion.etiqueta}</strong></p>
            <p className="cv-viewer-note">Si tu navegador no muestra la vista previa, abre el archivo PDF directamente.</p>
          </div>
          <div className="cv-actions">
            <a href={path} target="_blank" rel="noopener noreferrer"
              aria-label={'Abrir PDF de la especialidad ' + opcion.etiqueta}
              className="btn btn-outline-light rounded-pill px-3">Abrir PDF</a>
            <a href={path} download={path.split('/').pop()} aria-label={'Descargar CV ' + opcion.etiqueta}
              className="btn btn-primary rounded-pill px-3">
              <i className="fa-solid fa-download me-2" aria-hidden="true"></i>Descargar CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

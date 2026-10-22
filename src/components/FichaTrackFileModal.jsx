import { useEffect, useRef } from 'react'

export default function FichaTrackFileModal({ open, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = requestAnimationFrame(() => ref.current?.focus())
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'Tab' && ref.current) {
        const items = [...ref.current.querySelectorAll('a[href],button:not([disabled])')]
        if (!items.length) return
        if (event.shiftKey && document.activeElement === items[0]) {
          event.preventDefault()
          items[items.length - 1].focus()
        } else if (!event.shiftKey && document.activeElement === items[items.length - 1]) {
          event.preventDefault()
          items[0].focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      previousFocus?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="cv-overlay" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <section className="cv-dialog ficha-trackfile-dialog" role="dialog" aria-modal="true" aria-labelledby="ficha-trackfile-title" aria-describedby="ficha-trackfile-intro" tabIndex={-1} ref={ref}>
        <header className="cv-dialog-header">
          <div>
            <p className="text-primary fw-bold small mb-1">Proyecto académico · Caso de estudio</p>
            <h2 id="ficha-trackfile-title">TrackFile · Ficha técnica</h2>
          </div>
          <button type="button" className="cv-dialog-close" aria-label="Cerrar ficha técnica" onClick={onClose}>
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </header>
        <div className="ficha-trackfile-body">
          <p id="ficha-trackfile-intro" className="text-white-50">
            Sistema de gestión documental y seguimiento de operaciones para transporte.
            Presento el alcance académico y las tecnologías, sin compartir la memoria de grado ni información de terceros.
          </p>
          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <h3 className="h5 text-primary">Problema</h3>
              <p>Información de documentos, usuarios, vehículos y solicitudes dispersa en distintos registros.</p>
            </div>
            <div className="col-md-6">
              <h3 className="h5 text-primary">Solución</h3>
              <p>Consultas, formularios y flujos de seguimiento para documentos, mantenimiento, solicitudes y avisos.</p>
            </div>
            <div className="col-md-6">
              <h3 className="h5 text-primary">Interfaz y UX</h3>
              <p>Cliente Flutter/Dart con pantallas orientadas a tareas, navegación comprensible y estados asociados a operaciones.</p>
            </div>
            <div className="col-md-6">
              <h3 className="h5 text-primary">Arquitectura</h3>
              <p>Cliente multiplataforma conectado con API Java/Spring Boot y base de datos PostgreSQL.</p>
            </div>
          </div>
          <div className="ficha-trackfile-stack" aria-label="Tecnologías de TrackFile">
            {['Flutter', 'Dart', 'Java', 'Spring Boot', 'PostgreSQL'].map((tecnologia) => (
              <span key={tecnologia}>{tecnologia}</span>
            ))}
          </div>
          <p className="small text-white-50 mb-0">
            No se atribuyen usuarios, impacto comercial ni experiencia laboral empresarial a este proyecto de grado.
          </p>
        </div>
        <footer className="cv-dialog-footer">
          <p>Descripción pública, sin anexos internos</p>
          <div className="cv-actions">
            <a href="https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/TRACKFILE_CASO_TECNICO.md" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-3">Leer especificaciones</a>
            <a href="https://trackfile.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-3">Ver aplicación</a>
          </div>
        </footer>
      </section>
    </div>
  )
}

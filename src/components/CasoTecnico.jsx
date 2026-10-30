import { useEffect, useRef } from 'react'

const casos = {
  cifrya: {
    numero: '01',
    tipo: 'Proyecto personal',
    titulo: 'Cifrya: interfaces financieras comprensibles',
    introduccion: 'El reto es presentar cuentas, movimientos y presupuestos de manera comprensible en diferentes dispositivos, mientras la interfaz trabaja con datos reales de una API.',
    puntos: [
      { titulo: 'Necesidad del usuario', texto: 'Consultar el dinero disponible y registrar movimientos con el contexto correcto de cuenta y categoría.' },
      { titulo: 'Decisiones de interfaz', texto: 'Componentes React reutilizables, TypeScript, formularios con validación, jerarquía visual y estados de carga y error.' },
      { titulo: 'Integración y calidad', texto: 'Conexión con una API Express/PostgreSQL, autenticación, pruebas automatizadas y demo navegable sin registro.' }
    ],
    aclaracion: 'Proyecto de desarrollo propio. No se presentan cifras de clientes ni de uso sin evidencia.',
    enlaces: [
      { texto: 'Probar demo', url: 'https://cifrya.com/demo', principal: true },
      { texto: 'Leer ficha técnica', url: 'https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/CIFRYA_CASO_TECNICO.md' }
    ]
  },
  'recetas-ts': {
    numero: '02',
    tipo: 'Proyecto personal con código público',
    titulo: 'Recetas TS: React con calidad comprobable',
    introduccion: 'Aplicación de recetas que permite buscar y consultar contenido desde una API, con navegación en React y utilidades de presentación.',
    puntos: [
      { titulo: 'Interfaz y navegación', texto: 'React, TypeScript, Vite y React Router para organizar las pantallas y búsquedas de recetas.' },
      { titulo: 'Integración de datos', texto: 'Consultas a API, presentación de ingredientes, puntuaciones y traducción de textos a español.' },
      { titulo: 'Verificación del código', texto: 'Pruebas de lógica de búsqueda, traducción y presentación, junto con GitHub Actions para ejecutar lint, pruebas y compilación.' }
    ],
    aclaracion: 'Proyecto personal formativo: el repositorio es público y permite inspeccionar la implementación y las pruebas.',
    enlaces: [
      { texto: 'Probar demo', url: 'https://recetas-ts.vercel.app/', principal: true },
      { texto: 'Ver código', url: 'https://github.com/MelgarejoMaycol/Recetas-TS' }
    ]
  },
  trackfile: {
    numero: '03',
    tipo: 'Proyecto académico de grado',
    titulo: 'TrackFile: organizar procesos documentales',
    introduccion: 'El proyecto plantea una solución para consultar documentos, vehículos, usuarios, solicitudes y mantenimiento en un mismo sistema.',
    puntos: [
      { titulo: 'Problema', texto: 'La información y el estado de los trámites pueden quedar repartidos en diferentes registros.' },
      { titulo: 'Experiencia e interfaz', texto: 'Cliente Flutter/Dart con navegación por tareas, vistas de consulta, formularios y seguimiento de registros.' },
      { titulo: 'Arquitectura', texto: 'Interfaz conectada con una API Java/Spring Boot y almacenamiento PostgreSQL.' }
    ],
    aclaracion: 'Proyecto realizado en equipo: participé en requisitos, diseñé la base de datos y programé el frontend; mi compañera lideró el backend. No se atribuyen cifras de operación empresarial.',
    enlaces: [
      { texto: 'Ver aplicación', url: 'https://trackfile.vercel.app/', principal: true },
      { texto: 'Leer ficha pública', url: 'https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/TRACKFILE_CASO_TECNICO.md' }
    ]
  }
}

export default function CasoTecnico({ proyectoId, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!proyectoId) return undefined

    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = window.requestAnimationFrame(() => panelRef.current?.focus())

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = [...panelRef.current.querySelectorAll('button:not([disabled]), a[href]')]
      if (!focusable.length) return
      if (event.shiftKey && document.activeElement === focusable[0]) {
        event.preventDefault()
        focusable[focusable.length - 1].focus()
      } else if (!event.shiftKey && document.activeElement === focusable[focusable.length - 1]) {
        event.preventDefault()
        focusable[0].focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [proyectoId, onClose])

  const caso = casos[proyectoId]
  if (!caso) return null

  return (
    <div className="cv-overlay project-case-overlay" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <section
        className="cv-dialog project-case-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-case-title"
        aria-describedby="project-case-intro"
        tabIndex={-1}
        ref={panelRef}
      >
        <header className="cv-dialog-header">
          <div>
            <p className="text-primary fw-bold small mb-1">Caso de estudio {caso.numero} · {caso.tipo}</p>
            <h2 id="project-case-title">{caso.titulo}</h2>
          </div>
          <button type="button" className="cv-dialog-close" onClick={onClose} aria-label="Cerrar caso de estudio">
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </header>
        <div className="project-case-body">
          <p id="project-case-intro" className="project-case-intro">{caso.introduccion}</p>
          <div className="project-case-points">
            {caso.puntos.map((punto, index) => (
              <div className="project-case-point" key={punto.titulo}>
                <span className="project-case-step">0{index + 1}</span>
                <h3>{punto.titulo}</h3>
                <p>{punto.texto}</p>
              </div>
            ))}
          </div>
          <p className="project-case-disclaimer">{caso.aclaracion}</p>
        </div>
        <footer className="cv-dialog-footer project-case-footer">
          <p>Decisiones y alcance del proyecto</p>
          <div className="cv-actions">
            {caso.enlaces.map((enlace) => (
              <a
                key={enlace.url}
                href={enlace.url}
                target="_blank"
                rel="noopener noreferrer"
                className={enlace.principal ? 'btn btn-primary rounded-pill px-3' : 'btn btn-outline-light rounded-pill px-3'}
              >
                {enlace.texto}
                <i className="fa-solid fa-arrow-up-right-from-square ms-2" aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </footer>
      </section>
    </div>
  )
}

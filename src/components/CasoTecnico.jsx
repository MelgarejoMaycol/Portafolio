import { useEffect, useRef } from 'react'

const casos = {
  cifrya: {
    numero: '01',
    tipo: 'Proyecto personal',
    titulo: 'Cifrya: cuentas y saldos que se mantienen al día',
    introduccion: 'Desarrollo esta aplicación para organizar cuentas, movimientos y presupuestos en un mismo lugar. Mi trabajo incluye el frontend y los servicios que lo alimentan.',
    puntos: [
      { titulo: 'El problema', texto: 'Cuando una cuenta cambia, sus datos también aparecen en el dashboard y en las proyecciones. Es fácil que otra pantalla quede mostrando información anterior.' },
      { titulo: 'Mi aporte', texto: 'Organicé las pantallas de cuentas con React y TypeScript, integré sus formularios y conecté las acciones con una API propia en Node.js.' },
      { titulo: 'Una decisión técnica', texto: 'Uso TanStack Query con claves por espacio de trabajo. Después de crear o editar una cuenta, invalido las consultas de cuentas, dashboard y proyecciones para solicitar los datos actualizados.' },
      { titulo: 'Dónde verlo', texto: 'La demo permite recorrer las funciones principales sin registrarse. El código de producción es privado y no atribuyo resultados comerciales que no he medido.' }
    ],
    evidencia: {
      titulo: 'Una implementación que puedes preguntar en entrevista',
      detalle: 'En los hooks de cuentas, la invalidación de consultas incluye cuentas, dashboard y proyecciones después de una mutación. Esto ayuda a evitar vistas desactualizadas sin recalcular saldos independientemente en cada pantalla.',
      enlace: 'https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/CIFRYA_CASO_TECNICO.md',
      textoEnlace: 'Ver explicación de arquitectura'
    },
    aclaracion: 'La descripción se basa en el código del proyecto. La demo no equivale a una auditoría de todas las operaciones financieras.',
    enlaces: [
      { texto: 'Abrir demo', url: 'https://cifrya.com/demo', principal: true },
      { texto: 'Leer ficha técnica', url: 'https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/CIFRYA_CASO_TECNICO.md' }
    ]
  },
  'recetas-ts': {
    numero: '02',
    tipo: 'Proyecto personal · Código público',
    titulo: 'Recetas TS: búsqueda, presentación y pruebas',
    introduccion: 'Construí esta aplicación para practicar una interfaz React conectada a datos externos y dejar el código disponible para revisión.',
    puntos: [
      { titulo: 'El problema', texto: 'Los datos de recetas incluyen ingredientes, puntuaciones y textos que deben mostrarse de forma consistente para que la búsqueda resulte útil.' },
      { titulo: 'Mi aporte', texto: 'Desarrollé las pantallas con React, TypeScript y React Router, e integré las consultas a la API de recetas.' },
      { titulo: 'Una decisión técnica', texto: 'Separé las utilidades de traducción y presentación de las pantallas. Añadí pruebas de búsqueda, ingredientes, puntuaciones y textos, ejecutadas junto con lint y build en GitHub Actions.' },
      { titulo: 'Dónde verlo', texto: 'La aplicación y el repositorio son públicos. Se pueden revisar las utilidades, los tests y el flujo de integración continua.' }
    ],
    evidencia: {
      titulo: 'Pruebas públicas del proyecto',
      detalle: 'El repositorio contiene utilidades para traducir y presentar recetas y una CI que ejecuta lint, pruebas TypeScript y build. Puedes comprobarlo sin iniciar sesión.',
      enlace: 'https://github.com/MelgarejoMaycol/Recetas-TS/actions/workflows/ci.yml',
      textoEnlace: 'Ver ejecuciones de pruebas'
    },
    aclaracion: 'Es un proyecto formativo; no le atribuyo usuarios de producción ni métricas de negocio.',
    enlaces: [
      { texto: 'Abrir aplicación', url: 'https://recetas-ts.vercel.app/', principal: true },
      { texto: 'Ver repositorio', url: 'https://github.com/MelgarejoMaycol/Recetas-TS' }
    ]
  },
  trackfile: {
    numero: '03',
    tipo: 'Proyecto de grado en equipo',
    titulo: 'TrackFile: documentos y vehículos en una sola aplicación',
    introduccion: 'Junto con mi compañera definimos las funciones y los roles que necesitaba el sistema para organizar procesos documentales de transporte.',
    puntos: [
      { titulo: 'El problema', texto: 'Documentos, vehículos, mantenimientos y usuarios necesitaban consultarse desde un mismo lugar, según el rol de cada persona.' },
      { titulo: 'Mi aporte', texto: 'Diseñé y documenté la base de datos PostgreSQL y programé el frontend en Flutter/Dart. También realicé pruebas y preparé la aplicación web y su APK de Android.' },
      { titulo: 'Cómo trabajamos', texto: 'Revisamos requisitos y diseños entre los dos. Yo lideré el frontend y mi compañera desarrolló principalmente el backend Spring Boot y su despliegue.' },
      { titulo: 'Dónde verlo', texto: 'La aplicación web y la ficha pública muestran el alcance del proyecto. No publico documentación privada ni afirmo uso empresarial que no haya verificado.' }
    ],
    evidencia: {
      titulo: 'Interfaz desarrollada en equipo',
      detalle: 'El frontend Flutter permite consultar registros y gestionar documentos según los roles del sistema. Diseñé la base de datos y programé el cliente; el servidor Spring Boot fue desarrollado principalmente por mi compañera.',
      enlace: 'https://github.com/MelgarejoMaycol/TRACKFILE',
      textoEnlace: 'Ver frontend en GitHub'
    },
    aclaracion: 'Es un proyecto académico colaborativo, no una experiencia laboral contratada como desarrollador.',
    enlaces: [
      { texto: 'Abrir aplicación', url: 'https://trackfile.vercel.app/', principal: true },
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
          {caso.evidencia && (
            <div className="project-case-evidence">
              <div>
                <h3>{caso.evidencia.titulo}</h3>
                <p>{caso.evidencia.detalle}</p>
              </div>
              <a href={caso.evidencia.enlace} target="_blank" rel="noopener noreferrer">
                {caso.evidencia.textoEnlace}
                <i className="fa-solid fa-arrow-up-right-from-square ms-2" aria-hidden="true"></i>
              </a>
            </div>
          )}
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

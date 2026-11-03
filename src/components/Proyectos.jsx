import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import CasoTecnico from './CasoTecnico'
import { proyectosPrincipales, otrosProyectos } from '../data/proyectos'
import { filtrosProyectos, filtrarProyectos, mostrarRecetasAPI } from '../utils/projectFilters'
import capturaRecetasAPI from '../../public/ProyectoRecetas_Api.png'

const casosDisponibles = new Set(['cifrya', 'recetas-ts', 'trackfile'])

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null)
  const [capturaActiva, setCapturaActiva] = useState(null)
  const visorRef = useRef(null)
  const [filtroActivo, setFiltroActivo] = useState('todos')
  const cerrarCaso = useCallback(() => setProyectoActivo(null), [])
  const cerrarCaptura = useCallback(() => setCapturaActiva(null), [])
  const proyectosVisibles = useMemo(
    () => filtrarProyectos(proyectosPrincipales, filtroActivo),
    [filtroActivo]
  )
  const otrosVisibles = useMemo(
    () => filtrarProyectos(otrosProyectos, filtroActivo),
    [filtroActivo]
  )
  const verAPI = mostrarRecetasAPI(filtroActivo)

  useEffect(() => {
    function abrirDesdeEnlace() {
      const id = window.location.hash.replace('#caso-', '')
      if (casosDisponibles.has(id)) setProyectoActivo(id)
    }
    abrirDesdeEnlace()
    window.addEventListener('hashchange', abrirDesdeEnlace)
    return () => window.removeEventListener('hashchange', abrirDesdeEnlace)
  }, [])

  useEffect(() => {
    if (!capturaActiva) return undefined
    const focusAnterior = document.activeElement
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = window.requestAnimationFrame(() => visorRef.current?.focus())
    const manejarTecla = (event) => {
      if (event.key === 'Escape') cerrarCaptura()
    }
    document.addEventListener('keydown', manejarTecla)
    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('keydown', manejarTecla)
      document.body.style.overflow = overflowAnterior
      focusAnterior?.focus?.()
    }
  }, [capturaActiva, cerrarCaptura])

  return (
    <>
      <section className="proyectos py-4 py-md-5" id="proyectos" aria-labelledby="proyectos-titulo">
        <div className="container px-3 px-md-4">
          <header className="proyectos-heading">
            <span className="proyectos-eyebrow">PROYECTOS</span>
            <h2 id="proyectos-titulo" className="section-title text-white">
              Proyectos <span>destacados</span>
            </h2>
            <p className="proyectos-intro">Aplicaciones y servicios que he desarrollado solo y en equipo.</p>
          </header>

          <div className="proyectos-filtros" role="group" aria-label="Filtrar proyectos por especialidad">
            {filtrosProyectos.map((filtro) => (
              <button
                type="button"
                key={filtro.id}
                className={'proyectos-filtro' + (filtroActivo === filtro.id ? ' is-active' : '')}
                onClick={() => setFiltroActivo(filtro.id)}
                aria-pressed={filtroActivo === filtro.id}
              >
                <i className={'fa-solid ' + filtro.icono} aria-hidden="true" />
                <span>{filtro.texto}</span>
              </button>
            ))}
          </div>
          <p className="visually-hidden" role="status" aria-live="polite">
            {proyectosVisibles.length + otrosVisibles.length + (verAPI ? 1 : 0)} proyectos disponibles en la selección actual
          </p>

          <div
            className="proyectos-destacados"
            style={{ '--project-columns': Math.max(1, proyectosVisibles.length) }}
          >
            {proyectosVisibles.map((proyecto) => (
              <article className="project-card" id={'caso-' + proyecto.id} key={proyecto.id}>
                <button
                  type="button"
                  className="project-card-hitarea"
                  onClick={() => setProyectoActivo(proyecto.id)}
                  aria-label={'Ver caso de estudio de ' + proyecto.titulo}
                  aria-haspopup="dialog"
                />
                <div className={'project-card-media' + (proyecto.imagenContain ? ' project-card-media--contain' : '')}>
                  <img src={proyecto.imagen} alt={'Captura real de ' + proyecto.titulo} loading="lazy" decoding="async" />
                  <span className="project-card-badge">{proyecto.etiqueta}</span>
                  <button type="button" className="project-preview-trigger"
                    onClick={() => setCapturaActiva({ titulo: proyecto.titulo, imagen: proyecto.imagen })}
                    aria-label={'Ampliar captura de ' + proyecto.titulo} title="Ampliar captura del proyecto">
                    <i className="fa-solid fa-expand" aria-hidden="true" />
                    <span>Ampliar</span>
                  </button>
                </div>
                <div className="project-card-content">
                  <h3>{proyecto.titulo}</h3>
                  <p className="project-card-description">{proyecto.descripcion}</p>
                  <div className="project-stack" aria-label={'Tecnologías de ' + proyecto.titulo}>
                    {proyecto.stack.map((tecnologia) => <span key={tecnologia}>{tecnologia}</span>)}
                  </div>
                  <div className="project-card-actions">
                    <div className="project-primary-actions">
                      <a href={proyecto.linkDemo || proyecto.linkPagina} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                        {proyecto.id === 'cifrya' ? 'Probar demo' : 'Ver proyecto'}
                      </a>
                      <button type="button" onClick={() => setProyectoActivo(proyecto.id)} className="btn btn-outline-light project-case-cta">
                        Caso técnico
                      </button>
                    </div>
                    {proyecto.linkCodigo && (
                      <a className="project-code-link" href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github" aria-hidden="true" />
                        Consultar código en GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {verAPI && (
            <aside className="backend-feature" aria-labelledby="recetas-api-title">
              <div className="backend-feature-copy">
                <span className="backend-feature-eyebrow">BACKEND</span>
                <h3 id="recetas-api-title">Recetas API</h3>
                <p>API de recetas con JWT, PostgreSQL y documentación OpenAPI.</p>
                <div className="backend-feature-stack" aria-label="Tecnologías de Recetas API">
                  {['Node.js', 'Express', 'PostgreSQL', 'Swagger'].map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="backend-feature-preview">
                <img src={capturaRecetasAPI} alt="Captura real de la página de Recetas API" loading="lazy" decoding="async" />
                <button type="button" className="project-preview-trigger"
                  onClick={() => setCapturaActiva({ titulo: 'Recetas API', imagen: capturaRecetasAPI })}
                  aria-label="Ampliar captura de Recetas API">
                  <i className="fa-solid fa-expand" aria-hidden="true" />
                  <span>Ampliar</span>
                </button>
              </div>
              <div className="backend-feature-actions">
                <a className="btn btn-primary" href="https://recetas-api-k91i.onrender.com/api-docs" target="_blank" rel="noopener noreferrer">
                  Ver documentación
                </a>
                <a className="btn btn-outline-light" href="https://recetas-api-k91i.onrender.com/" target="_blank" rel="noopener noreferrer">
                  Inicio API
                </a>
                <a className="btn btn-outline-light" href="https://github.com/MelgarejoMaycol/recetas-api" target="_blank" rel="noopener noreferrer">
                  Código en GitHub
                </a>
              </div>
            </aside>
          )}

          {otrosVisibles.length > 0 && (
            <details
              key={filtroActivo}
              className="otros-proyectos-panel"
              id="otros-proyectos"
              open={filtroActivo !== 'todos'}
            >
              <summary className="otros-proyectos-toggle">
                <span>
                  <strong>{filtroActivo === 'todos' ? 'Otros proyectos' : `Más proyectos ${filtroActivo === 'frontend' ? 'Frontend' : 'Full Stack'}`}</strong>
                  <small>{filtroActivo === 'todos' ? 'Trabajos académicos y de formación' : 'Proyectos adicionales de esta especialidad'}</small>
                </span>
                <i className="fa-solid fa-chevron-down" aria-hidden="true" />
              </summary>
              <div className="row g-4 pt-4">
                {otrosVisibles.map((proyecto) => (
                  <div key={proyecto.id} className="col-lg-4 col-md-6 col-12">
                    <article className="card h-100 overflow-hidden otros-proyecto-card">
                      <img src={proyecto.imagen} className="card-img-top" alt={'Captura de ' + proyecto.titulo} loading="lazy" />
                      <div className="card-body d-flex flex-column p-4">
                        <span className="otros-proyecto-tipo">{proyecto.categorias.includes('fullstack') ? 'Full Stack' : 'Frontend'}</span>
                        <h3 className="h5 text-primary fw-bold">{proyecto.titulo}</h3>
                        <p className="text-white-50 flex-grow-1">{proyecto.descripcion}</p>
                        <div className="d-flex gap-2 flex-wrap mt-2">
                          <a href={proyecto.linkDetalles} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill btn-sm px-3">Código / detalles</a>
                          <a href={proyecto.linkPagina} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill btn-sm px-3">Ver página</a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </section>
      <CasoTecnico proyectoId={proyectoActivo} onClose={cerrarCaso} />
      {capturaActiva && (
        <div className="image-preview-overlay" onMouseDown={(event) => {
          if (event.target === event.currentTarget) cerrarCaptura()
        }}>
          <section className="image-preview-dialog" role="dialog" aria-modal="true"
            aria-label={'Captura ampliada de ' + capturaActiva.titulo} tabIndex={-1} ref={visorRef}>
            <header className="image-preview-header">
              <div>
                <span>VISTA DEL PROYECTO</span>
                <h2>{capturaActiva.titulo}</h2>
              </div>
              <button className="image-preview-close" type="button"
                aria-label="Cerrar vista ampliada" onClick={cerrarCaptura}>
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </header>
            <div className="image-preview-content">
              <img src={capturaActiva.imagen} alt={'Captura de pantalla ampliada de ' + capturaActiva.titulo} />
            </div>
            <p className="image-preview-help">Pulsa Escape o cerrar para regresar a los proyectos.</p>
          </section>
        </div>
      )}
    </>
  )
}

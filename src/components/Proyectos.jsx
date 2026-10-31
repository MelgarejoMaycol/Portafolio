import { useCallback, useEffect, useMemo, useState } from 'react'
import CasoTecnico from './CasoTecnico'
import { proyectosPrincipales, otrosProyectos } from '../data/proyectos'
import { filtrosProyectos, filtrarProyectos, mostrarRecetasAPI } from '../utils/projectFilters'
import capturaRecetasAPI from '../../public/ProyectoRecetas_Api.png'

const casosDisponibles = new Set(['cifrya', 'recetas-ts', 'trackfile'])

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null)
  const [filtroActivo, setFiltroActivo] = useState('todos')
  const cerrarCaso = useCallback(() => setProyectoActivo(null), [])
  const proyectosVisibles = useMemo(
    () => filtrarProyectos(proyectosPrincipales, filtroActivo),
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
            {proyectosVisibles.length + (verAPI ? 1 : 0)} proyectos en la selección actual
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
                <div className="project-card-media">
                  <img src={proyecto.imagen} alt={'Captura real de ' + proyecto.titulo} loading="lazy" decoding="async" />
                  <span className="project-card-badge">{proyecto.etiqueta}</span>
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
              </div>
              <div className="backend-feature-actions">
                <a className="btn btn-primary" href="https://recetas-api-j4p8.onrender.com/api-docs" target="_blank" rel="noopener noreferrer">
                  Ver documentación
                </a>
                <a className="btn btn-outline-light" href="https://github.com/MelgarejoMaycol/recetas-api" target="_blank" rel="noopener noreferrer">
                  Código en GitHub
                </a>
              </div>
            </aside>
          )}

          {filtroActivo === 'todos' && (
            <details className="otros-proyectos-panel" id="otros-proyectos">
              <summary className="otros-proyectos-toggle">
                <span>
                  <strong>Otros proyectos</strong>
                  <small>Trabajos académicos y de formación</small>
                </span>
                <i className="fa-solid fa-chevron-down" aria-hidden="true" />
              </summary>
              <div className="row g-4 pt-4">
                {otrosProyectos.map((proyecto) => (
                  <div key={proyecto.id} className="col-lg-4 col-md-6 col-12">
                    <article className="card h-100 overflow-hidden otros-proyecto-card">
                      <img src={proyecto.imagen} className="card-img-top" alt={'Captura de ' + proyecto.titulo} loading="lazy" />
                      <div className="card-body d-flex flex-column p-4">
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
    </>
  )
}

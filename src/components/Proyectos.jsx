import { useCallback, useEffect, useState } from 'react'
import CasoTecnico from './CasoTecnico'
import { proyectosPrincipales, otrosProyectos } from '../data/proyectos'

const casosDisponibles = new Set(['cifrya', 'recetas-ts', 'trackfile'])

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null)
  const cerrarCaso = useCallback(() => setProyectoActivo(null), [])

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
      <section className="proyectos py-4 py-md-5" id="proyectos">
        <div className="container px-3 px-md-4">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="section-title text-white mb-3">Proyectos</h2>
            <p className="text-white-50 proyectos-intro">
              Estos son los proyectos que mejor muestran cómo trabajo. Puedes abrir cada uno y revisar qué hice.
            </p>
          </div>

          <div className="row g-4 mb-5 proyectos-destacados">
            {proyectosPrincipales.map((proyecto) => (
              <div key={proyecto.id} className="col-lg-4 col-md-6 col-12 d-flex">
                <article className="project-card w-100 h-100" id={'caso-' + proyecto.id}>
                  <button
                    type="button"
                    className="project-card-hitarea"
                    onClick={() => setProyectoActivo(proyecto.id)}
                    aria-label={'Ver caso de estudio de ' + proyecto.titulo}
                    aria-haspopup="dialog"
                  />
                  <div className={'project-card-media' + (proyecto.imagenContain ? ' project-card-media-contain' : '')}>
                    <img src={proyecto.imagen} alt={'Vista previa de ' + proyecto.titulo} loading="lazy" />
                    <span className="project-card-view-hint" aria-hidden="true">
                      <i className="fa-solid fa-up-right-and-down-left-from-center me-2"></i>
                      Conocer el proyecto
                    </span>
                  </div>
                  <div className="project-card-content">
                    <span className="project-card-badge">{proyecto.etiqueta}</span>
                    <h3>{proyecto.titulo}</h3>
                    <p className="project-card-description">{proyecto.descripcion}</p>
                    <div className="project-stack" aria-label={'Tecnologías de ' + proyecto.titulo}>
                      {proyecto.stack.map((tecnologia) => <span key={tecnologia}>{tecnologia}</span>)}
                    </div>
                    <div className="project-card-actions">
                      <button type="button" onClick={() => setProyectoActivo(proyecto.id)} className="btn btn-primary project-case-cta">
                        <i className="fa-solid fa-book-open me-2" aria-hidden="true"></i>
                        Ver caso de estudio
                        <i className="fa-solid fa-arrow-right ms-auto" aria-hidden="true"></i>
                      </button>
                      <div className="project-external-actions">
                        <a href={proyecto.linkPagina} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                          <i className="fa-solid fa-arrow-up-right-from-square me-2" aria-hidden="true"></i>
                          {proyecto.id === 'cifrya' ? 'Abrir Cifrya' : 'Ver aplicación'}
                        </a>
                        {proyecto.linkDemo && proyecto.linkDemo !== proyecto.linkPagina ? (
                          <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                            <i className="fa-solid fa-flask me-2" aria-hidden="true"></i>Probar demo
                          </a>
                        ) : (
                          <a href={proyecto.linkDetalles} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                            <i className="fa-regular fa-file-lines me-2" aria-hidden="true"></i>
                            {proyecto.id === 'recetas-ts' ? 'Ver código' : (proyecto.detalleLabel || 'Ficha pública')}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <details className="otros-proyectos-panel" id="otros-proyectos">
            <summary className="otros-proyectos-toggle">
              <span>
                <strong>Explorar otros proyectos</strong>
                <small>Ejercicios de formación y proyectos adicionales</small>
              </span>
              <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </summary>
            <div className="row g-4 pt-4">
              {otrosProyectos.map((proyecto) => (
                <div key={proyecto.id} className="col-lg-4 col-md-6 col-12">
                  <article className="card h-100 overflow-hidden otros-proyecto-card">
                    <img src={proyecto.imagen} className="card-img-top" alt={proyecto.titulo} loading="lazy" />
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
        </div>
      </section>
      <CasoTecnico proyectoId={proyectoActivo} onClose={cerrarCaso} />
    </>
  )
}

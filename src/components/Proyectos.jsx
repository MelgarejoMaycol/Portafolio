import React from 'react'
import CasoTecnico from './CasoTecnico'
import { proyectosPrincipales, otrosProyectos } from '../data/proyectos'



export default function Proyectos() {

  return (
    <section
      className="proyectos py-3 py-md-5"
      id="proyectos"
      style={{
        backgroundColor: '#00091c',
        minHeight: 'auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(13, 110, 253, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container px-2 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-4 mb-md-5">
          <h2 className="section-title text-white mb-3 mb-md-4">Proyectos</h2>
        </div>

        <div className="text-center mb-5">
          <p
            className="text-white"
            style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}
          >
            Proyectos <span className="text-primary">Full Stack</span>, frontend y multiplataforma
            que reflejan mi experiencia construyendo soluciones completas, integrando interfaces,
            APIs, bases de datos y despliegue.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {proyectosPrincipales.map((proyecto) => (
            <div key={proyecto.id} className="col-lg-6 col-12 d-flex">
              <article
                className="card overflow-hidden w-100 h-100"
                style={{
                  background: 'linear-gradient(145deg, #0a1428 0%, #0b1f2a 100%)',
                  border: '1px solid rgba(50, 208, 178, 0.35)',
                  borderRadius: '20px',
                  boxShadow: '0 18px 45px rgba(0, 0, 0, 0.28)'
                }}
              >
                <div
                  style={{
                    height: '260px',
                    backgroundColor: proyecto.imagenContain ? '#f4faf8' : '#071426',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: proyecto.imagenContain ? 'contain' : 'cover',
                      objectPosition: 'center',
                      padding: proyecto.imagenContain ? '2.1rem' : 0,
                      display: 'block'
                    }}
                  />
                </div>

                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3">
                    <span
                      className="badge rounded-pill"
                      style={{
                        backgroundColor: 'rgba(50, 208, 178, 0.14)',
                        color: '#67e8cf',
                        border: '1px solid rgba(103, 232, 207, 0.35)',
                        padding: '0.55rem 0.85rem'
                      }}
                    >
                      {proyecto.etiqueta}
                    </span>
                  </div>

                  <h3 className="text-white fw-bold mb-3" style={{ fontSize: '1.45rem' }}>
                    {proyecto.titulo}
                  </h3>

                  <p className="text-white-50 mb-4" style={{ lineHeight: '1.65', flexGrow: 1 }}>
                    {proyecto.descripcion}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {proyecto.stack.map((tecnologia) => (
                      <span
                        key={tecnologia}
                        className="badge rounded-pill"
                        style={{
                          backgroundColor: '#111f33',
                          color: '#dbeafe',
                          border: '1px solid #233a58',
                          padding: '0.5rem 0.75rem',
                          fontWeight: 500
                        }}
                      >
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    <a
                      href={proyecto.linkPagina}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-3"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                      {proyecto.id === 'cifrya' ? 'Abrir Cifrya' : 'Ver aplicación'}
                    </a>

                    {proyecto.linkDemo && (
                      <a
                        href={proyecto.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary rounded-pill px-3"
                      >
                        <i className="fa-solid fa-flask me-2"></i>
                        Probar demo
                      </a>
                    )}

                    {proyecto.linkCaseStudy && (
                      <a href={proyecto.linkCaseStudy} className="btn btn-outline-light rounded-pill px-3">
                        <i className="fa-solid fa-code me-2"></i>
                        Decisiones técnicas
                      </a>
                    )}

                    {proyecto.linkDetalles && (
                      <a
                        href={proyecto.linkDetalles}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light rounded-pill px-3"
                      >
                        <i className="fa-solid fa-file-lines me-2"></i>
                        {proyecto.detalleLabel || 'Detalles'}
                      </a>
                    )}

                    {proyecto.linkBackend && (
                      <a
                        href={proyecto.linkBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light rounded-pill px-3"
                      >
                        <i className="fa-brands fa-github me-2"></i>
                        Backend
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <CasoTecnico />

        <details className="mt-3">
          <summary className="text-center text-primary fw-bold mb-4" style={{ cursor: 'pointer', padding: '1rem' }}>
            Explorar otros proyectos y ejercicios de formación
          </summary>
        <div className="d-flex align-items-center gap-3 mb-4">
          <div style={{ height: '1px', backgroundColor: '#1e3a5f', flex: 1 }} />
          <h3 className="text-white-50 m-0" style={{ fontSize: '0.95rem', letterSpacing: '0.08em' }}>
            OTROS PROYECTOS · FORMACIÓN Y PRÁCTICA
          </h3>
          <div style={{ height: '1px', backgroundColor: '#1e3a5f', flex: 1 }} />
        </div>

        <div className="row g-4">
          {otrosProyectos.map((proyecto) => (
            <div key={proyecto.id} className="col-lg-4 col-md-6 col-12">
              <div
                className="card h-100 overflow-hidden"
                style={{ backgroundColor: '#0a1428', border: '1px solid #1e3a5f', borderRadius: '15px' }}
              >
                <img
                  src={proyecto.imagen}
                  className="card-img-top"
                  alt={proyecto.titulo}
                  style={{ height: '180px', objectFit: 'cover', objectPosition: 'center' }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary fw-bold" style={{ fontSize: '1.1rem' }}>
                    {proyecto.titulo}
                  </h5>
                  <p
                    className="card-text text-white"
                    style={{ fontSize: '0.9rem', lineHeight: '1.5', flexGrow: 1 }}
                  >
                    {proyecto.descripcion}
                  </p>

                  <div className="d-flex gap-2 flex-wrap">
                    <a
                      href={proyecto.linkDetalles}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill"
                      style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}
                    >
                      Detalles
                    </a>
                    <a
                      href={proyecto.linkPagina}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary rounded-pill"
                      style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}
                    >
                      Ver página
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </details>
      </div>
    </section>
  )
}

import React from 'react'
import proyectoToDo from '../../public/Proyecto TO_DO.png'
import proyectoTaxis from '../../public/ProyectoTaxis.png'
import proyectoCompu from '../../public/ProyectoCompu3D.png'
import proyectoTrackFile from '../../public/ProyectoTrackFile.png'
import ProyectoSeries from '../../public/ProyectoSeries.png'
import ProyectoPokeVerso from '../../public/ProyectoPokeVerso.png'
import documentoTrackFile from '../assets/F-DC-125  desarrollo tecnológico listo.pdf'
import ProyectoRecetas_Api from '../../public/ProyectoRecetas_Api.png'
import RecetasFrontTS from '../../public/ProyectoRecetas_Front_TS.png'

const imagenFynarReal =
  'https://raw.githubusercontent.com/MelgarejoMaycol/frontFynar/main/public/LogoHorizontal.png'

export default function Proyectos() {
  const proyectosPrincipales = [
    {
      id: 'fynar',
      titulo: 'Fynar — Finanzas Personales',
      descripcion:
        'Plataforma Full Stack para centralizar cuentas, movimientos, presupuestos, tarjetas de crédito y obligaciones financieras. Desarrollé la experiencia web, integración con la API, autenticación, modelado de datos, pruebas y despliegue.',
      imagen: imagenFynarReal,
      imagenContain: true,
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      linkPagina: 'https://fynar.vercel.app/',
      linkDetalles: 'https://github.com/MelgarejoMaycol/frontFynar',
      linkBackend: 'https://github.com/MelgarejoMaycol/BackFynar',
      etiqueta: 'Proyecto principal · Full Stack'
    },
    {
      id: 'trackfile',
      titulo: 'TrackFile — Gestión Documental',
      descripcion:
        'Sistema multiplataforma para gestionar, consultar y dar seguimiento a documentos y archivos digitales. Participé en el análisis, diseño e integración entre frontend, backend y base de datos.',
      imagen: proyectoTrackFile,
      imagenContain: false,
      stack: ['Flutter', 'Dart', 'Full Stack', 'Gestión documental'],
      linkPagina: 'https://trackfile.vercel.app/',
      linkDetalles: documentoTrackFile,
      detalleLabel: 'Documento',
      etiqueta: 'Proyecto principal · Proyecto de grado'
    }
  ]

  const otrosProyectos = [
    {
      id: 1,
      titulo: 'Sistema To Do',
      descripcion:
        'Sistema completo de gestión de tareas con backend Django REST Framework y frontend React, incluyendo CI/CD con pruebas automáticas.',
      imagen: proyectoToDo,
      linkDetalles: 'https://github.com/MelgarejoMaycol/SISTEMA_TO_DO-1',
      linkPagina: 'https://to-do-topaz-sigma.vercel.app/'
    },
    {
      id: 2,
      titulo: 'Empresa Taxis',
      descripcion:
        'Página web desarrollada como proyecto universitario para una empresa de transporte en Bucaramanga, Santander.',
      imagen: proyectoTaxis,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Empresa_Taxis',
      linkPagina: 'https://empresa-taxis.vercel.app/'
    },
    {
      id: 3,
      titulo: 'Series de Netflix',
      descripcion:
        'Proyecto inicial de HTML y CSS enfocado en estructura semántica, estilos y presentación de información sobre series de Netflix.',
      imagen: ProyectoSeries,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Series-de-Netflix',
      linkPagina: 'https://melgarejomaycol.github.io/Series-de-Netflix/'
    },
    {
      id: 4,
      titulo: 'COMPU3D',
      descripcion:
        'Aplicación web interactiva que simula una tienda especializada en componentes de computadora e integra experiencias visuales 3D.',
      imagen: proyectoCompu,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Objetos_Web',
      linkPagina: 'https://tiendaobjetos.vercel.app/'
    },
    {
      id: 6,
      titulo: 'PokeVerso',
      descripcion:
        'Aplicación desarrollada con React y Vite que consume la PokeAPI para consultar Pokémon, realizar búsquedas y gestionar favoritos.',
      imagen: ProyectoPokeVerso,
      linkDetalles: 'https://github.com/MelgarejoMaycol/PokeVerso',
      linkPagina: 'https://poke-verso.vercel.app/'
    },
    {
      id: 7,
      titulo: 'Recetas-Api',
      descripcion:
        'API REST para gestionar recetas, usuarios, categorías, ingredientes, preparaciones, comentarios y favoritos.',
      imagen: ProyectoRecetas_Api,
      linkDetalles: 'https://github.com/MelgarejoMaycol/recetas-api',
      linkPagina: 'https://recetas-api-j4p8.onrender.com/'
    },
    {
      id: 8,
      titulo: 'Recetas-Front-TS',
      descripcion:
        'Frontend de la aplicación de recetas desarrollado con React y TypeScript, integrado con una API REST para gestionar recetas, usuarios y favoritos.',
      imagen: RecetasFrontTS,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Recetas-TS',
      linkPagina: 'https://recetas-ts.vercel.app/'
    }
  ]

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
                      Ver aplicación
                    </a>

                    <a
                      href={proyecto.linkDetalles}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light rounded-pill px-3"
                    >
                      <i className={`${proyecto.id === 'fynar' ? 'fa-brands fa-github' : 'fa-solid fa-file-lines'} me-2`}></i>
                      {proyecto.detalleLabel || 'Frontend'}
                    </a>

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

        <div className="d-flex align-items-center gap-3 mb-4">
          <div style={{ height: '1px', backgroundColor: '#1e3a5f', flex: 1 }} />
          <h3 className="text-white-50 m-0" style={{ fontSize: '0.95rem', letterSpacing: '0.08em' }}>
            OTROS PROYECTOS
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
      </div>
    </section>
  )
}

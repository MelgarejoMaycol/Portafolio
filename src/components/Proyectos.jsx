import React from 'react'
import ProyectoFynar from '../../public/ProyectoFynar.svg'
import proyectoToDo from '../../public/Proyecto TO_DO.png'
import proyectoTaxis from '../../public/ProyectoTaxis.png'
import proyectoCompu from '../../public/ProyectoCompu3D.png'
import proyectoTrackFile from '../../public/ProyectoTrackFile.png'
import ProyectoSeries from '../../public/ProyectoSeries.png'
import ProyectoPokeVerso from '../../public/ProyectoPokeVerso.png'
import documentoTrackFile from '../assets/F-DC-125  desarrollo tecnológico listo.pdf'
import ProyectoRecetas_Api from '../../public/ProyectoRecetas_Api.png'
import RecetasFrontTS from '../../public/ProyectoRecetas_Front_TS.png'

export default function Proyectos() {
  const proyectos = [
    {
      id: 'fynar',
      titulo: 'Fynar — Finanzas Personales',
      descripcion:
        'Plataforma Full Stack para centralizar cuentas, movimientos, presupuestos, tarjetas de crédito y obligaciones financieras. Desarrollé la experiencia web, la integración con la API, autenticación, modelado de datos, pruebas y despliegue.',
      imagen: ProyectoFynar,
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      linkDetalles: 'https://github.com/MelgarejoMaycol/frontFynar',
      linkBackend: 'https://github.com/MelgarejoMaycol/BackFynar',
      linkPagina: 'https://fynar.vercel.app/',
      estado: 'completo',
      destacado: true
    },
    {
      id: 1,
      titulo: 'Sistema To Do',
      descripcion: 'Sistema completo de gestión de tareas con backend Django REST Framework y frontend React, incluyendo CI/CD con pruebas automáticas.',
      imagen: proyectoToDo,
      linkDetalles: 'https://github.com/MelgarejoMaycol/SISTEMA_TO_DO-1',
      linkPagina: 'https://to-do-topaz-sigma.vercel.app/',
      estado: 'completo'
    },
    {
      id: 2,
      titulo: 'Empresa Taxis',
      descripcion: 'Empresa Taxis es una página web estática desarrollada como proyecto universitario para una empresa de transporte en Bucaramanga, Santander.',
      imagen: proyectoTaxis,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Empresa_Taxis',
      linkPagina: 'https://empresa-taxis.vercel.app/',
      estado: 'completo'
    },
    {
      id: 3,
      titulo: 'Series de Netflix',
      descripcion: 'Proyecto inicial de HTML y CSS enfocado en estructura semántica, estilos y presentación de información sobre series de Netflix.',
      imagen: ProyectoSeries,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Series-de-Netflix',
      linkPagina: 'https://melgarejomaycol.github.io/Series-de-Netflix/',
      estado: 'completo'
    },
    {
      id: 4,
      titulo: 'COMPU3D',
      descripcion: 'COMPU3D Explorer es una aplicación web interactiva desarrollada como proyecto académico que simula una tienda especializada en componentes de computadora.',
      imagen: proyectoCompu,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Objetos_Web',
      linkPagina: 'https://tiendaobjetos.vercel.app/',
      estado: 'completo'
    },
    {
      id: 5,
      titulo: 'TRACKEILE',
      descripcion: 'Sistema multiplataforma de gestión documental con Flutter y Dart, orientado a la organización y seguimiento de archivos digitales.',
      imagen: proyectoTrackFile,
      linkDetalles: documentoTrackFile,
      linkPagina: 'https://trackfile.vercel.app/',
      estado: 'completo'
    },
    {
      id: 6,
      titulo: 'PokeVerso',
      descripcion: 'Aplicación desarrollada con React y Vite que consume la PokeAPI para consultar Pokémon, realizar búsquedas y gestionar favoritos.',
      imagen: ProyectoPokeVerso,
      linkDetalles: 'https://github.com/MelgarejoMaycol/PokeVerso',
      linkPagina: 'https://poke-verso.vercel.app/',
      estado: 'completo'
    },
    {
      id: 7,
      titulo: 'Recetas-Api',
      descripcion: 'API REST para gestionar recetas, usuarios, categorías, ingredientes, preparaciones, comentarios y favoritos. El servidor puede tardar unos minutos en iniciar la primera vez.',
      imagen: ProyectoRecetas_Api,
      linkDetalles: 'https://github.com/MelgarejoMaycol/recetas-api',
      linkPagina: 'https://recetas-api-j4p8.onrender.com/',
      estado: 'completo'
    },
    {
      id: 8,
      titulo: 'Recetas-Front-TS',
      descripcion: 'Frontend de la aplicación de recetas desarrollado con React y TypeScript, integrado con una API REST para gestionar recetas, usuarios y favoritos.',
      imagen: RecetasFrontTS,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Recetas-TS',
      linkPagina: 'https://recetas-ts.vercel.app/',
      estado: 'completo'
    }
  ]

  return (
    <section className="proyectos py-3 py-md-5" id="proyectos" style={{ backgroundColor: '#00091c', minHeight: 'auto', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(13, 110, 253, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '50%',
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

        <div className="text-center mb-5 mb-md-5">
          <p className="text-white" style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Proyectos <span className="text-primary">Full Stack</span>, frontend y multiplataforma que reflejan mi experiencia construyendo soluciones completas, integrando interfaces, APIs, bases de datos y despliegue.
          </p>
        </div>

        <div className="row g-4">
          {proyectos.map((proyecto) =>
            proyecto.destacado ? (
              <div key={proyecto.id} className="col-12">
                <div
                  className="card overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #0a1428 0%, #0b1f2a 100%)',
                    border: '1px solid rgba(50, 208, 178, 0.35)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 55px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="row g-0 align-items-stretch">
                    <div className="col-lg-6">
                      <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        style={{ width: '100%', height: '100%', minHeight: '290px', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="col-lg-6">
                      <div className="card-body p-4 p-lg-5 h-100 d-flex flex-column justify-content-center">
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
                            Proyecto destacado · Full Stack
                          </span>
                        </div>

                        <h3 className="text-white fw-bold mb-3">{proyecto.titulo}</h3>

                        <p className="text-white-50 mb-4" style={{ lineHeight: '1.7' }}>
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
                            className="btn btn-primary rounded-pill px-4"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                            Ver aplicación
                          </a>
                          <a
                            href={proyecto.linkDetalles}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light rounded-pill px-4"
                          >
                            <i className="fa-brands fa-github me-2"></i>
                            Frontend
                          </a>
                          <a
                            href={proyecto.linkBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light rounded-pill px-4"
                          >
                            <i className="fa-brands fa-github me-2"></i>
                            Backend
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={proyecto.id} className="col-lg-4 col-md-6 col-12">
                <div className="card h-100" style={{ backgroundColor: '#0a1428', border: '1px solid #1e3a5f', borderRadius: '15px' }}>
                  <img
                    src={proyecto.imagen}
                    className="card-img-top"
                    alt={proyecto.titulo}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary fw-bold" style={{ fontSize: '1.1rem' }}>
                      {proyecto.titulo}
                    </h5>
                    <p className="card-text text-white" style={{ fontSize: '0.9rem', lineHeight: '1.5', flexGrow: 1 }}>
                      {proyecto.descripcion}
                    </p>

                    {proyecto.estado === 'en-desarrollo' && (
                      <p className="text-info fw-bold mb-2" style={{ fontSize: '0.85rem' }}>
                        EN DESARROLLO
                      </p>
                    )}

                    <div className="d-flex gap-2">
                      {proyecto.estado === 'completo' && (
                        <a
                          href={proyecto.linkDetalles}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary rounded-pill"
                          style={{ fontSize: '0.85rem', padding: '0.5rem 1.5rem' }}
                        >
                          Detalles
                        </a>
                      )}
                      {proyecto.estado === 'completo' && (
                        <a
                          href={proyecto.linkPagina}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary rounded-pill"
                          style={{ fontSize: '0.85rem', padding: '0.5rem 1.5rem' }}
                        >
                          Ver Página
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

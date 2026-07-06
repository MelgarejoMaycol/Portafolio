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

export default function Proyectos() {
  const proyectos = [
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
      descripcion: 'Mis primeros pasos con la programación, haciendo una página de solo HTML y CSS con información sobre series de Netflix.',
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
      descripcion: 'Sistema Multiplataforma de gestión de documentos con Flutter y Dark, facilitando la organización y seguimiento de archivos digitales.',
      imagen: proyectoTrackFile,
      linkDetalles: documentoTrackFile,
      linkPagina: 'https://trackfile.vercel.app/',
      estado: 'completo'
    },
    {
      id: 6,
      titulo: 'PokeVerso',
      descripcion: 'PokeVerso es una aplicación hecha con React y Vite que consume la PokeAPI para mostrar una lista de Pokémon, buscar por nombre y guardar favoritos.',
      imagen: ProyectoPokeVerso,
      linkDetalles: 'https://github.com/MelgarejoMaycol/PokeVerso',
      linkPagina: 'https://poke-verso.vercel.app/',
      estado: 'completo'
    },
    {
      id: 7,
      titulo: 'Recetas-Api',
      descripcion: 'API REST para gestionar recetas, usuarios, categorias, ingredientes, preparaciones, comentarios y favoritos, el servidor puede tardar unos minutos en encender la primera vez.',
      imagen: ProyectoRecetas_Api,
      linkDetalles: 'https://github.com/MelgarejoMaycol/recetas-api',
      linkPagina: 'https://recetas-api-j4p8.onrender.com/',
      estado: 'completo'
    },
    {
      id: 8,
      titulo: 'Recetas-Front-TS',
      descripcion: 'Frontend de la aplicación de recetas, desarrollado con React y TypeScript, consumiendo la API de recetas para mostrar y gestionar recetas, usuarios y favoritos.',
      imagen: RecetasFrontTS,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Recetas-TS',
      linkPagina: 'https://recetas-ts.vercel.app/',
      estado: 'completo'
    }
  ]

  return (
    <section className="proyectos py-3 py-md-5" id="proyectos" style={{ backgroundColor: '#00091c', minHeight: 'auto', position: 'relative', overflow: 'hidden' }}>
      {/* Luz de fondo */}
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
        {/* Título */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="section-title text-white mb-3 mb-md-4">Proyectos</h2>
        </div>

        {/* Descripción */}
        <div className="text-center mb-5 mb-md-5">
          <p className="text-white" style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            Estos <span className="text-primary">proyectos</span> han sido <span className="text-primary">desarrollados</span> tanto de manera <span className="text-primary">personal</span> como en <span className="text-primary">colaboración</span>, reflejando mi capacidad de <span className="text-primary">trabajo individual</span> y en <span className="text-primary">equipo</span>.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="row g-4">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="col-lg-4 col-md-6 col-12">
              <div className="card h-100" style={{ backgroundColor: '#0a1428', border: '1px solid #1e3a5f', borderRadius: '15px' }}>
                {/* Imagen */}
                <img 
                  src={proyecto.imagen} 
                  className="card-img-top" 
                  alt={proyecto.titulo}
                  style={{ height: '180px', objectFit: 'cover' }}
                />

                {/* Contenido */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary fw-bold" style={{ fontSize: '1.1rem' }}>
                    {proyecto.titulo}
                  </h5>
                  <p className="card-text text-white" style={{ fontSize: '0.9rem', lineHeight: '1.5', flexGrow: 1 }}>
                    {proyecto.descripcion}
                  </p>
                  
                  {/* Estado */}
                  {proyecto.estado === 'en-desarrollo' && (
                    <p className="text-info fw-bold mb-2" style={{ fontSize: '0.85rem' }}>
                      EN DESARROLLO
                    </p>
                  )}
                  
                  {/* Botones */}
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
          ))}
        </div>
      </div>
    </section>
  )
}

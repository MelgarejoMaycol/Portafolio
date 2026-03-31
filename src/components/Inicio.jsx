import React from 'react'
import Imagen from '../../public/avatar.jpg';

export default function Inicio() {
  return (
    <section className="inicio py-2 py-md-3" style={{ minHeight: '85vh' }} id="inicio">
      <div className="container d-flex align-items-center justify-content-center px-2 px-md-4" style={{ minHeight: '85vh' }}>
        <div className="row w-100 align-items-center g-3">
          {/* Contenido izquierdo */}
          <div className="col-lg-6 col-md-12 text-white mb-2 mb-lg-0 order-2 order-lg-1 ps-md-4 ps-lg-5" style={{ paddingLeft: '0.5rem' }}>
            <p className="lead mb-3 mb-md-5 text-primary fw-bold" style={{ fontSize: '0.9rem' }}>
              Bienvenido a mi portafolio 
            </p>
            <h1 className="display-4 fw-bold mb-1 mb-md-2" style={{ fontSize: '2rem' }}>
              Hola, mi nombre es <span className="text-primary">Maycol</span>.
            </h1>
            <h2 className="h3 mb-3 mb-md-5" style={{ fontSize: '1.2rem' }}>
              Desarrollador Web /<span className="text-primary"> Frontend </span>
            </h2>

            <div className="d-flex gap-2 gap-md-3 flex-wrap">
              <a href="#proyectos" className="btn btn-primary px-4 px-md-5 rounded-pill" style={{ fontSize: '0.9rem' }}>
                Ver Proyectos
              </a>
              <a href="#contacto" className="btn btn-outline-primary px-4 px-md-5 rounded-pill" style={{ fontSize: '0.9rem' }}>
                Contactar
              </a>
            </div>
          </div>

          {/* Contenido derecho - Imagen/Avatar */}
          <div className="col-lg-6 col-md-12 text-center position-relative order-1 order-lg-2 mb-3 mb-lg-0">
            {/* Destello/Glow detrás de la imagen */}
            <div className="inicio-glow" />
            
            {/* Imagen */}
            <img
              src={Imagen}
              alt="Maycol Melgarejo"
              className="inicio-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

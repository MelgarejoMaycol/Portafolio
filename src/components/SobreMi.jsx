import React from 'react'
import avatar from '../../public/avatar2.jpeg';import CVPDF from '../assets/CV_MaycolMelgarejo.pdf'
export default function SobreMi() {
  return (
    <section className="sobre-mi py-3 py-md-5" id="sobre" style={{ backgroundColor: '#00091c', minHeight: '100vh' }}>
      <div className="container px-2 px-md-4">
        {/* Título */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="section-title text-white mb-3 mb-md-4">Sobre mí!</h2>
        </div>

        {/* Contenido principal */}
        <div className="row align-items-center g-4">
          {/* Columna izquierda - Descripción */}
          <div className="col-xl-4 col-12 text-white mb-2 mb-xl-0 order-2 order-xl-1">
            <h3 className="text-primary fw-bold mb-2 mb-md-3 h2">Descripción</h3>
            <p className="text-white" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
               Soy <span className="text-primary">estudiante</span> próximo a graduarme de <span className="text-primary">las Unidades Tecnológicas de Santander</span> en la <span className="text-primary">Tecnología en Desarrollo de Sistemas Informáticos</span>. Me desempeño como <span className="text-primary">desarrollador frontend</span>, con conocimientos en <span className="text-primary">desarrollador backend</span> y <span className="text-primary">bases de datos</span>. Me caracterizo por asumir <span className="text-primary">retos</span> con actitud <span className="text-primary">positiva</span> y mantener un <span className="text-primary">aprendizaje constante</span> en el mundo del <span className="text-primary">desarrollo</span>.
            </p>
            <div className="mt-3 mt-md-4">
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = CVPDF
                  link.download = 'CV_MaycolMelgarejo.pdf'
                  link.click()
                }}
                className="btn btn-primary rounded-pill px-4 fw-bold"
                style={{ fontSize: '0.9rem' }}
              >
                <i className="fa-solid fa-download me-2"></i>
                Descargar CV
              </button>
            </div>
          </div>

          {/* Columna central - Imagen */}
          <div className="col-xl-4 col-12 text-center position-relative my-2 my-xl-0 order-1 order-xl-2">
            {/* Destello/Glow detrás de la imagen */}
            <div className="avatar-glow" />
            
            <img
              src={avatar}
              alt="Maycol Melgarejo"
              className="rounded-circle avatar-image"
            />
          </div>

          {/* Columna derecha - Detalles */}
          <div className="col-xl-4 col-12 text-white order-3 order-xl-3">
            <h3 className="text-primary fw-bold mb-3 mb-md-4 h2">Detalles</h3>
            
            {/* Nombre */}
            <div className="mb-3 mb-md-4">
              <p className="text-primary fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Nombre:</p>
              <p className="text-white" style={{ fontSize: '0.95rem' }}>Maycol Melgarejo</p>
            </div>

            {/* Edad */}
            <div className="mb-3 mb-md-4">
              <p className="text-primary fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Edad:</p>
              <p className="text-white" style={{ fontSize: '0.95rem' }}>21 años</p>
            </div>

            {/* Ubicación */}
            <div className="mb-3 mb-md-4">
              <p className="text-primary fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Ubicación:</p>
              <p className="text-white" style={{ fontSize: '0.95rem' }}>Bucaramanga, Santander</p>
            </div>

            {/* Redes sociales */}
            <div className="mt-4 mt-md-5">
              <p className="text-primary fw-bold mb-2 mb-md-3" style={{ fontSize: '0.9rem' }}>Sígueme:</p>
              <div className="d-flex gap-3">
                <a href="https://www.instagram.com/melgarejo_mayc/" target="_blank" rel="noopener noreferrer" className="text-primary">
                  <i className="fa-brands fa-instagram" style={{ fontSize: '1.2rem' }}></i>
                </a>
                <a href="https://github.com/MelgarejoMaycol" target="_blank" rel="noopener noreferrer" className="text-primary">
                  <i className="fa-brands fa-github" style={{ fontSize: '1.2rem' }}></i>
                </a>
                <a href="https://www.linkedin.com/in/maycol-melgarejo-a59bb9322" target="_blank" rel="noopener noreferrer" className="text-primary">
                  <i className="fa-brands fa-linkedin" style={{ fontSize: '1.2rem' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

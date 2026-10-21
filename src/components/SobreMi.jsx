import avatar from '../../public/avatar2.jpeg'
import { downloadCV } from '../utils/downloadCV'

export default function SobreMi() {
  return (
    <section className="sobre-mi py-3 py-md-5" id="sobre" style={{ backgroundColor: '#00091c', minHeight: '100vh' }}>
      <div className="container px-2 px-md-4">
        <div className="text-center mb-4 mb-md-5">
          <h2 className="section-title text-white mb-3 mb-md-4">Sobre mí!</h2>
        </div>

        <div className="row align-items-center g-4">
          <div className="col-xl-4 col-12 text-white mb-2 mb-xl-0 order-2 order-xl-1">
            <h3 className="text-primary fw-bold mb-2 mb-md-3 h2">Descripción</h3>
            <p className="text-white" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              Soy <span className="text-primary">desarrollador Full Stack junior</span> y Tecnólogo en Desarrollo de Sistemas Informáticos de las Unidades Tecnológicas de Santander. Me especializo en <span className="text-primary">React, TypeScript y Node.js</span> para crear interfaces, APIs REST y soluciones completas. En proyectos como <strong>Cifrya</strong> y <strong>TrackFile</strong> he trabajado con PostgreSQL, pruebas, seguridad y despliegues. También tengo conocimientos en Vue.js, Java, Spring Boot, PHP, Laravel y Flutter.
            </p>
            <div className="mt-3 mt-md-4">
              <button
                onClick={() => downloadCV('fullstack')}
                className="btn btn-primary rounded-pill px-4 fw-bold"
                style={{ fontSize: '0.9rem' }}
              >
                <i className="fa-solid fa-download me-2"></i>
                CV Full Stack
              </button>
              <button
                onClick={() => downloadCV('frontend')}
                className="btn btn-outline-primary rounded-pill px-3 mt-2 me-2"
                type="button"
              >CV Frontend</button>
              <button
                onClick={() => downloadCV('backend')}
                className="btn btn-outline-primary rounded-pill px-3 mt-2"
                type="button"
              >CV Backend</button>
            </div>
          </div>

          <div className="col-xl-4 col-12 text-center position-relative my-2 my-xl-0 order-1 order-xl-2">
            <div className="avatar-glow" />

            <img
              src={avatar}
              alt="Maycol Melgarejo"
              className="rounded-circle avatar-image"
            />
          </div>

          <div className="col-xl-4 col-12 text-white order-3 order-xl-3">
            <h3 className="text-primary fw-bold mb-3 mb-md-4 h2">Detalles</h3>

            <div className="mb-3 mb-md-4">
              <p className="text-primary fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Nombre:</p>
              <p className="text-white" style={{ fontSize: '0.95rem' }}>Maycol Melgarejo</p>
            </div>

            <div className="mb-3 mb-md-4">
              <p className="text-primary fw-bold mb-1" style={{ fontSize: '0.9rem' }}>Ubicación:</p>
              <p className="text-white" style={{ fontSize: '0.95rem' }}>Bucaramanga, Santander</p>
            </div>

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

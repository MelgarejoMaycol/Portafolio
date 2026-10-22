import avatar from '../../public/avatar2.jpeg'

export default function SobreMi({ onOpenCV }) {
  return (
    <section className="sobre-mi py-3 py-md-5" id="sobre" style={{ backgroundColor: '#00091c' }}>
      <div className="container px-2 px-md-4">
        <div className="text-center mb-4 mb-md-5">
          <h2 className="section-title text-white mb-3 mb-md-4">Sobre mí</h2>
        </div>
        <div className="row align-items-center g-4">
          <div className="col-xl-4 col-12 text-white order-2 order-xl-1">
            <h3 className="text-primary fw-bold mb-3 h2">Mi enfoque</h3>
            <p className="text-white" style={{ lineHeight: 1.75 }}>
              Soy <strong>desarrollador Frontend junior</strong> y Tecnólogo en Desarrollo de Sistemas
              Informáticos de las Unidades Tecnológicas de Santander. Me centro en <strong>React,
              TypeScript, JavaScript, HTML y CSS</strong>, componentes reutilizables,
              diseño responsivo e integración con APIs REST.
            </p>
            <p className="text-white-50" style={{ lineHeight: 1.7 }}>
              Me interesa cuidar la experiencia de uso: jerarquía visual, formularios claros,
              estados de carga, manejo de errores y accesibilidad. También he trabajado
              con Node.js, PostgreSQL y pruebas, lo que me permite colaborar con backend.
              Cifrya y TrackFile son proyectos que muestran esas decisiones en la práctica.
            </p>
            <button type="button" onClick={onOpenCV} className="btn btn-primary rounded-pill px-4 fw-bold mt-2">
              <i className="fa-regular fa-file-lines me-2" aria-hidden="true"></i>
              Ver mi CV
            </button>
          </div>
          <div className="col-xl-4 col-12 text-center position-relative order-1 order-xl-2">
            <div className="avatar-glow" />
            <img src={avatar} alt="Maycol Melgarejo" className="rounded-circle avatar-image" loading="lazy" />
          </div>
          <div className="col-xl-4 col-12 text-white order-3">
            <h3 className="text-primary fw-bold mb-3 h2">En qué puedo aportar</h3>
            <div className="mb-3">
              <h4 className="h6 text-white fw-bold">Interfaces de producto</h4>
              <p className="text-white-50">Pantallas, formularios, navegación y diseño adaptable a móviles.</p>
            </div>
            <div className="mb-3">
              <h4 className="h6 text-white fw-bold">Frontend conectado a datos</h4>
              <p className="text-white-50">Consumo de APIs, autenticación, validación y manejo de estados.</p>
            </div>
            <div className="mb-4">
              <h4 className="h6 text-white fw-bold">Colaboración técnica</h4>
              <p className="text-white-50">Git, pruebas y comprensión de servicios y datos del lado del servidor.</p>
            </div>
            <p className="text-primary fw-bold">Enlaces profesionales</p>
            <div className="d-flex gap-3">
              <a aria-label="GitHub de Maycol" href="https://github.com/MelgarejoMaycol" target="_blank" rel="noopener noreferrer" className="text-primary">
                <i className="fa-brands fa-github fa-lg" aria-hidden="true"></i>
              </a>
              <a aria-label="LinkedIn de Maycol" href="https://www.linkedin.com/in/maycol-melgarejo-a59bb9322" target="_blank" rel="noopener noreferrer" className="text-primary">
                <i className="fa-brands fa-linkedin fa-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

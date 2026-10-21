import Imagen from '../../public/avatar.jpg'

export default function Inicio() {
  return (
    <section className="inicio py-4 py-md-5" style={{ minHeight: '85vh' }} id="inicio">
      <div className="container d-flex align-items-center justify-content-center px-3 px-md-4" style={{ minHeight: '75vh' }}>
        <div className="row w-100 align-items-center g-4">
          <div className="col-lg-7 text-white order-2 order-lg-1 ps-lg-5">
            <p className="lead text-primary fw-bold mb-3" style={{ fontSize: '0.95rem' }}>
              Disponible para oportunidades de desarrollo junior · Colombia / remoto
            </p>
            <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
              Maycol Melgarejo
              <span className="d-block text-primary">Desarrollador React y TypeScript</span>
            </h1>
            <p className="mb-4 text-white-50" style={{ fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '660px' }}>
              Tecnólogo en Desarrollo de Sistemas Informáticos. Desarrollo interfaces con React y
              TypeScript, APIs con Node.js y aplicaciones conectadas a PostgreSQL.
              Cifrya y TrackFile muestran cómo convierto requisitos en productos funcionales.
            </p>
            <div className="d-flex gap-2 gap-md-3 flex-wrap">
              <a href="https://cifrya.com/demo" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4">
                Probar Cifrya
              </a>
              <a href="#caso-cifrya" className="btn btn-outline-primary rounded-pill px-4">
                Ver caso técnico
              </a>
              <a href="#contacto" className="btn btn-outline-light rounded-pill px-4">
                Contacto y CV
              </a>
            </div>
          </div>
          <div className="col-lg-5 text-center position-relative order-1 order-lg-2">
            <div className="inicio-glow" />
            <img src={Imagen} alt="Retrato de Maycol Melgarejo, desarrollador de software" className="inicio-image" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  )
}

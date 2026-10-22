import Imagen from '../../public/avatar.jpg'

export default function Inicio({ onOpenCV }) {
  return (
    <section className="inicio py-4 py-md-5" id="inicio">
      <div className="container d-flex align-items-center px-3 px-md-4 inicio-inner">
        <div className="row w-100 align-items-center g-4 g-lg-5">
          <div className="col-lg-7 text-white order-2 order-lg-1 ps-lg-5 inicio-copy">
            <p className="lead text-primary fw-bold mb-3" style={{ fontSize: '0.95rem' }}>
              Abierto a oportunidades Frontend Junior · Remoto / Colombia
            </p>
            <h1 className="fw-bold mb-3 inicio-title">
              Maycol Melgarejo
              <span className="d-block text-primary">Desarrollador Frontend · React y TypeScript</span>
            </h1>
            <p className="mb-4 text-white-50 inicio-description">
              Diseño y construyo interfaces web responsivas con React, TypeScript y atención al detalle visual.
              Conecto experiencias de usuario con APIs reales, validaciones y estados de interfaz.
              Mi base Full Stack me ayuda a entender el producto completo, pero mi enfoque es el frontend.
            </p>
            <div className="d-flex gap-2 gap-md-3 flex-wrap inicio-actions">
              <a href="#proyectos" className="btn btn-primary rounded-pill px-4">Ver proyectos</a>
              <button type="button" onClick={onOpenCV} className="btn btn-outline-light rounded-pill px-4">
                Ver CV
              </button>
              <a href="#contacto" className="btn btn-outline-primary rounded-pill px-4">Contactar</a>
            </div>
          </div>
          <div className="col-lg-5 text-center position-relative order-1 order-lg-2 inicio-portrait">
            <div className="inicio-glow" aria-hidden="true" />
            <img src={Imagen} alt="Retrato de Maycol Melgarejo" className="inicio-image" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  )
}

import Imagen from '../../public/avatar.jpg'

export default function Inicio({ onOpenCV }) {
  return (
    <section className="inicio" id="inicio">
      <div className="container d-flex align-items-center px-3 px-md-4 inicio-inner">
        <div className="row w-100 align-items-center g-3 g-lg-4">
          <div className="col-lg-7 text-white order-2 order-lg-1 ps-lg-5 inicio-copy">
            <p className="inicio-availability">
              Abierto a oportunidades Frontend Junior · Remoto / Colombia
            </p>
            <h1 className="fw-bold inicio-title">
              <span className="inicio-title-name">
                <span className="inicio-name-first">Maycol</span>{' '}
                <span className="inicio-name-last">Melgarejo</span>
              </span>
              <span className="inicio-title-role">
                <span className="inicio-role-first">Desarrollador</span>{' '}
                <span className="inicio-role-last">Frontend</span>
              </span>
              <span className="inicio-title-tech">
                <span className="inicio-tech-react">React</span>
                <span className="inicio-tech-separator" aria-hidden="true"> · </span>
                <span className="inicio-tech-typescript">TypeScript</span>
              </span>
            </h1>
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

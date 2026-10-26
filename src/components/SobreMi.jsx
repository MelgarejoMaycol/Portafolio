import avatar from '../../public/avatar2.jpeg'

export default function SobreMi({ onOpenCV }) {
  return (
    <section className="sobre-mi py-4 py-md-5" id="sobre" aria-labelledby="sobre-titulo">
      <div className="container px-3 px-md-4">
        <div className="sobre-layout">
          <div className="sobre-copy">
            <span className="sobre-eyebrow">CONOCE MI PERFIL</span>
            <h2 id="sobre-titulo" className="section-title text-white mb-3">Sobre mí</h2>
            <h3 className="sobre-heading">
              Tecnología y diseño para crear experiencias que funcionan.
            </h3>
            <p className="sobre-lead">
              Soy <strong>desarrollador Frontend junior</strong> y Tecnólogo en Desarrollo de Sistemas
              Informáticos de las Unidades Tecnológicas de Santander. Construyo interfaces intuitivas
              y responsivas, desde el diseño hasta la integración con APIs.
            </p>
            <div className="sobre-tags" aria-label="Tecnologías principales">
              {['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'APIs REST'].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="sobre-actions">
              <button type="button" onClick={onOpenCV} className="btn btn-primary rounded-pill px-4">
                <i className="fa-regular fa-file-lines me-2" aria-hidden="true"></i>Ver mi CV
              </button>
              <a href="#contacto" className="btn btn-outline-light rounded-pill px-4">
                Hablemos
                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <aside className="sobre-visual" aria-label="Fotografía y enlaces profesionales">
            <div className="sobre-portrait">
              <div className="sobre-portrait-glow" aria-hidden="true"></div>
              <img src={avatar} alt="Maycol Melgarejo" className="sobre-photo" loading="lazy" />
              <span className="sobre-portrait-detail" aria-hidden="true"></span>
            </div>
            <div className="sobre-visual-caption">
              <span className="sobre-visual-kicker">DISEÑO + CÓDIGO</span>
              <p>Interfaces intuitivas. Código mantenible.</p>
              <div className="sobre-social-links">
                <a href="https://github.com/MelgarejoMaycol" target="_blank" rel="noopener noreferrer" aria-label="Visitar mi GitHub">
                  <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/maycol-melgarejo-a59bb9322" target="_blank" rel="noopener noreferrer" aria-label="Visitar mi LinkedIn">
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

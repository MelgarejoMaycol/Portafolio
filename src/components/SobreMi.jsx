const fortalezas = [
  {
    icono: 'fa-solid fa-layer-group',
    titulo: 'Interfaces y componentes',
    descripcion: 'Componentes React, TypeScript y diseños que funcionan en móvil.'
  },
  {
    icono: 'fa-solid fa-wand-magic-sparkles',
    titulo: 'Cuidado de la experiencia',
    descripcion: 'Formularios, estados de carga y mensajes de error comprensibles.'
  },
  {
    icono: 'fa-solid fa-code-branch',
    titulo: 'Integración y calidad',
    descripcion: 'Integración REST, Git y pruebas en proyectos propios.'
  }
]

export default function SobreMi({ onOpenCV }) {
  return (
    <section className="sobre-mi py-4 py-md-5" id="sobre" aria-labelledby="sobre-titulo">
      <div className="container px-3 px-md-4">
        <div className="sobre-layout">
          <div className="sobre-copy">
            <span className="sobre-eyebrow">CONOCE MI PERFIL</span>
            <h2 id="sobre-titulo" className="section-title text-white mb-4">Sobre mí</h2>
            <h3 className="sobre-heading">
              Me gusta construir interfaces que funcionen bien y sean fáciles de usar.
            </h3>
            <p className="sobre-lead">
              Soy <strong>desarrollador Frontend junior</strong> y terminé los estudios de Tecnología
              en Desarrollo de Sistemas Informáticos en las Unidades Tecnológicas de Santander.
            </p>
            <p className="sobre-secondary">
              Trabajo principalmente con React y TypeScript. En Cifrya construyo las pantallas
              de cuentas, movimientos y presupuestos, y las conecto con una API que también desarrollo.
              En Recetas TS puedes revisar mi código y las pruebas automatizadas. También he
              desarrollado servicios Backend con Node.js y PostgreSQL.
            </p>
            <div className="sobre-tags" aria-label="Tecnologías principales">
              {['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'UI responsiva'].map((tag) => (
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

          <aside className="sobre-profile-card" aria-label="Especialidades y enlaces profesionales">
            <div className="sobre-profile-intro sobre-profile-tech">
              <span className="sobre-tech-icon" aria-hidden="true"><i className="fa-solid fa-code-branch"></i></span>
              <div>
                <p className="sobre-card-eyebrow">DEL PROYECTO AL CÓDIGO</p>
                <h3>Interfaces, APIs y pruebas</h3>
                <span>Frontend como especialidad · Full Stack como práctica</span>
              </div>
            </div>
            <div className="sobre-capabilities">
              {fortalezas.map((fortaleza) => (
                <div className="sobre-capability" key={fortaleza.titulo}>
                  <span className="sobre-capability-icon">
                    <i className={fortaleza.icono} aria-hidden="true"></i>
                  </span>
                  <div>
                    <h4>{fortaleza.titulo}</h4>
                    <p>{fortaleza.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sobre-social">
              <span>Encuentra mi trabajo</span>
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

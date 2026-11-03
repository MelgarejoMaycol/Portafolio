const principales = [
  { nombre: 'React', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { nombre: 'TypeScript', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { nombre: 'JavaScript', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { nombre: 'HTML5', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { nombre: 'CSS3', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { nombre: 'Git', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
]

const capacidades = ['Integración de APIs REST', 'Diseño responsivo', 'Formularios y validaciones']

const complementarias = [
  { nombre: 'Node.js', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { nombre: 'Express', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', monocromo: true },
  { nombre: 'PostgreSQL', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { nombre: 'Flutter', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { nombre: 'Dart', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { nombre: 'Vue.js', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { nombre: 'PHP', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { nombre: 'Laravel', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { nombre: 'Java', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { nombre: 'Spring Boot', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { nombre: 'MySQL', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
]

export default function Herramientas() {
  return (
    <section className="herramientas py-4 py-md-5" id="herramientas" aria-labelledby="herramientas-titulo">
      <div className="container px-3 px-md-4">
        <div className="text-center mb-4">
          <h2 id="herramientas-titulo" className="section-title text-white mb-3">Herramientas y tecnologías</h2>
          <p className="herramientas-intro">Estas son las herramientas que más utilizo. También he trabajado con otras tecnologías en proyectos y formación.</p>
        </div>
        <div className="habilidades-layout">
          <div className="habilidades-principales">
            <h3>Mi trabajo en frontend</h3>
            <div className="habilidades-grid">
              {principales.map((item) => (
                <div className="habilidad-principal" key={item.nombre}>
                  <img src={item.icono} alt="" loading="lazy" aria-hidden="true" />
                  <strong>{item.nombre}</strong>
                </div>
              ))}
            </div>
            <div className="habilidades-capacidades">
              {capacidades.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <aside className="habilidades-complementarias">
            <h3>También he utilizado</h3>
            <p>En Cifrya, TrackFile y proyectos académicos.</p>
            <div className="habilidades-etiquetas">
              {complementarias.map((item) => (
                <div
                  key={item.nombre}
                  className={'habilidad-complementaria' + (item.monocromo ? ' is-monochrome' : '')}
                >
                  <img src={item.icono} alt="" loading="lazy" aria-hidden="true" />
                  <strong>{item.nombre}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import certificadosPDF from '../assets/Certificados.pdf'

export default function Herramientas() {
  const pilas = [
    {
      titulo: 'Frontend',
      herramientas: [
        {
          nombre: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          url: 'https://reactjs.org/'
        },
        {
          nombre: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/'
        },
        {
          nombre: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          url: 'https://www.typescriptlang.org/'
        },
        {
          nombre: 'HTML5',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/'
        },
        {
          nombre: 'CSS3',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/'
        },
        {
          nombre: 'Bootstrap',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
          url: 'https://getbootstrap.com/'
        }
      ]
    },
    {
      titulo: 'Backend',
      herramientas: [
        {
          nombre: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          url: 'https://nodejs.org/'
        },
        {
          nombre: 'Express',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          url: 'https://expressjs.com/'
        },
        {
          nombre: 'Laravel',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
          url: 'https://laravel.com/'
        },
        {
          nombre: 'PHP',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          url: 'https://www.php.net/'
        },
        {
          nombre: 'Java',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          url: 'https://www.java.com/'
        },
        {
          nombre: 'Spring Boot',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
          url: 'https://spring.io/projects/spring-boot/'
        }
      ]
    },
    {
      titulo: 'Datos y flujo',
      herramientas: [
        {
          nombre: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          url: 'https://www.mysql.com/'
        },
        {
          nombre: 'PostgreSQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          url: 'https://www.postgresql.org/'
        },
        {
          nombre: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          url: 'https://git-scm.com/'
        },
        {
          nombre: 'XAMPP',
          logo: 'https://cdn.simpleicons.org/xampp/FB7A24',
          url: 'https://www.apachefriends.org/'
        }
      ]
    }
  ]

  return (
    <section className="herramientas py-3 py-md-5" id="herramientas" style={{ backgroundColor: '#00091c', minHeight: 'auto', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(13, 110, 253, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container px-2 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-4 mb-md-5">
          <h2 className="section-title text-white mb-3 mb-md-4">Herramientas y tecnologias</h2>
        </div>

        <div className="text-center mb-5">
          <p className="text-primary fw-bold herramientas-resumen">
            React - TypeScript - Laravel - PHP - Java - Spring Boot - MySQL - PostgreSQL - JavaScript - Node.js - Express - Bootstrap - Git - XAMPP
          </p>
        </div>

        <div className="herramientas-pilas">
          {pilas.map((pila) => (
            <div className="herramientas-pila" key={pila.titulo}>
              <h3>{pila.titulo}</h3>
              <div className="herramientas-stack">
                {pila.herramientas.map((herramienta) => (
                  <a
                    key={herramienta.nombre}
                    href={herramienta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="herramientas-item"
                    title={herramienta.nombre}
                  >
                    <div className="herramientas-icon">
                      <img
                        src={herramienta.logo}
                        alt={herramienta.nombre}
                      />
                    </div>
                    <span>{herramienta.nombre}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center herramientas-certificados">
          <button
            onClick={() => {
              const link = document.createElement('a')
              link.href = certificadosPDF
              link.download = 'Certificados.pdf'
              link.click()
            }}
            className="btn btn-primary rounded-pill px-5 fw-bold"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Certificados
          </button>
        </div>
      </div>
    </section>
  )
}

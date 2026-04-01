import React from 'react'
import certificadosPDF from '../assets/Certificados.pdf'

export default function Herramientas() {
  const herramientas = [
    { 
      nombre: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      url: 'https://reactjs.org/'
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
      nombre: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/'
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
    },
    { 
      nombre: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      url: 'https://git-scm.com/'
    },
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
      nombre: 'Spring Boot', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      url: 'https://spring.io/projects/spring-boot/'
    }
  ]

  // Función para generar posiciones desordenadas pero espaciadas homogéneamente
  const getRandomPosition = (index) => {
    const basePositions = [
      { top: '1%', left: '8%' },
      { top: '4%', left: '30%' },
      { top: '2%', left: '52%' },
      { top: '5%', right: '8%' },
      { top: '30%', left: '8%' },
      { top: '29%', left: '30%' },
      { top: '32%', left: '52%' },
      { top: '25%', right: '8%' },
      { top: '20%', left: '19%' },
      { top: '20%', left: '41%' },
      { top: '6%', right: '22%' },
      { top: '19%', left: '63%' }
    ]
    return basePositions[index] || basePositions[0]
  }

  return (
    <section className="herramientas py-3 py-md-5" id="herramientas" style={{ backgroundColor: '#00091c', minHeight: 'auto', position: 'relative', overflow: 'hidden' }}>
      {/* Luz de fondo */}
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
        {/* Título */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="section-title text-white mb-3 mb-md-4">Herramientas y tecnologías</h2>
        </div>

        {/* Lista de tecnologías */}
        <div className="text-center mb-5">
          <p className="text-primary fw-bold" style={{ fontSize: '0.9rem', lineHeight: '1.8', flexWrap: 'wrap' }}>
            React · Laravel · PHP · Java · Spring Boot · MySQL · PostgreSQL · JavaScript · Bootstrap · Git · XAMPP
          </p>
        </div>

        {/* Grid de iconos desordenados */}
        <div style={{ position: 'relative', height: '550px', marginBottom: '1rem'}}>
          {herramientas.map((herramienta, index) => {
            const position = getRandomPosition(index)
            return (
              <a
                key={index}
                href={herramienta.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  ...position,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `scale(1.2)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `scale(1)`
                }}
                title={herramienta.nombre}
              >
                <div className="herramientas-icon">
                  <img 
                    src={herramienta.logo}
                    alt={herramienta.nombre}
                  />
                </div>
              </a>
            )
          })}
        </div>

        {/* Botón Certificados */}
        <div className="text-center" style={{ marginTop: '-18rem' }}>
          <button
            onClick={() => {
              const link = document.createElement('a')
              link.href = certificadosPDF
              link.download = 'Certificados.pdf'
              link.click()
            }}
            className="btn btn-primary rounded-pill px-5 fw-bold"
            style={{ border: 'none', cursor: 'pointer', zIndex: 10, position: 'relative' }}
          >
            Certificados
          </button>
        </div>
      </div>
    </section>
  )
}

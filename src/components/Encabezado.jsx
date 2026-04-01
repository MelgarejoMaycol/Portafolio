import React, { useState, useEffect, useRef } from 'react'
import CVPDF from '../assets/CV_MaycolMelgarejo.pdf';
import '../index.css';

export default function Encabezado() {
  const [activeSection, setActiveSection] = useState('inicio')
  const isUserClickRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      // Solo actualizar si el usuario no acaba de hacer click en un botón
      if (isUserClickRef.current) return

      const sections = ['inicio', 'sobre', 'proyectos', 'herramientas', 'contacto']
      let current = 'inicio'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Si el elemento está en el top de la pantalla (con margen de 400px para mejor detección)
          if (rect.top <= 400) {
            current = section
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    const navToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarCollapse.classList.contains('show')) {
      navToggler.click();
    }
  };

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault()
    
    // Set que estamos en un click de usuario
    isUserClickRef.current = true
    setActiveSection(sectionId)
    
    if (sectionId === 'inicio') {
      // Primero cierra el menú
      handleNavClick()
      // Luego hace scroll con delay
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        // Después de terminar el scroll, habilitar detección automática
        setTimeout(() => {
          isUserClickRef.current = false
        }, 800)
      }, 200)
    } else {
      const element = document.getElementById(sectionId)
      
      if (element) {
        // Primero cierra el menú
        handleNavClick()
        
        // Luego hace scroll con delay para que el menú se recoja primero
        setTimeout(() => {
          const isMobile = window.innerWidth < 992
          const offset = isMobile ? -140 : -40
          
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition + offset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          // Después de terminar el scroll, habilitar detección automática
          setTimeout(() => {
            isUserClickRef.current = false
          }, 800)
        }, 200)
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3">
      <div className="container-fluid px-0">
        {/* Nombre a la izquierda */}
        <span className="navbar-brand fw-bold fs-5 flex-shrink-0 m-0">Maycol Melgarejo</span>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler me-3 me-md-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-column flex-lg-row gap-3 m-0 w-100 justify-content-center">
            <li className="nav-item text-center text-lg-start">
              <a className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} href="#inicio" onClick={(e) => handleNavLinkClick(e, 'inicio')}>Inicio</a>
            </li>
            <li className="nav-item text-center text-lg-start">
              <a className={`nav-link ${activeSection === 'sobre' ? 'active' : ''}`} href="#sobre" onClick={(e) => handleNavLinkClick(e, 'sobre')}>Sobre mí</a>
            </li>
            <li className="nav-item text-center text-lg-start">
              <a className={`nav-link ${activeSection === 'proyectos' ? 'active' : ''}`} href="#proyectos" onClick={(e) => handleNavLinkClick(e, 'proyectos')}>Proyectos</a>
            </li>
            <li className="nav-item text-center text-lg-start">
              <a className={`nav-link ${activeSection === 'herramientas' ? 'active' : ''}`} href="#herramientas" onClick={(e) => handleNavLinkClick(e, 'herramientas')}>Herramientas</a>
            </li>
            <li className="nav-item text-center text-lg-start">
              <a className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`} href="#contacto" onClick={(e) => handleNavLinkClick(e, 'contacto')}>Contáctame</a>
            </li>
          </ul>

          {/* Botón CV para móvil */}
          <div className="d-lg-none w-100 d-flex justify-content-center mt-3">
            <a href="#cv" className="btn btn-primary px-4 fw-bold" onClick={handleNavClick}>CV</a>
          </div>
        </div>

        {/* Botón CV para escritorio */}
        <button
                        onClick={() => {
                          const link = document.createElement('a')
                          link.href = CVPDF
                          link.download = 'CV_MaycolMelgarejo.pdf'
                          link.click()
                        }}
                        className="btn btn-primary px-5 d-flex align-items-center justify-content-center rounded-pill fw-bold d-none d-lg-flex me-5"
                      >
                        CV
        </button>
        
      </div>
    </nav>
  )
}

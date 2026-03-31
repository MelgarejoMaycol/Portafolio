import React from 'react'
import '../index.css';

export default function Encabezado() {
  const handleNavClick = () => {
    const navToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarCollapse.classList.contains('show')) {
      navToggler.click();
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
              <a className="nav-link" href="#inicio" onClick={handleNavClick}>Inicio</a>
            </li>
            <li className="nav-item text-center text-lg-start">
              <a className="nav-link active" href="#sobre" onClick={handleNavClick}>Sobre mí</a>
            </li>
            <li className="nav-item text-center text-lg-start">
              <a className="nav-link" href="#proyectos" onClick={handleNavClick}>Proyectos</a>
            </li>
            <li className="nav-item text-center text-lg-start">
              <a className="nav-link" href="#herramientas" onClick={handleNavClick}>Herramientas</a>
            </li>
            <li className="nav-item text-center text-lg-start">
              <a className="nav-link" href="#contacto" onClick={handleNavClick}>Contáctame</a>
            </li>
          </ul>

          {/* Botón CV para móvil */}
          <div className="d-lg-none w-100 d-flex justify-content-center mt-3">
            <a href="#cv" className="btn btn-primary px-4 fw-bold" onClick={handleNavClick}>CV</a>
          </div>
        </div>

        {/* Botón CV para escritorio */}
        <a href="#cv" className="btn btn-primary px-5 d-flex align-items-center justify-content-center rounded-pill fw-bold d-none d-lg-flex me-5">CV</a>
      </div>
    </nav>
  )
}

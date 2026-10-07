import React, { useEffect, useMemo, useState } from 'react'
import certificadosPDF from '../assets/Certificados.pdf'
import certificado01 from '../assets/certificados/certificado_01.pdf'
import certificado02 from '../assets/certificados/certificado_02.pdf'
import certificado03 from '../assets/certificados/certificado_03.pdf'
import certificado04 from '../assets/certificados/certificado_04.pdf'
import certificado05 from '../assets/certificados/certificado_05.pdf'
import certificado06 from '../assets/certificados/certificado_06.pdf'
import certificado07 from '../assets/certificados/certificado_07.pdf'
import certificado08 from '../assets/certificados/certificado_08.pdf'
import certificado09 from '../assets/certificados/certificado_09.pdf'
import certificado10 from '../assets/certificados/certificado_10.pdf'
import certificado11 from '../assets/certificados/certificado_11.pdf'
import certificado12 from '../assets/certificados/certificado_12.pdf'
import certificado13 from '../assets/certificados/certificado_13.pdf'
import unabCongreso from '../assets/certificados/unab-congreso-2025.pdf'

const certificados = [
  {
    titulo: 'CS50x: Introduction to Computer Science',
    institucion: 'Harvard University',
    anio: 2026,
    categoria: 'Desarrollo',
    icono: 'fa-solid fa-graduation-cap',
    destacado: true,
    url: 'https://cs50.harvard.edu/certificates/7d215635-ef95-4138-82ae-d5c2fe41416e',
    accion: 'Verificar certificado'
  },
  {
    titulo: 'Claude 101',
    institucion: 'Anthropic Education',
    anio: 2026,
    categoria: 'IA',
    icono: 'fa-solid fa-brain',
    destacado: true,
    url: 'https://anthropic.skilljar.com/accounts/profile/',
    accion: 'Ver credencial'
  },
  {
    titulo: 'AI Capabilities and Limitations',
    institucion: 'Anthropic Education',
    anio: 2026,
    categoria: 'IA',
    icono: 'fa-solid fa-brain',
    destacado: true,
    url: 'https://anthropic.skilljar.com/accounts/profile/',
    accion: 'Ver credencial'
  },
  {
    titulo: 'Universidad Angular - De Cero a Experto',
    institucion: 'Udemy',
    anio: 2026,
    categoria: 'Desarrollo',
    icono: 'fa-brands fa-angular',
    destacado: true,
    url: 'https://e2.udemymail.com/ls/click?upn=u001.TtzRjPf63yUg9yrAxgqE7735MMJ3LdrdgxmaXqQZmIcKtteem0YkFhUyRcH1V-2Fzq-2FvB0eQ0O3PKlU8FlP5BfWghcPgD5p4bLKmUyBbsIs-2BIdwzukAwqBJR-2FCfa4alo82MIQg3WM-2Fk8qKC1KX30YjFh7cZK4xmFPmVu1wLr6U1VZxbVIAkuv2ML1I8zcvLO3cpQsl_MB72SU25nsCnNUVqQP9N2M1jB9M6lofTCvm9cPVMgiWlqpa8ZDJfxDzgom-2BlWlx2NPiCeJHj982bPj-2BXX-2BDNBBYYPnNmH2QDeZ6bVZvikke4NvQv6xAS0ExEUrQ74Xqxof2Jwv9r1ZB1B8VNrQTZWoWKb3Q5IBlipXLsfVCQt15laIin5k2GNOvQQDkP7c-2BD4cJ1xMhK-2F8MhwJMCsdWu4Zh61TkkIL99bA34Q9Bch6WC8rWkmrcGhv0FKXXwo-2BiccKOuw1TpJxur-2FmsgaKGKusntM772VYBxam5ovBSvyNvxzyq17xcKrwgC3TDj-2BYl9JfdH-2FmU9e7vQmJ7ia5sc3w-3D-3D',
    accion: 'Ver credencial'
  },
  {
    titulo: 'Apropiación de los conceptos en ciberseguridad',
    institucion: 'SENA',
    anio: 2026,
    categoria: 'Ciberseguridad',
    icono: 'fa-solid fa-shield-halved',
    destacado: true,
    url: 'https://www.senasofiaplus.edu.co/',
    accion: 'Consultar certificado'
  },
  {
    titulo: 'Desarrollo con Node.js: Aplicación, Testing y Seguridad',
    institucion: 'Udemy',
    anio: 2026,
    categoria: 'Desarrollo',
    icono: 'fa-brands fa-node-js',
    destacado: true,
    pdf: certificado11
  },
  {
    titulo: 'TypeScript para principiantes desde 0',
    institucion: 'Udemy',
    anio: 2026,
    categoria: 'Desarrollo',
    icono: 'fa-solid fa-code',
    destacado: true,
    pdf: certificado13
  },
  {
    titulo: 'Flutter y Dart: Desarrollo de Apps Mobile',
    institucion: 'Udemy',
    anio: 2026,
    categoria: 'Desarrollo',
    icono: 'fa-solid fa-mobile-screen-button',
    destacado: true,
    pdf: certificado12
  },
  {
    titulo: 'Bootcamp Programación',
    institucion: 'Asoandes / Certika',
    anio: 2025,
    categoria: 'Desarrollo',
    icono: 'fa-solid fa-terminal',
    url: 'https://r.info.certika.co/tr/cl/PlgjEGROMh68C-IpYj5lqq8Yb18zi8jgvJPKMCv7zyuVgZfwv_V9LJxEImCfude3D4dskas6PFKq8w5xb1rjkEPJFEuKrRhPuJTzHnqhVP2CLqlpPyKfgq6db2AnC9ZhRKQrP9i8OG1W9tgEoRFTh8n5ioVH6lMiCNAeYJ0WLBPj0snfKQIOItbo5v1-CESGJsr1KnwgtcjJroauumGY-CgojV6TmWFgxikXGqXH-oQXscika6jMz_3lnZ0c2SF1D37RE13p_qGdKSHu-d4kyigg5FvTfA3tF2Jj0LA_AfBUhLCeSPMm4CY',
    accion: 'Ver credencial'
  },
  {
    titulo: 'Participación en Semillero Azul',
    institucion: 'Unidades Tecnológicas de Santander',
    anio: 2025,
    categoria: 'Formación',
    icono: 'fa-solid fa-flask',
    pdf: certificado07
  },
  {
    titulo: 'Congreso Internacional de Economía y Negocios',
    institucion: 'Universidad Autónoma de Bucaramanga',
    anio: 2025,
    categoria: 'Formación',
    icono: 'fa-solid fa-building-columns',
    pdf: unabCongreso
  },
  {
    titulo: 'Java Programming',
    institucion: 'Oracle Academy',
    anio: 2024,
    categoria: 'Desarrollo',
    icono: 'fa-brands fa-java',
    pdf: certificado05
  },
  {
    titulo: 'Java Foundations',
    institucion: 'Oracle Academy',
    anio: 2024,
    categoria: 'Desarrollo',
    icono: 'fa-brands fa-java',
    pdf: certificado04
  },
  {
    titulo: 'Desarrollador Front-end',
    institucion: 'Capacítate para el empleo',
    anio: 2024,
    categoria: 'Desarrollo',
    icono: 'fa-solid fa-laptop-code',
    pdf: certificado10
  },
  {
    titulo: 'Accesibilidad Web',
    institucion: 'Código Facilito',
    anio: 2024,
    categoria: 'Desarrollo',
    icono: 'fa-solid fa-universal-access',
    pdf: certificado01
  },
  {
    titulo: 'Creación de modelos 3D para entornos virtuales',
    institucion: 'Capacítate para el empleo',
    anio: 2024,
    categoria: 'Formación',
    icono: 'fa-solid fa-cube',
    pdf: certificado08
  },
  {
    titulo: 'Build 20 JavaScript Projects',
    institucion: 'Udemy',
    anio: 2024,
    categoria: 'Desarrollo',
    icono: 'fa-brands fa-js',
    pdf: certificado06
  },
  {
    titulo: 'Competencias Digitales Avanzadas',
    institucion: 'Politécnico de Suramérica',
    anio: 2023,
    categoria: 'Formación',
    icono: 'fa-solid fa-certificate',
    pdf: certificado09
  },
  {
    titulo: 'Curso Profesional Desarrollo Web',
    institucion: 'Código Facilito',
    anio: 2023,
    categoria: 'Desarrollo',
    icono: 'fa-solid fa-code',
    pdf: certificado03
  },
  {
    titulo: 'Curso de CSS',
    institucion: 'Código Facilito',
    anio: 2023,
    categoria: 'Desarrollo',
    icono: 'fa-brands fa-css3-alt',
    pdf: certificado02
  }
]

const filtros = ['Todos', 'Desarrollo', 'IA', 'Ciberseguridad', 'Formación']
const destacadosPreferidos = [
  'CS50x: Introduction to Computer Science',
  'Claude 101',
  'Desarrollo con Node.js: Aplicación, Testing y Seguridad'
]

export default function Certificaciones() {
  const [filtro, setFiltro] = useState('Todos')
  const [seleccionado, setSeleccionado] = useState(null)

  const filtrados = useMemo(
    () => filtro === 'Todos'
      ? certificados
      : certificados.filter((certificado) => certificado.categoria === filtro),
    [filtro]
  )

  const destacados = useMemo(() => {
    if (filtro !== 'Todos') return filtrados.slice(0, Math.min(3, filtrados.length))

    return destacadosPreferidos
      .map((titulo) => certificados.find((certificado) => certificado.titulo === titulo))
      .filter(Boolean)
  }, [filtro, filtrados])

  const archivo = useMemo(
    () => filtrados.filter((certificado) => !destacados.includes(certificado)),
    [filtrados, destacados]
  )

  const gruposPorAnio = useMemo(
    () => archivo.reduce((grupos, certificado) => {
      if (!grupos[certificado.anio]) grupos[certificado.anio] = []
      grupos[certificado.anio].push(certificado)
      return grupos
    }, {}),
    [archivo]
  )

  const instituciones = useMemo(
    () => new Set(certificados.map((certificado) => certificado.institucion)).size,
    []
  )

  useEffect(() => {
    if (!seleccionado) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSeleccionado(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [seleccionado])

  const abrirCertificado = (certificado) => {
    if (certificado.pdf) {
      setSeleccionado(certificado)
      return
    }

    window.open(certificado.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="certificaciones py-5" id="certificaciones">
      <div className="container px-3 px-md-4">
        <div className="certificaciones-hero">
          <div className="certificaciones-hero-copy">
            <span className="certificaciones-eyebrow">Aprendizaje continuo</span>
            <h2 className="certificaciones-title">Certificaciones que respaldan lo que sé hacer.</h2>
            <p>
              Formación práctica en desarrollo de software, inteligencia artificial y tecnología,
              con credenciales verificables y certificados reales de cada institución.
            </p>
          </div>

          <div className="certificaciones-stats" aria-label="Resumen de certificaciones">
            <div>
              <strong>{certificados.length}</strong>
              <span>credenciales</span>
            </div>
            <div>
              <strong>{instituciones}</strong>
              <span>instituciones</span>
            </div>
            <div>
              <strong>2023—26</strong>
              <span>formación reciente</span>
            </div>
          </div>
        </div>

        <div className="certificaciones-toolbar">
          <div>
            <span className="certificaciones-toolbar-label">Explorar por área</span>
          </div>
          <div className="certificaciones-filtros" role="group" aria-label="Filtrar certificaciones">
            {filtros.map((item) => (
              <button
                type="button"
                key={item}
                className={`certificaciones-filtro ${filtro === item ? 'active' : ''}`}
                onClick={() => setFiltro(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {destacados.length > 0 && (
          <div className="certificaciones-destacadas">
            <div className="certificaciones-section-heading">
              <span>Selección destacada</span>
              <p>{filtro === 'Todos' ? 'Las credenciales que mejor resumen mi perfil actual.' : `Lo más relevante en ${filtro}.`}</p>
            </div>

            <div className="certificaciones-featured-grid">
              {destacados.map((certificado, index) => (
                <button
                  type="button"
                  className="certificacion-featured"
                  key={`${certificado.institucion}-${certificado.titulo}`}
                  onClick={() => abrirCertificado(certificado)}
                >
                  <div className="certificacion-featured-top">
                    <span className="certificacion-featured-index">0{index + 1}</span>
                    <span className="certificacion-featured-year">{certificado.anio}</span>
                  </div>
                  <div className="certificacion-featured-icon">
                    <i className={certificado.icono}></i>
                  </div>
                  <div className="certificacion-featured-copy">
                    <span>{certificado.institucion}</span>
                    <h3>{certificado.titulo}</h3>
                  </div>
                  <div className="certificacion-featured-cta">
                    <span>{certificado.pdf ? 'Ver certificado' : (certificado.accion || 'Ver credencial')}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="certificaciones-archivo">
          <div className="certificaciones-section-heading archivo-heading">
            <span>Archivo de credenciales</span>
            <p>{archivo.length} certificaciones organizadas por año.</p>
          </div>

          {Object.entries(gruposPorAnio)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([anio, items]) => (
              <div className="certificaciones-year-group" key={anio}>
                <div className="certificaciones-year">
                  <span>{anio}</span>
                  <small>{items.length} {items.length === 1 ? 'credencial' : 'credenciales'}</small>
                </div>

                <div className="certificaciones-list">
                  {items.map((certificado) => (
                    <button
                      type="button"
                      className="certificacion-row"
                      key={`${certificado.institucion}-${certificado.titulo}`}
                      onClick={() => abrirCertificado(certificado)}
                    >
                      <span className="certificacion-row-icon" aria-hidden="true">
                        <i className={certificado.icono}></i>
                      </span>

                      <span className="certificacion-row-main">
                        <small>{certificado.institucion}</small>
                        <strong>{certificado.titulo}</strong>
                      </span>

                      <span className="certificacion-row-category">{certificado.categoria}</span>

                      <span className="certificacion-row-action">
                        <span className="d-none d-sm-inline">{certificado.pdf ? 'Ver' : 'Abrir'}</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="certificaciones-footer-note">
          <div>
            <i className="fa-regular fa-folder-open"></i>
            <div>
              <strong>¿Necesitas todas las evidencias en un solo archivo?</strong>
              <span>Conservo también el dossier original como respaldo.</span>
            </div>
          </div>
          <a
            href={certificadosPDF}
            download="Certificados_Maycol_Melgarejo.pdf"
            className="certificaciones-dossier-link"
          >
            Descargar dossier
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>

      {seleccionado && (
        <div
          className="certificado-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Certificado: ${seleccionado.titulo}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSeleccionado(null)
          }}
        >
          <div className="certificado-modal-panel">
            <div className="certificado-modal-header">
              <div>
                <p className="certificacion-modal-institucion mb-1">{seleccionado.institucion}</p>
                <h3 className="mb-0">{seleccionado.titulo}</h3>
              </div>
              <button
                type="button"
                className="certificado-modal-close"
                onClick={() => setSeleccionado(null)}
                aria-label="Cerrar certificado"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="certificado-modal-viewer">
              <iframe
                src={seleccionado.pdf}
                title={`Certificado ${seleccionado.titulo}`}
              />
            </div>

            <div className="certificado-modal-footer">
              <span>{seleccionado.anio} · {seleccionado.categoria}</span>
              <a
                href={seleccionado.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-pill px-4 fw-bold"
              >
                <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                Abrir en nueva pestaña
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

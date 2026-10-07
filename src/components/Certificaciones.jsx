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
    registro: true,
    fecha: '2026',
    evidencia: 'Certificado de finalización de CS50x conservado como evidencia dentro del portafolio.',
    urlOficial: 'https://cs50.harvard.edu/certificates/7d215635-ef95-4138-82ae-d5c2fe41416e',
    accion: 'Ver certificado'
  },
  {
    titulo: 'Claude 101',
    institucion: 'Anthropic Education',
    anio: 2026,
    categoria: 'IA',
    icono: 'fa-solid fa-brain',
    destacado: true,
    registro: true,
    fecha: '29 de septiembre de 2026',
    evidencia: 'Anthropic Education confirmó por correo oficial la finalización de este curso.',
    accion: 'Ver registro'
  },
  {
    titulo: 'AI Capabilities and Limitations',
    institucion: 'Anthropic Education',
    anio: 2026,
    categoria: 'IA',
    icono: 'fa-solid fa-brain',
    destacado: true,
    registro: true,
    fecha: '29 de septiembre de 2026',
    evidencia: 'Anthropic Education confirmó por correo oficial la finalización de este curso.',
    accion: 'Ver registro'
  },
  {
    titulo: 'Universidad Angular - De Cero a Experto',
    institucion: 'Udemy',
    anio: 2026,
    categoria: 'Desarrollo',
    icono: 'fa-brands fa-angular',
    destacado: true,
    registro: true,
    fecha: '29 de septiembre de 2026',
    evidencia: 'Udemy confirmó por correo oficial que el certificado de cumplimiento fue emitido.',
    accion: 'Ver registro'
  },
  {
    titulo: 'Apropiación de los conceptos en ciberseguridad',
    institucion: 'SENA',
    anio: 2026,
    categoria: 'Ciberseguridad',
    icono: 'fa-solid fa-shield-halved',
    destacado: true,
    registro: true,
    fecha: '17 de julio de 2026',
    evidencia: 'El SENA confirmó por correo oficial que el curso fue cursado y aprobado y que el certificado electrónico quedó disponible.',
    accion: 'Ver registro'
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
    registro: true,
    fecha: '30 de mayo de 2025',
    evidencia: 'Certika notificó por correo la emisión de la credencial Bootcamp Programación de Asoandes.',
    accion: 'Ver registro'
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
    setSeleccionado(certificado)
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
                    <span>{certificado.pdf ? 'Ver certificado' : (certificado.accion || 'Ver registro')}</span>
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
                        <span className="d-none d-sm-inline">Ver</span>
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

            {seleccionado.pdf ? (
              <>
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
                    Abrir documento
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="certificado-registro">
                  <div className="certificado-registro-sello">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <p className="certificado-registro-label">Registro de credencial guardado</p>
                  <h4>{seleccionado.titulo}</h4>
                  <p className="certificado-registro-institucion">{seleccionado.institucion}</p>

                  <div className="certificado-registro-datos">
                    <div>
                      <span>Finalización</span>
                      <strong>{seleccionado.fecha || seleccionado.anio}</strong>
                    </div>
                    <div>
                      <span>Área</span>
                      <strong>{seleccionado.categoria}</strong>
                    </div>
                  </div>

                  <div className="certificado-registro-evidencia">
                    <i className="fa-regular fa-envelope"></i>
                    <p>{seleccionado.evidencia}</p>
                  </div>

                  <p className="certificado-registro-nota">
                    Este registro se conserva dentro del portafolio para que la evidencia siempre esté disponible.
                    Cuando la plataforma del emisor permite una verificación pública estable, se muestra como opción adicional.
                  </p>
                </div>

                <div className="certificado-modal-footer">
                  <span>{seleccionado.anio} · {seleccionado.categoria}</span>
                  {seleccionado.urlOficial ? (
                    <a
                      href={seleccionado.urlOficial}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-4 fw-bold"
                    >
                      <i className="fa-solid fa-badge-check me-2"></i>
                      Verificación oficial
                    </a>
                  ) : (
                    <span className="certificado-registro-disponible">
                      <i className="fa-solid fa-lock me-2"></i>
                      Evidencia almacenada localmente
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

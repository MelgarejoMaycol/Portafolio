import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import certificadosPDF from '../assets/Certificados.pdf'
import CVPDF from '../assets/CV_MaycolMelgarejo.pdf'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)
  const [cargando, setCargando] = useState(false)

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init('IBUFbLoplqw1J31Bs')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCargando(true)
    setError(false)

    // Parámetros del template de EmailJS
    const templateParams = {
      to_email: 'mfmelgarejo04@gmail.com',
      from_name: formData.nombre,
      from_email: formData.email,
      subject: formData.asunto,
      message: formData.mensaje
    }

    // Enviar correo
    emailjs.send(
      'service_rgn3xdh',
      'template_o9w6xkz',
      templateParams
    )
    .then((response) => {
      console.log('Éxito:', response.status)
      setEnviado(true)
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
      setCargando(false)
      
      setTimeout(() => setEnviado(false), 3000)
    })
    .catch((err) => {
      console.error('Error:', err)
      setError(true)
      setCargando(false)
      
      setTimeout(() => setError(false), 3000)
    })
  }

  return (
    <section className="contacto py-3 py-md-5" id="contacto" style={{ backgroundColor: '#00091c', minHeight: 'auto', position: 'relative', overflow: 'hidden' }}>
      {/* Luz de fondo */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(13, 110, 253, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container px-2 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
        {/* Título */}
        <div className="text-center mb-5">
          <h2 className="section-title text-white mb-3">¡Contáctame!</h2>
          <p className="text-primary" style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Tengo interés en escuchar sobre proyectos emocionantes y oportunidades de colaboración. 
            Siéntete libre de contactarme.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          {/* Formulario */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="p-4 rounded" style={{ backgroundColor: 'rgba(13, 110, 253, 0.05)', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-bold" style={{ color: '#ffffff', fontSize: '1rem' }}>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(13, 110, 253, 0.3)', color: 'white' }}
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold" style={{ color: '#ffffff', fontSize: '1rem' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(13, 110, 253, 0.3)', color: 'white' }}
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="asunto" className="form-label fw-bold" style={{ color: '#ffffff', fontSize: '1rem' }}>Asunto</label>
                <input
                  type="text"
                  className="form-control"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(13, 110, 253, 0.3)', color: 'white' }}
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label fw-bold" style={{ color: '#ffffff', fontSize: '1rem' }}>Mensaje</label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(13, 110, 253, 0.3)', color: 'white', resize: 'none' }}
                  placeholder="Tu mensaje..."
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary rounded-pill px-5 fw-bold w-100"
                disabled={cargando}
              >
                {cargando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {enviado && (
                <div className="alert alert-success mt-3" role="alert" style={{ backgroundColor: 'rgba(25, 135, 84, 0.2)', border: '1px solid #198754', color: '#90EE90' }}>
                  ✓ ¡Mensaje enviado exitosamente! Pronto me pondré en contacto contigo.
                </div>
              )}

              {error && (
                <div className="alert alert-danger mt-3" role="alert" style={{ backgroundColor: 'rgba(220, 53, 69, 0.2)', border: '1px solid #dc3545', color: '#ff6b6b' }}>
                  ✗ Error al enviar. Verififica que EmailJS esté configurado correctamente.
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div className="col-lg-5">
            <div className="p-4 rounded" style={{ backgroundColor: 'rgba(13, 110, 253, 0.05)', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
              <h4 className="text-primary fw-bold mb-4">Información de contacto</h4>

              <div className="mb-4">
                <div className="d-flex align-items-start gap-3">
                  <i className="fas fa-envelope text-primary" style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}></i>
                  <div>
                    <h6 className="text-white mb-1">Email</h6>
                    <a href="mailto:mfmelgarejo04@gmail.com" className="text-white" style={{ textDecoration: 'none' }}>
                      mfmelgarejo04@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-start gap-3">
                  <i className="fas fa-map-marker-alt text-primary" style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}></i>
                  <div>
                    <h6 className="text-white mb-1">Ubicación</h6>
                    <p className="text-white mb-0">Colombia</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-start gap-3">
                  <i className="fas fa-phone text-primary" style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}></i>
                  <div>
                    <h6 className="text-white mb-1">Teléfono</h6>
                    <a href="https://wa.me/573143832271" target="_blank" rel="noopener noreferrer" className="text-white" style={{ textDecoration: 'none' }}>
                      +57 314 383 2271
                    </a>
                  </div>
                </div>
              </div>

              <hr style={{ borderColor: 'rgba(13, 110, 253, 0.3)' }} />

              <h6 className="text-white fw-bold mb-3 mt-4">Sígueme en redes sociales</h6>
              <div className="d-flex gap-3">
                <a href="https://github.com/MelgarejoMaycol" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle p-2" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://instagram.com/melgarejo_mayc/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle p-2" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/maycol-melgarejo-a59bb9322" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle p-2" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>

              <hr style={{ borderColor: 'rgba(13, 110, 253, 0.3)', marginTop: '2rem' }} />

              <h6 className="text-white fw-bold mb-3 mt-4">Descargar documentos</h6>
              <div className="d-flex gap-2 flex-wrap">
                <button
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = CVPDF
                    link.download = 'CV_MaycolMelgarejo.pdf'
                    link.click()
                  }}
                  className="btn btn-primary rounded-pill px-3 fw-bold"
                  style={{ fontSize: '0.9rem' }}
                >
                  <i className="fa-solid fa-download me-2"></i>
                  Descargar CV
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = certificadosPDF
                    link.download = 'Certificados.pdf'
                    link.click()
                  }}
                  className="btn btn-outline-primary rounded-pill px-3 fw-bold"
                  style={{ fontSize: '0.9rem' }}
                >
                  <i className="fa-solid fa-download me-2"></i>
                  Certificados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

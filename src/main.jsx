import { StrictMode, useCallback, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Encabezado from './components/Encabezado'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Herramientas from './components/Herramientas'
import Certificaciones from './components/Certificaciones'
import Contacto from './components/Contacto'
import CVModal from './components/CVModal'
import './index.css'

function Portafolio() {
  const [cvAbierto, setCvAbierto] = useState(false)
  const abrirCV = useCallback(() => setCvAbierto(true), [])
  const cerrarCV = useCallback(() => setCvAbierto(false), [])

  return (
    <>
      <Encabezado onOpenCV={abrirCV} />
      <Inicio onOpenCV={abrirCV} />
      <SobreMi onOpenCV={abrirCV} />
      <Proyectos />
      <Herramientas />
      <Certificaciones />
      <Contacto onOpenCV={abrirCV} />
      <CVModal open={cvAbierto} onClose={cerrarCV} />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portafolio />
  </StrictMode>,
)

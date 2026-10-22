import { useCallback, useState } from 'react'
import Encabezado from './Encabezado'
import Inicio from './Inicio'
import SobreMi from './SobreMi'
import Proyectos from './Proyectos'
import Herramientas from './Herramientas'
import Certificaciones from './Certificaciones'
import Contacto from './Contacto'
import CVModal from './CVModal'

export default function Portafolio() {
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

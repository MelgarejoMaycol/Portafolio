import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Encabezado from './components/Encabezado'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Herramientas from './components/Herramientas'
import Contacto from './components/Contacto'
import './index.css'

// Limpiar console de mensajes innecesarios en desarrollo
if (import.meta.env.DEV) {
  const originalWarn = console.warn
  const originalError = console.error
  
  const ignoredPatterns = [
    'Tracking Prevention',
    'Warning',
    'hydration',
    'not wrapped in act',
    'StrictMode',
    'React DevTools',
    'Download the React DevTools',
    'blocked access to storage'
  ]

  console.warn = (...args) => {
    const message = String(args[0])
    for (const pattern of ignoredPatterns) {
      if (message.includes(pattern)) {
        return
      }
    }
    originalWarn(...args)
  }

  console.error = (...args) => {
    const message = String(args[0])
    for (const pattern of ignoredPatterns) {
      if (message.includes(pattern)) {
        return
      }
    }
    originalError(...args)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Encabezado />
    <Inicio />
    <SobreMi />
    <Proyectos />
    <Herramientas />
    <Contacto />
  </StrictMode>,
)

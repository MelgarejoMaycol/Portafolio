import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Encabezado from './components/Encabezado'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Encabezado />
    <Inicio />
    <SobreMi />
  </StrictMode>,
)

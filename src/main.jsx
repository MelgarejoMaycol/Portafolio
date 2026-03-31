import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Encabezado from './components/Encabezado'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Encabezado />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Inicio from './assets/modules/Inicio'
import Navbar from './assets/modules/Navbar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Inicio/> */}
    <Navbar/>
    
  </StrictMode>,
)

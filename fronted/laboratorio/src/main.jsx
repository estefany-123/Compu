import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DataTable from 'react-data-table-component';

// import Inicio from './assets/modules/Inicio'
import Navbar from './assets/modules/Navbar'
// import Nav from './assets/modules/Nav';
import Home from './assets/modules/Home'


const

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Inicio/> */}
    {/* <Navbar/> */}
    <Home/>

  </StrictMode>,
)


















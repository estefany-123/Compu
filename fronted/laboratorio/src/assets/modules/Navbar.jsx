import React, {useEffect} from "react";
import '../css/navbar1.css'
import "bootstrap/dist/js/bootstrap.bundle"



const Navbar = () => {

    useEffect(() =>{

    })





    return (
        <div className="container-fluid">
            <div className="navbar">
                <div className="navbar fixed-top">
                    <img src="./public/logo.png" alt="logo" />
                    <p>Nombre Usuario</p>
                    <div>
                        <button className="btn btn-outline-dark">Cerrar Sesion</button>
                    </div>
                </div>
            </div>

{/* sidebar */}
            <div class="sidebar bg-dark" id="sidebar">
{/* menu */}
            <div className="side_head">
                <div className="hamburgesa" id="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            

                <ul className="columna-flexible">
                    {/* menu usuario */}
                    <li className="items-nav">

                        <a href="nav-link" hrefLang="#home"
                        data-bs-toggle="collapse"
                        aria-expanded ="false"
                        >
                        <span>Home</span>
                        </a>

                        <ul className="collapse list-unstyled" id="home">
                            <li>
                                <a class="nav-link"
                                    href="#"
                                    onclick="loadModule('src/modules/administrador/usuarios.html)">
                                        <span>Citas </span></a>
                                    
                                            <ul className="collapse list-unstyled"      id="resultados">
                                                <li>
                                                    <a class="nav-link"
                                                        href="#"
                                                        onclick="loadModule('src/modules/administrador/usuarios.html')">
                                                        <span>Resultados </span></a>
                                                        
                                                </li>
                                            </ul>
                            </li>

                        </ul>
                    </li>
                    
                    <li>
                        <a href="nav-link" hrefLang="#home"
                        data-bs-toggle="collapse"
                        aria-expanded ="false">
                            <span>Usuario</span>
                        </a>
                        <ul className="collapse list-unstyled" id="home">
                            <li>
                                <a class="nav-link"
                                    href="#"
                                    onclick="loadModule('src/modules/administrador/usuarios.html">
                                    <span>Datos Personales</span>
                                </a>
                            </li>
                        </ul >
                        
                    </li>

                </ul>
            </div> 
            
        </div>

    )
}

export default Navbar
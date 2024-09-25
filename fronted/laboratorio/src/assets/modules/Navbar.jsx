import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import '../css/Navbar.css'



const Navbar = () => {

    return (
        <div class="all">
            <div class="navbar fixed-top">
                <div class="navbar fixed-top">
                    <img src="/logo.png" alt="logo" />
                    <p>Nombre Usuario</p>

                    <div>
                        <button class="btn bg-primary my-10">Cerrar Sesion</button>
                    </div>
                </div>
            </div>

            <div className="todo">
                <div className="sidebar" id="sidebar">

                    <div className="side_head">
                        <div className="hamburger" id="menu-toggle">
                            <button className="bg-primary"><CiMenuBurger className="logo_menu" /></button>
                        </div>

                    </div>

                    <ul className="column flex-column">
                        <li className="items">

                            <a className=" d-inline-flex gap-1 nav_link"
                                href="#home"
                                data-bs-toggle="collapse"
                                role="button"
                                data-bs-target="#home"
                                aria_expanded="false"
                                aria-controls="home">

                                <IoHomeOutline className="home" />
                                <span className="text">Home</span></a>

                            <ul className="collapse" id="home">
                                <li>
                                    <a href="#" className="nav_link">

                                        <TbChecklist className="citas" />
                                        <span>Citas</span></a>

                                    <ul className="collapse" id="home">
                                        <li>
                                            <a href="#" className="nav_link">
                                                {/* onlick */}
                                                <BsClipboardData className="result" />
                                                <span>Resultados</span></a>

                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </li>

                        <li className="item2">
                            <a className=" d-inline-flex gap-1 nav_link"
                                href="#usuarios"
                                data-bs-toggle="collapse"
                                role="button"
                                data-bs-target="#usuarios"
                                aria_expanded="false"
                                aria-controls="usuarios">
                                <FaUser className="user" />
                                <span>Usuario</span>
                            </a>

                            <ul className="collapse list-unstyled" id="usuarios">
                                <li>
                                    <a className=" nav_link" href="#"
                                        data-bs-toggle="collapse">
                                    
                                        <GrDocumentText className="personal_data" />
                                        <span>Datos Personales</span>

                                    </a>
                                </li>

                            </ul>

                        </li>

                    </ul>

                </div>

            </div>



        </div>

    );
};

export default Navbar
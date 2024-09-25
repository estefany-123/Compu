import React from "react";
import '../css/home.css'



const Home = () =>{
    return(
        <div>
            <div className="info1 ">
                <label htmlFor="">Paciente:</label>
                <label htmlFor="">Identificacion:</label>
                <label htmlFor="">Sexo/Edad:</label>
                <label htmlFor="">Administradora de salud:</label>

                <div className="info2">
                    <label htmlFor="">Telefono:</label>
                    <label htmlFor="">Medico:</label>
                    <label htmlFor="">Fecha orden:</label>
                </div>
            </div>

        </div>
    )
}

export default Home
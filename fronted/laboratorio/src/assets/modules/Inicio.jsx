import React, { isValidElement } from "react";
import '../css/style.css'

const Inicio = () => {
    return (
        <div className="todo">
            <div className="container">
                <form className="formulario">
                    <h1>Iniciar sesion</h1>
                    <p className="descri">Bienvenidos a su laboratorio de confianza, por favor diligencie los datos requeridos</p>

                    <div className="tipo_id">

                    <label htmlFor="">Tipo Identificación</label>
                        <select id="opciones" className="opciones" required>
                        <option value="" disabled selected hidden >Seleccione una opcion</option>
                            <option value="opcion1">Cédula de Ciudadania</option>
                            <option value="opcion2">Trajeta de identidad</option>
                            <option value="opcion3">Cédula extranjera</option>
                            <option value="opcion4">Ristro Civil</option>
                        </select>

                    </div>
                    <div className="input1">
                        <label htmlFor="">Número de identificación</label>
                        <input type="password" required/>

                    </div>
                    <div className="input1">
                        <label htmlFor="">Fecha de Nacimiento</label>
                        <input type="date" required />
                    </div>

                    <button>Ingresar</button>

                </form>
            </div>
        
        </div>
    )
}


export default Inicio
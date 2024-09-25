import React from "react";
import '../css/home.css'

const columns = [
    {fecha_orden : "Fecha de la orden"},
    {documento_orden: "Documento de la orden"},
    {numero_orden: "Numero de la orden"},

]

const data=[
    {fecha_orden:"12/02/2024", documento_orden: 65454, numero_orden:1},
    {fecha_orden:"03/05/2020", documento_orden: 55489, numero_orden:2},
    {fecha_orden:"10/08/2000", documento_orden: 74569, numero_orden:3},
    {fecha_orden:"09/07/2013", documento_orden: 32456, numero_orden:4},
    {fecha_orden:"11/10/2015", documento_orden: 7894, numero_orden:5},
  ]
  


const Home = () =>{
    return(
        <div>
            <h1>Orden del laboratorio</h1>

            <div>
                <label htmlFor="">Numero de orden</label>
            </div>


            <div className="Tabla">

            </div>

        </div>
    )
}

export default Home
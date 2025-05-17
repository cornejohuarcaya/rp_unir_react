 import React from "react";
import { Link } from "react-router";

 const VistaCompraExitosa =()=>{

    return (
        <div  className="landing">
        <div className="compraExitosa">Gracias por su preferencia, su compra fue exitosa ...!</div>
            <Link key='regresar' to={`/search`}>
                    <button className='btnRegresar' ><i className="fa-solid fa-arrow-rotate-left"></i> Regresar al inicio</button>
            </Link>
        </div>
    )
 }
 export default VistaCompraExitosa;
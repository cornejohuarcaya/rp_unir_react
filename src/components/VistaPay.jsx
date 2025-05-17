import {React, useContext} from "react";
 import CarritoItem from "./CarritoItem";
import { GlobalContext } from "../context/GlobalContext";
import { Link, useNavigate } from "react-router";
import   './carrito/carrito.css';

const VistaLogin =() =>{

    const { listaCarrito:carrito, Limpiar } = useContext(GlobalContext);
    const navigate = useNavigate();

    let cantidad=0;
    let total=0;
   
    carrito.productos.map(item=>{
        cantidad+=item.cantidad;
        total+=item.cantidad*item.precioUnitario

    })

    const handleComprar=(e) =>{

        Limpiar();
        console.log('dirigiendi a compraexitosa');

        navigate('/compraExitosa' ,{replace:true} ) ;
     }
    
    return (
        <div className='card'>            
           <h2>Detalle de compra</h2>
            <br />

            <div className='fila'> 
            <div className='card-productos' >
                { carrito.productos.map((libro) => (
                <CarritoItem  key={libro.id} libro={libro}/>                  
                
                ))}   
            </div>                      
            
            <div className='card-resumen' >

            <strong>Productos ({cantidad})</strong> 
            <strong> Total $ {total}</strong><br />

            <form onSubmit={handleComprar} >
                    <div >
                        <label htmlFor="numeroTarjeta">Número de tarjeta</label>
                        <input type="text"  id="numeroTarjeta"  /> 
                    </div>
                     



            <Link key='regresar' to={`/search`}>
                    <button className='btnRegresar' ><i className="fa-solid fa-arrow-rotate-left"></i> Regresar</button>
            </Link>

                <button className='btnComprar'  type="submit" >Comprar</button>
                </form>

            </div>
            <div>
                 
            </div>
            </div>
         </div>
    );
}

export default VistaLogin;
import React, { useContext } from 'react';
import { Link } from 'react-router';
import   './carrito.css';
import { GlobalContext } from '../../context/GlobalContext';
import CarritoItem from '../CarritoItem';

const VistaCarrito = () => {
    
    const { listaCarrito:carrito } = useContext(GlobalContext);

    let cantidad=0;
    let total=0;
   
    carrito.productos.map(item=>{
        cantidad+=item.cantidad;
        total+=item.cantidad*item.precioUnitario
        total = parseFloat(total.toFixed(2));
    })

    return (
        <div className='card'>
            VistaCarrito
            <h2>Productos en carrito</h2>
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
                         <Link key='comprar' to={`/pay`}>
                                <button className='btnComprar' >Comprar</button>
                        </Link>

                </div>
            </div>
            <div>
                
                <Link key='regresar' to={`/search`}>
                    <button className='btnRegresar' > <i className="fa-solid fa-arrow-rotate-left"></i> Regresar</button>
                </Link>
            </div>

        </div>
    )
};

export default VistaCarrito;
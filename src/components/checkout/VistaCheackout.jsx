import React, { useContext } from 'react';
import { Link } from 'react-router';
import   './cheackout.css';
import { GlobalContext } from '../../context/GlobalContext';
import CheackoutItem from '../ChekoutItem';

const VistaCheckout = () => {
    
    const { carrito } = useContext(GlobalContext);

    let cantidad=0;
    let total=0;
   
    carrito.productos.map(item=>{
        cantidad+=item.cantidad;
        total+=item.cantidad*item.precioUnitario

    })

    return (
        <div className='card'>
            VistaCheckout
            <h2>Productos en carrito</h2>
            <br />

            <div className='fila'>
            <div className='card-productos' >

            { carrito.productos.map((libro) => (
            <CheackoutItem  key={libro.id} libro={libro}/>
                    
            
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
                    <button className='btnRegresar' >Regresar</button>
                </Link>
            </div>

        </div>
    )
};

export default VistaCheckout;
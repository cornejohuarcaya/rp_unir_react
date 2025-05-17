import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router';
import { GlobalContext } from './../context/GlobalContext';

const VistaResultadoBusquedaItem = ({libro}) => {
    //const {    addLibro } = useContext(GlobalContext);
 
    const { listaCarrito, AgregarLibro, EliminarLibro, ActualizarCantidad } = useContext(GlobalContext);

    
    const handleClick = (e) => { 
        const libroAgregar = {
            id: libro.id,
            libro: libro.titulo,
            cantidad: 1,
            precioUnitario: libro.precio
        };
        console.log('enviando libro al carrito' ,libroAgregar  );
       // addLibro(libroAgregar);

        AgregarLibro(libroAgregar);

    };
    

    return (
        <div className="card-movie">
            <div >
            <table>
            <tbody>

           <tr>
            <td>
                <img src={libro.imagen} className="imagen" alt="The Conjuring" />
            </td>
            <td>  
                <Link key='detalle' to={`/detLibro/${libro.id}`} >     
                    <h2>{libro.titulo}</h2>
                </Link>  
                <p>resumen: {libro.resumen}</p>
                <p>autor: {libro.autor} </p>
                <p>precio: {libro.precio} </p>
                <p className='puntaje'>{libro.puntuacion} </p>

                <button className='addCarr'   onClick={ handleClick } ><i className="fa-solid fa-cart-plus"></i> Agregar</button>
             </td>
            </tr>
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default VistaResultadoBusquedaItem;
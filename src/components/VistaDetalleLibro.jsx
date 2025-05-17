import React, { useContext } from 'react';
import { Link, useParams } from 'react-router';
 import { libros as dataLibros } from '../data/DataLibros';
import VistaReviewItem from './review/VistaReviewItem';
import VistaComentarioItem from './comentario/VistaComentarioItem';
import { GlobalContext } from '../context/GlobalContext';
import VistaCheckout from './carrito/VistaCarrito';

const VistaDetalleLibro = () => {
    const { id } = useParams();
    //const {    addLibro } = useContext(GlobalContext);

    const { listaCarrito, AgregarLibro, EliminarLibro } = useContext(GlobalContext);

    const libro = dataLibros.find((item) => String(item.id) === String(id));  
  
 
    const handleClick = (e) => { 
        const libroAgregar = {
            id: libro.id,
            libro: libro.titulo,
            cantidad: 1,
            precioUnitario: libro.precio
        };
        console.log('enviando libro al carrito' ,libroAgregar  );
        //addLibro(libroAgregar);

        AgregarLibro(libroAgregar);

    };
    

    return (
        <div className='fila '>
        <div className="card-movie VistaDetalleLibro">
            VistaDetalleLibro  
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

                <button className='addCarr' onClick={ handleClick } > <i className="fa-solid fa-cart-plus"></i> Agregar</button>
             </td>
            </tr>
            </tbody>
            </table>

            <br />

            <div>
                <h3>Reseñas</h3>
                {libro.reseñas.map((review) => (
                    <VistaReviewItem key={libro.id+review.usuario} review={review} /> /* agregar componente */
                ))}  

            </div>

            <h3>Comentarios</h3>
            <div>
                {libro.comentarios.map((comentario) => (
                    <VistaComentarioItem key={libro.id+comentario.usuario} comentario={comentario} /> /* agregar componente */
                ))}  

            </div>

        </div>   
        <div>
                
                <Link key='regresar' to={`/search`}>
                    <button className='btnRegresar' ><i className="fa-solid fa-arrow-rotate-left"></i> Regresar</button>
                </Link>
            </div>      
        </div>
        <div className='carLeft'>
        <VistaCheckout />
        </div>
        </div>
    );
};

export default VistaDetalleLibro;
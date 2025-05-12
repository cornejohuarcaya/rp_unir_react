import React from 'react';
import './comentario.css';

const VistaComentarioItem = ({comentario}) => {
    console.log("Renderizando VistaComentarioItem");

    return (
            <div className="card-comentario">           
                <strong>{comentario.usuario} </strong>
                <p>{comentario.mensaje} </p> 
        </div>
    );
};

export default VistaComentarioItem;
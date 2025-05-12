import React from 'react';
import './review.css';
const VistaReviewItem = ({review}) => {
    console.log("Renderizando VistaReviewItem");

    return (
            <div className="card-review">           
                <p>autor: {review.usuario} </p>
                <p>{review.texto} </p> 
        </div>
    );
};

export default VistaReviewItem;
import React, { useState, useEffect } from 'react';
import { libros as dataLibros } from '../data/DataLibros';
import { libros as dataLibrosTop } from '../data/DataLibrosTop';

import VistaResultadoBusquedaItem from './VistaResultadoBusquedaItem';

const VistaResultadoBusqueda = ({titulo}) => {
    
    const [libros, setLibros] = useState([]);
    console.log("Renderizando Landing: ", titulo);
    useEffect(() => {  
        let newLibros=dataLibrosTop;    
        if (titulo!=null  && titulo!='')
            newLibros=dataLibros.filter((a)=> titulo==a.titulo); 
 
        setLibros(newLibros);
    },[titulo]);
    return (
        <div >
            VistaResultadoBusqueda   

            {libros.map((libro) => (
                <VistaResultadoBusquedaItem key={libro.id} libro={libro} />
            ))}     

        </div>
    );
};

export default VistaResultadoBusqueda;
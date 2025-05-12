import React from 'react';

const TituloSelector = ({ titulo, onTituloChange }) => {
    const handleChange = (e) => {
        onTituloChange(e.target.value);
    };

    return (
        <div className='cuadroBusqueda centro'>                 
             <label htmlFor="titulo" className='label'>Búsqueda de Libro por título </label>
            <input id="titulo" className='busqueda' value={titulo} onChange={handleChange} placeholder='TITULO' />
        </div>
    );
};

export default TituloSelector;
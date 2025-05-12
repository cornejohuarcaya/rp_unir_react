import React, { useContext, useState } from 'react';
import VistaResultadoBusqueda from './VistaResultadosBusqueda';
import VistaBusqueda from './VistaBusqueda'
import VistaCheckout from './checkout/VistaCheackout';

const VistaInicialAcceso = () => {
    const [titulo, setTitulo] = useState(''); // Título por defecto

     const handleTituloChange = (newTitulo) => {
        setTitulo(newTitulo);
    }

    return (
        <div>
            VistaInicialAcceso
            <VistaBusqueda titulo={titulo}  onTituloChange={handleTituloChange}/>
            <div className='fila'>
                <div className='VistaResultadoBusqueda'>
                    <VistaResultadoBusqueda  titulo={titulo} />
                </div> 
                <div className='carLeft'>
                    <VistaCheckout />
                </div>
             </div>
        </div>
    );
};

export default VistaInicialAcceso;
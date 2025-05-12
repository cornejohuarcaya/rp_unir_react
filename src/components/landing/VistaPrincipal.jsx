import React from 'react';
import useRedirection from '../../hooks/useRedirection';
import { Link } from 'react-router';
import './VistaPrincipal.css'
const VistaPrincipal = () => {

   useRedirection("/search", 5000); 

    return (
        <div>
              
             
            <div className="landing">
                    <Link to={"/search"}>  
                        <h1>Bienvenidos a Relatos de Papel</h1>
                    </Link> <br />
                    <div className="cube">
                    <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                    </div>

            </div>
        </div>
    );
};

export default VistaPrincipal;
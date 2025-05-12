import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Header = () => {

    const { user } = useContext(AuthContext);
console.log(user);

    return (
        <header className="banner centro">
            <p id='titulo'>Bookstore - Relatos de Papel</p>
             <Link key='checkout' to={`/checkout`}>
                <button> Ir a comprar</button>
            </Link>
            <br /> 
            {user? <p id='user'>{user.displayName}</p> : ''}
        </header>
    );
};

export default Header;
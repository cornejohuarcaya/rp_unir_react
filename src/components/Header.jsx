import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Header = () => {

    const { user } = useContext(AuthContext);
console.log(user);

    return (
        <header className="banner centro">
            <img className='img-logo' src="https://static.vecteezy.com/system/resources/previews/009/377/766/non_2x/3d-book-icon-with-transparent-background-free-png.png" alt="" />
            <p id='titulo'>Bookstore - Relatos de Papel</p>
            {!user?
            <Link key='login' to={`/login`}>
                <button className="btnLogin"><i className="fa-solid fa-right-to-bracket"/> Iniciar Sesión</button>
            </Link>:''
            }
            {user? <strong id='user'>Bienvenido: {user.displayName}</strong> : ''}

             <Link key='checkout' to={`/checkout`}>
                <button className="btnCarrito"> <i className="fa-solid fa-cart-shopping"></i> Carrito</button>
            </Link>
            <br /> 
           
        </header>
    );
};

export default Header;
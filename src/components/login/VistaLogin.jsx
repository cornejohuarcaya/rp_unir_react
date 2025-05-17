import {React, useContext, useState} from 'react';
import  useLogin  from '../../hooks/useLogin';
import { AuthContext } from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router';
 import './login.css'
const Login =() =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useLogin();
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Determinar la ruta de redirección. Si viene de una ruta protegida, se usa "from"
    const from = location.state?.from || '/search';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loggedUser = await login(username, password);
            setUser(loggedUser);
            navigate(from, { replace: true });
        } catch (err) {
            // El error ya se gestiona en el hook (y se muestra en la vista)
            console.error("Error de login:", err);
        }
    };



    return (
        <div>
            
            <form onSubmit={handleSubmit} className="login__form">
            <p className="login_titulo" >Inicio de sesión</p>
                <div className="login__form-group">
                    <label htmlFor="username" className="login__label">Nombre de usuario</label><br />
                    <input
                        type="text"
                        id="username"
                        className="login__input"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        disabled={loading}
                        required
                    />
                </div>
                <div className="login__form-group">
                    <label htmlFor="password" className="login__label">Contraseña</label><br />
                    <input
                        type="password"
                        id="password"
                        className="login__input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        disabled={loading}
                        required
                    />
                </div>
                {error && <p className="login__error">{error}</p>}
                <button type="submit" className="login__button" disabled={loading}>
                    {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </button>
            </form>


        </div>
    );
}

export default Login;
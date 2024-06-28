import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="/inicio"><img src="" alt="" /> Inicio</a></li>
                <li><a href="/servicios"><img src="" alt="" /> Servicios</a></li>
                <li><a href="/paciente"><img src="" alt="" /> Paciente</a></li>
                <li><a href="/iniciar-sesion"><img src="" alt="" /> Iniciar Sesión</a></li>
                <li><a href="/comenzar-consulta"><img src="" alt="" /> Comenzar consulta</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

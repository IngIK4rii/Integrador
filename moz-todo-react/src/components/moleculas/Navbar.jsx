import React from 'react';
import './Navbar.css';
import { IoHome } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";



const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./logo.jpeg" alt="" />
            </div>
            <ul className="nav-links">
                <li><a href="/inicio"> <IoHome className='icon' /> Inicio</a></li>  
                <li><a href="/servicios"> <FaFlask className='icon'/> Servicios</a></li>
                <li><a href="/paciente">  <FaUser className='icon'/> Paciente</a></li>
                <li><a href="/iniciar-sesion"> <FaUserCircle className='icon'/>  Iniciar Sesión</a></li>
                <li><a href="/comenzar-consulta"> <FaFileSignature className='icon'/> Comenzar consulta</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

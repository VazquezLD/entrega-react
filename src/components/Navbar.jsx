import React from "react";
import './Layout.css'
import { InputProduct } from "./InputProduct";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

    return(
        <nav className='navbar'>
    
            <span className="navbarBrand">BESTPRODUCTS</span>
            <InputProduct/>
            <ul className="navbarLinks">
                <li className="navbarLink"><NavLink to='/'>Inicio</NavLink></li>
                <li className="navbarLink"><NavLink  to='/products'>Productos</NavLink></li>
                <li className="navbarLink" ><NavLink to='/about'>Sobre nosotros</NavLink></li>
                <li className="navbarLink"><NavLink  to='/contact'>Contacto</NavLink></li>
            </ul>
        </nav>
    )

}
import React from "react";
import './Layout.css'
import { InputProduct } from "./InputProduct";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

export const Navbar = () => {

    return(
        <nav className='navbar'>
    
            <span className="navbarBrand">BESTPRODUCTS</span>
            <InputProduct/>
            <ul className="navbarLinks">
                <li><NavLink to='/' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}>Inicio</NavLink></li>
                <li><NavLink  to='/products' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}>Productos</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}>Sobre nosotros</NavLink></li>
                <li><NavLink  to='/contact' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}>Contacto</NavLink></li>
                <CiShoppingCart className="cart"/>
            </ul>
        </nav>
    )

}
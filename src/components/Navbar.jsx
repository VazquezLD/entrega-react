import React from "react";
import './Layout.css'
import { InputProduct } from "./InputProduct";

export const Navbar = () => {

    return(
        <navbar className='navbar'>
    
            <span className="navbarBrand">BestProducts</span>
            <InputProduct/>
            <ul className="navbarLinks">
                <li className="navbarLink"><a href="#">Productos</a></li>
                <li className="navbarLink"><a href="#">Sobre Nosotros</a></li>
                <li className="navbarLink"><a href="#">Contacto</a></li>
            </ul>
        </navbar>
    )

}
import React from "react";
import '../styles/Aside.css'
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi2";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiPants } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { useCart } from "../context/CartContext";

export const Aside = () => {
    
    const {cartproducts} = useCart()
    const length = Object.keys(cartproducts).length


    return(
        <aside className="asideBar">
            <ul className="navbarLinks">
                <li><NavLink to='/' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}><HiOutlineHome className="iconoNav"/>Inicio</NavLink></li>
                <li><NavLink  to='/products' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}><PiPants className="iconoNav"/>Productos</NavLink></li>
                <li><NavLink  to='/cart' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}>
                    <div className="cartIconContainer">
                        <CiShoppingCart className="iconoNav" />
                        <span className="cartCount">{length}</span>
                    </div>
                    Carrito
                    </NavLink>
                </li>
                <li><NavLink to='/about' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}><IoMdInformationCircleOutline className="iconoNav"/>Nosotros</NavLink></li>
                <li><NavLink  to='/contact' className={({ isActive }) => isActive ? "navbarLink active" : "navbarLink"}><RiContactsLine className="iconoNav"/>Contacto</NavLink></li>
            </ul>
        </aside>
    )
}

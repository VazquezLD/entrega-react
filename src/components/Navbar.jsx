import React from "react";
import './Layout.css'
import { InputProduct } from "./InputProduct";
import { Aside } from "./Aside";

export const Navbar = () => {

    return(
        <>
            <nav className='navbar'>
                <span className="navbarBrand">BESTPRODUCTS</span>
                <InputProduct/>
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </nav>
            <Aside/>
        </>
    )

}
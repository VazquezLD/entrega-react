import React from "react";
import './Layout.css'
import { InputProduct } from "./InputProduct";
import { Aside } from "./Aside";
import { FiSearch } from "react-icons/fi";


export const Navbar = () => {

    return(
        <>
            <nav className='navbar'>
                <div className="navbarDiv">
                    <span className="navbarBrand">BESTPRODUCTS</span>
                </div>
                <div className="inputDiv">
                    <InputProduct/>
                </div>
            </nav>
            <Aside/>
        </>
    )

}
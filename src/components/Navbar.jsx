import React from "react";
import '../styles/Layout.css'
import { InputProduct } from "./InputProduct";

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
        </>
    )

}
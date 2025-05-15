import React from "react";
import "./Layout"

export const InputProduct = () => {
    return(
        <form className="navbarForm">
            <span className="navbarSpan">Buscar productos</span>
            <input type="text" className="inputProduct" placeholder="Buscar..."/>
        </form>
    )
}
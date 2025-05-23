import React from "react";
import "./Layout"
import { FiSearch } from "react-icons/fi";

export const InputProduct = () => {
    return(
        <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <span className="icon"><FiSearch /></span>
        </div>
    )
}
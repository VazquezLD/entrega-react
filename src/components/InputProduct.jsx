import React from "react";
import "../styles/Aside.css"
import { useSearch } from "../context/ContextProvider";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const InputProduct = () => {

    const location = useLocation()
    const path = location.pathname
    const inputClass = path === '/products'? "search-bar" : "hidden"

    const { search, setSearch } = useSearch()

    return(
        <div className={inputClass}>
            <input type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            <span className="icon"><FiSearch /></span>
        </div>
    )
}
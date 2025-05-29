import React from "react";
import "../styles/Aside.css"
import { useSearch } from "../context/ContextProvider";
import { FiSearch } from "react-icons/fi";

export const InputProduct = () => {

    const { search, setSearch } = useSearch()

    return(
        <div className="search-bar">
            <input type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            <span className="icon"><FiSearch /></span>
        </div>
    )
}
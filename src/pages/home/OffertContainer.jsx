import React from "react";
import './Home.css'
import { OffertCard } from "./OffertCard";

export const OffertContainer = () => {
    return(
        <>
        <span className="offertTitle">Productos destacados</span>
        <div className="offertContainer">
            <OffertCard/>
            <OffertCard/>
            <OffertCard/>
            <OffertCard/>
        </div>   
        </>
    )
}
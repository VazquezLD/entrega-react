import React from "react";
import './Home.css'

export const OfertText = () =>{
    return(
        <div className="ofertText">
            <h2 className="ofertTitle">
                Aprovecha nuestras ofertas en productos destacados !
            </h2>
            <p className="ofertParagraph">
                Ofrecemos una amplia variedad de ofertas. Descubre soluciones innovadoras que transformarán tu espacio y mejorarán tu vida diaria.
            </p>
            <button className="ofertButton">Ver ofertas</button>
        </div>
    )
}
import React from "react";
import '../../styles/Home.css'
import { NavLink } from "react-router-dom";

export const TextParagraph = () => {
    return(
        <div className="textParagraph">
            <div className="textContainer">
                <h1>Bienvenido a BestProducts, nuestra tienda de productos unicos !</h1>
            </div>
            <div className="textContainer containerST">
                <p>
                    Descubrí los mejores productos al mejor precio.
                    En nuestra tienda vas a encontrar calidad, variedad y atención personalizada
                     para que tu experiencia de compra sea rápida, simple y segura
                </p>
                <div className="buttonContainer">
                    <NavLink to ='/products'><button className="ofertButton">Explora</button></NavLink>
                    <a href="#faqs"><button className="ofertButton">Preguntas</button></a>
                </div>
            </div>
        </div>
    )
}
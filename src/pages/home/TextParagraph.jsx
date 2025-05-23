import React from "react";
import './Home.css'

export const TextParagraph = () => {
    return(
        <div className="textParagraph">
            <div className="textContainer">
                <h1>Bienvenido a BestProducts, nuestra tienda de productos unicos !</h1>
            </div>
            <div className="textContainer containerST">
                <p>
                    Necessitatibus atque quam quasi harum doloremque fuga magni beatae vero quaerat
                    reprehenderit, nulla odio perspiciatis quia accusamus sed praesentium repellat labore porro.
                </p>
                <div className="buttonContainer">
                    <button className="button1">Explora</button>
                    <a href="#faqs"><button className="button2">Preguntas frecuentes</button></a>
                </div>
            </div>
        </div>
    )
}
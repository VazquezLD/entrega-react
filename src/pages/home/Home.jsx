import React from "react";
import './Home.css'
import { OffertContainer } from "./OffertContainer";

export const Home = () => {
    return(
        <>
            <div className="homeContainer">
            <h1>¡Bienvenido a la tienda!</h1>
            <div className="heroContainer">
                <div className="heroItem">

                    <span className="heroItemSpan">Aprovecha nuestras ofertas ahora!</span>
                    <p className="heroItemP">
                        Obten nuestros beneficios y ofertas de tiempo limitado con la compra de productos electronicos
                        o indumentaria
                    </p>
                </div>
                <div className="heroItem">b</div>
                <div className="heroItem">c</div>
            </div>
        </div>
        <OffertContainer/>
        </>
    )
}
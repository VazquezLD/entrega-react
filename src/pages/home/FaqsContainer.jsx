import React from "react";
import '../../styles/Home.css'
import { FaqCard } from "./FaqCard";
import { NavLink } from "react-router-dom";

export const FaqsContainer = () => {
    return(
        <div className="faqsContainer"  id="faqs">
            <div className="faqsSection textFaq">
                <h2>Preguntas frecuentes</h2>
                <p>Aquí encontrarás respuestas a las preguntas más frecuentes de nuestros 
                    visitantes, desde cómo realizar un pedido hasta detalles sobre envíos, 
                    pagos y devoluciones. Esperamos ayudarte a resolver tus dudas de forma 
                    rápida y sencilla.
                    </p>
                <NavLink to='contact'><button className="ofertButton">Contáctanos</button></NavLink>
            </div>
            <div className="faqsSection" >
                <div className="faqsListContainer">
                    <FaqCard question={'¿Como realizar un pedido?'} response={'Para realizar un pedido, simplemente selecciona los productos que deseas y agrégales al carrito. Luego, sigue las instrucciones para completar la compra. Si necesitas ayuda, no dudes en contactarnos.'}/>
                    <FaqCard question={'¿Cuáles son los métodos de pago?'} response={'Aceptamos diversas formas de pago, incluyendo tarjetas de crédito, débito y PayPal. Asegúrate de elegir el método que mejor se adapte a tus necesidades al finalizar la compra. Tu seguridad es nuestra prioridad.'}/>
                    <FaqCard question={'¿Cuál es el tiempo de envío?'} response={'El tiempo de envío varía según la ubicación, pero generalmente tarda entre 3 a 7 días hábiles. Te proporcionaremos un número de seguimiento para que puedas monitorear tu pedido. Si tienes dudas, contáctanos.'}/>
                    <FaqCard question={'¿Puedo devolver un producto?'} response={'Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. Asegúrate de que el producto esté en su estado original. Para iniciar el proceso de devolución, contáctanos.'}/>
                </div>
            </div>
        </div>
    )
}
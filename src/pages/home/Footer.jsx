import React from "react";
import '../../styles/Home.css'
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";


export const Footer = () => {
    return(
        <div className="footer">
            <ul className="footerList">
                <li><a href="#">Términos de servicio</a></li>
                <li><a href="#">Configuracion de cookies</a></li>
                <li><a href="#">Soporte Técnico</a></li>
                <li><a href="#">Nuestras ofertas</a></li>
            </ul>
            <span className="footerSpan">Siguenos en nuestras redes</span>
            <ul className="footerList">
                
                <li><a href="https://github.com/VazquezLD/entrega-react/tree/main" target="blank" className="footerIcon"><FaGithub/></a></li>
                
            </ul>
        </div>
    )
}
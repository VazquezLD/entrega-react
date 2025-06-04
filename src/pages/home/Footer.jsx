import '../../styles/Home.css'
import { FaGithub } from "react-icons/fa";


export const Footer = () => {
    return(
        <div className="footer">
            <span className="footerSpan">Siguenos en nuestras redes</span>
            <ul className="footerList">
                <li><a href="https://github.com/VazquezLD/entrega-react/tree/main" target="blank" className="footerIcon"><FaGithub/></a></li>
            </ul>
        </div>
    )
}
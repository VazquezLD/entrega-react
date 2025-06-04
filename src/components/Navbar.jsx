import '../styles/Layout.css'
import { InputProduct } from "./InputProduct";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = ({showNav ,setShowNav}) => {

    const handleNav = () => {
        if(!showNav){
            setShowNav(true)
        }else{
            setShowNav(false)
        }
    }

    return(
        <>
            <nav className='navbar'>
                <div className="navbarDiv">
                    <span className="navbarBrand">BESTPRODUCTS</span>
                </div>
                <div className="inputDiv">
                    <InputProduct/>
                </div>
                <RxHamburgerMenu className="menuburguer" id onClick={() => handleNav()}/>
            </nav>
        </>
    )

}
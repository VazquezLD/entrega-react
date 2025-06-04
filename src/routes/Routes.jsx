import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Layout} from "../components/Layout.jsx"
import { Home } from "../pages/home/Home.jsx";
import { Products } from "../pages/products/Products.jsx";
import { Contact } from "../pages/contact/Contact.jsx";
import { About } from "../pages/about/About.jsx";
import { Cart } from "../pages/cart/Cart.jsx"
import { SearchProvider } from "../context/ContextProvider.jsx";
import { CartContext } from "../context/CartContext.jsx";

const Rutas = () => {
    return(
        <BrowserRouter>
            <SearchProvider>
                <CartContext>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="products" element={<Products/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="cart" element={<Cart/>}/>
                        </Routes>
                    </Layout>  
                </CartContext>
            </SearchProvider>
        </BrowserRouter>
    )
}

export default Rutas
import React from "react";
import { ProductGrid } from "./ProductGrid";
import { useCart } from "../../components/CartContext";

export const CartContainer = () => {

    const {cartTotal} = useCart()

    return(
        <div className="cartProductsContainer">
           
            <ProductGrid/>
            <div className="cartFooter">
                <div className="cartElementsContainer">
                    <h2>Bienvenido a la sección de tus Productos</h2>
                </div>
                <div className="cartElementsContainer">
                    <span className="cartTotal">Total ${cartTotal}</span>
                    <button className="cartPurchase">Comprar</button>
                </div>
            </div>
        </div>
    )
}
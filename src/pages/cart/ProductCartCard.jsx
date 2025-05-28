import React from "react";
import './Cart.css'
import { useCart } from "../../components/CartContext";

export const ProductCartCard = () => {

        const {uniqueProducts, decreaseQuantity, addToCart, cantidades} = useCart()

        return(
        <>
            {uniqueProducts.map(prod => (
                <div className="productCartCard" key={prod.id}>
                    <div className="imgProdContainer">
                        <img src={prod.thumbnail} alt="prodImgage" className="prodImg"/>
                    </div>
                    <div className="productContentContainer">
                        <span className="prodTitle">
                            {prod.title}
                        </span>
                        <span className="prodPrice">
                            {`$ ${prod.price}`}
                        </span>
                    </div>
                    <div className="buttonsContainer">
                        <button className="buttonCart" onClick={() => addToCart(prod)}>+</button>
                        <span className="count">{cantidades[prod.id]}</span>
                        <button className="buttonCart" onClick={() => decreaseQuantity(prod)}>-</button>
                    </div>
                </div>         
            ))}
        </>
    )
}
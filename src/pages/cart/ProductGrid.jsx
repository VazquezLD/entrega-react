import React from "react";
import './Cart.css'
import { ProductCartCard } from "./ProductCartCard";

export const ProductGrid = () => {
    return(
        <div className="productGrid">
            <ProductCartCard/>
        </div>
    )
}
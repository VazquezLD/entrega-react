import React from "react";
import '../../styles/Products.css'
import { CategoriesNav } from "./CategoriesNav";
import { ProductsContainer } from "./ProductsContainer";

export const ProductsSection = ({setCategory, products}) => {
    return(
        <div className="productsSection">
            <CategoriesNav setCategory={setCategory}/>
            <ProductsContainer products={products}/>
        </div>
    )
}
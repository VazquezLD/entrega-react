import './Products.css'
import React, { useEffect, useState } from "react";
import { ProductsSection } from "./ProductsSection";

export const Products = () => {
    const [category, setCategory] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProductsFiltred = async () => {
            const url = category? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products`
            try{
                const res = await fetch(url)
                const data = await res.json();
                setProducts(data.products)
                console.log(products);
            }catch(error){
                console.log(error)
            }
        }
        fetchProductsFiltred()
    },[category])


    return(
        <div className="productsContainerAll">
            <ProductsSection setCategory={setCategory} products={products}/>
        </div>
    )
}

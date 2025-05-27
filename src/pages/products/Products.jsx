import './Products.css'
import React, { useEffect, useState } from "react";
import { ProductsSection } from "./ProductsSection";
import { useSearch } from '../../components/ContextProvider';
import { Footer } from '../home/Footer'

export const Products = () => {
    const [category, setCategory] = useState('')
    const [products, setProducts] = useState([])
    const { search, results } = useSearch()

    useEffect(() => {
        const fetchProductsFiltred = async () => {
            const url = category? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products`
            try{
                const res = await fetch(url)
                const data = await res.json();
                setProducts(data.products)
                
            }catch(error){
                console.log(error)
            }
        }
        fetchProductsFiltred()
    },[category])

    const productsToShow = search ? results : products

    return(
        <>
        <div className="productsContainerAll">
            <ProductsSection setCategory={setCategory} products={productsToShow}/>
        </div>
        <Footer/>
        </>
    )
}

import '../../styles/Products.css'
import React, { useEffect, useState } from "react";
import { ProductsSection } from "./ProductsSection";
import { useSearch } from '../../context/ContextProvider';
import { Footer } from '../home/Footer';

export const Products = () => {
    const [category, setCategory] = useState('')
    const [products, setProducts] = useState([])
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const { search, results } = useSearch()

    const limit = 12

    useEffect(() => {
        setProducts([])
        setSkip(0);
        setHasMore(true)
    }, [category])

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const url = category
                    ? `https://dummyjson.com/products/category/${category}`
                    : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

                const res = await fetch(url)
                const data = await res.json()

                if (category) {
                    setProducts(data.products)
                    setHasMore(false)
                } else {
                    setProducts((prev) => {
                        const existingIds = new Set(prev.map((p) => p.id))
                        const nuevos = data.products.filter((p) => !existingIds.has(p.id))
                        return [...prev, ...nuevos]
                    });
                    setHasMore(skip + limit < data.total)
                }

            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        };

        fetchProducts()
    }, [category, skip])

    const handleLoadMore = () => {
        setSkip((prev) => prev + limit)
    }

    const productsToShow = search ? results : products;

        return (
        <>
            <div className="productsContainerAll">
                {loading && products.length === 0 ? (
                    <p className="loader">Cargando productos...</p>
                ) : (
                    <ProductsSection setCategory={setCategory} products={productsToShow} />
                )}

                {!search && hasMore && products.length > 0 && (
                    <div style={{ textAlign: "center", marginTop: "2rem" }}>
                        <button className="buttonLoading" onClick={handleLoadMore} disabled={loading}>
                            {loading ? "Cargando...":"Cargar más"}
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )

}


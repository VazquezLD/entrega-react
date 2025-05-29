import React from "react"
import { useState, createContext, useContext, useEffect } from "react"

const CartProductsContext = createContext();

export function CartContext({ children }) {
  const [cartTotal, setCartTotal] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [cantidades, setCantidades] = useState({})
  const [cartproducts, setProducts] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  const uniqueProducts = cartproducts.filter(
    (prod, index, self) => index === self.findIndex((p) => p.id === prod.id)
  )

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartproducts))

    const total = cartproducts.reduce((acc, prod) => acc + prod.price, 0)
    setCartTotal(Math.round(total))

    setCartCount(
      cartproducts.reduce((acc, prod) => acc + (prod.quantity || 1), 0)
    )

    const nuevasCantidades = {}

    cartproducts.forEach((prod) => {

      if (!nuevasCantidades[prod.id]) {

        nuevasCantidades[prod.id] = 1
      } else {
        nuevasCantidades[prod.id]++
      }
    })
    setCantidades(nuevasCantidades)
  }, [cartproducts]);

  const addToCart = (prod) => {

    setProducts((prev) => [...prev, prod])

    setCantidades((prev) => ({
      ...prev,
      [prod.id]: (prev[prod.id] || 0) + 1,
    }))
  }

  const decreaseQuantity = (prod) => {
    const index = cartproducts.findIndex((p) => p.id === prod.id)

    if (index !== -1) {
      const newCart = [...cartproducts]
      newCart.splice(index, 1)
      setProducts(newCart)

      setCantidades((prev) => ({
        ...prev,
        [prod.id]: Math.max((prev[prod.id] || 1) - 1, 0),
      }))
    }
  } 

  return (
    <CartProductsContext.Provider value={{addToCart,decreaseQuantity,cartproducts,setProducts,cartCount,setCartCount,cartTotal,setCartTotal,cantidades, uniqueProducts,}}>
      {children}
    </CartProductsContext.Provider>
  )
}

export function useCart() {
  return useContext(CartProductsContext)
}


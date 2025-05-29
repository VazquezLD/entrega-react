import React, { useState } from "react";
import { ProductGrid } from "./ProductGrid";
import { useCart } from "../../components/CartContext";

export const CartContainer = () => {

    const [modal, setModal] = useState(false)
    const [buyButton, setBuyButton] = useState(false)
    const {cartTotal, deleteCart} = useCart()

    const deleteCartShowModal = () => {
        deleteCart()
        setModal(false)
    }

    return(
        <>
            <div className="cartProductsContainer">
                {modal && (
                <div className="confirmPanel">
                    <div className="contt">
                        <span className="spanConfirm">¿Desea eliminar los productos del carrito?</span>
                        <div className="buttonsConfirm">
                            <button className=" bt acept" onClick={() => deleteCartShowModal()}>Aceptar</button>
                            <button className=" bt decline" onClick={() => {setModal(false)}}>Rechazar</button>
                        </div>
                    </div>
                </div>
            )}
            {buyButton && (
                <div className="confirmPanel">
                    <div className="contt">
                        <span className="spanConfirm">¿Desea comprar los productos del carrito?</span>
                        <span className="spanConfirm">Total de compra: ${cartTotal}</span>
                        <div className="buttonsConfirm">
                            <button className=" bt acept" onClick={() => {setBuyButton(false)}}>Aceptar</button>
                            <button className=" bt decline" onClick={() => {setBuyButton(false)}}>Rechazar</button>
                        </div>
                    </div>
                </div>
            )}
                <ProductGrid/>
                <div className="cartFooter">
                    <div className="cartElementsContainer">
                        <h2>Bienvenido a la sección de tus Productos</h2>
                    </div>
                    <div className="cartElementsContainer">
                        <span className="cartTotal">Total ${cartTotal}</span>
                        <button className="acept" onClick={() => setBuyButton(true)}>Comprar</button>
                        <button className="decline" onClick={() => {setModal(true)}}>Eliminar carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}
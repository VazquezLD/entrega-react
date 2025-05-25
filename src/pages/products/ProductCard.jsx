import React from "react";
import './Products.css'
import { Tag } from "./Tag";
import { IoStarOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";


export const ProductCard = ({products}) => {
    return(
        <>
            {products.map(prod => (
                <div className="productCard" key={prod.id}>
                    <div className="cont">
                        <div className="headerProduct">
                        <img src={prod.thumbnail} alt="prodImgage" className="imageProduct" />
                    </div>
                    <div className="buttonContainer">
                        <CiCirclePlus className="productButton"/>
                    </div>
                    </div>
                    <div className="productContent">
                        <span className="productTitle">
                            {prod.title}
                        </span>

                        <div className="pricesContainer">
                            <span className="">
                                {`$ ${prod.price}`}
                            </span>
                            <span className="productDiscount">
                                -{prod.discountPercentage}%
                            </span>
                        </div>
                        <span className="rating">
                            <IoStarOutline/>{prod.rating}
                        </span>
                    </div>
                    <div className="tagsContainer">
                        <Tag tags={prod.tags}/>
                    </div>
                </div>
            ))}
        </>
    )
}
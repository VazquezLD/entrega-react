import '../../styles/Products.css'
import { Tag } from "./Tag";
import { IoStarOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { useCart } from "../../context/CartContext";


export const ProductCard = ({products}) => {

    const {cartproducts, setProducts, cartCount, setCartCount} = useCart()

    const addProduct = (prod) => {
        setCartCount(cartCount + 1)
        setProducts([...cartproducts, prod])
    }

    return(
        <>
            {products.map(prod => (
                <div className="productCard" key={prod.id}>
                    <div className="cont">
                        <div className="headerProduct">
                        <img src={prod.thumbnail} alt="prodImgage" className="imageProduct" />
                    </div>
                    <div className="buttonContainer">
                        <CiCirclePlus className="productButton" onClick={() => addProduct(prod)}/>
                    </div>
                    </div>
                    <div className="productContent">
                        <span className="productTitle">
                            {prod.title}
                        </span>

                        <div className="pricesContainer">
                            <span className="productPrice">
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
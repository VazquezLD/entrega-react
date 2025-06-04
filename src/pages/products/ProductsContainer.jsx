import '../../styles/Products.css'
import { ProductCard } from './ProductCard'

export const ProductsContainer = ({products}) => {

    return(
        <div className="productsContanier">
            <ProductCard products={products}/>
        </div>
    )
}
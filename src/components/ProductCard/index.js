import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products' 

export default function ProductCard({product, isFavorite}) {
// PRODUCT AND ISFAVORITE ARE PROPS FROM THE HOME 
    const { removeFavoriteId, saveFavoriteId } = useContext(ProductsContext); 
            //removeFavoriteId and saveFavoriteId are variables and functions 
    function formatTitle(text) {
		if(text.length > 60) {
			return text.slice(0, 60)+"..."
		}	
		return text 
	}

	function formatPrice(price) {
		return new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(price)
	}    

    return ( 
    <div className="product-card">
        <img src={product.url} alt="smartphone" />
        <p>{formatTitle(product.title)}</p>
        <div>
            <span>{formatPrice(product.price)}</span>
            {isFavorite ? <AiFillHeart size="20px" onClick={() => removeFavoriteId(product.id)} /> : <AiOutlineHeart size="20px" onClick={() => saveFavoriteId(product.id)} />  }
             {/* isFavorite is a variable passed as a prop here */}
            {/* removeFavoriteId and saveFavoriteId need to be part of state management because they manipulate, update 
            states in other functions */}
        </div>
    </div> 
    )  
}
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export default function ProductCard({product, saveFavoriteId, isFavorite, removeFavoriteId}) {
                                     // parameters and props 
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
            
        </div>
    </div> 
    )  
}
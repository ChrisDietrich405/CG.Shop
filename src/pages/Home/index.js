import { useEffect, useState, useContext } from "react";
import  { ProductsContext } from '../../contexts/products'
import "./styles.css";
import ProductCard from "../../components/ProductCard"

function Home() {
	const {favoriteProductIds, products } = useContext(ProductsContext)


	return (
		<div className="home-container">
			<h2>Best Smartphones in Town</h2>
			<div className="products-container">
				{products.map((product, i) => {
		
					const isFavorite = favoriteProductIds.includes(product.id);
                    //includes is a function in javascript to see if a value is inside an array 
					  // includes returns a boolean value
					  //the product.id is a boolean value that control whether or not the heart is filled 
					  //if product.id is inside a favoriteProductId then it returns true, otherwise it's false  

					return (
						<ProductCard 
							key={i} 
							product={product} 
							isFavorite={isFavorite} 
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;

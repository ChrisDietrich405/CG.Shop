import { useEffect, useState, useContext } from "react";
import  { ProductsContext } from '../../contexts/products'
import "./styles.css";
import ProductCard from "../../components/ProductCard"
import LoadingImage from "../../assets/images/loading.svg"

function Home() {
	const { favoriteProductIds, products, loading } = useContext(ProductsContext)
	if(loading) {
		return (
		      <div className="loading">
				  <img src={LoadingImage} alt="Loading" />
			  </div>
		)
	}

	return (
		<div className="home-container">
			<h2>Best Smartphones in Town</h2>
			<div className="products-container">
				{products.map((product, i) => {
					const isFavorite = favoriteProductIds.includes(product.id);
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

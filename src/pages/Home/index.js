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
					//when you map through an array there are two arguments passed
					//the second one is the index (the position) and is necessary for the key
					const isFavorite = favoriteProductIds.includes(product.id);

					//WHY NECESSARY BECAUSE SOME OF THE PHONES WILL GO TO THE fAVORITES PAGE?
					


					//this variable is to see whether or not a heart is filled
					//isFavorite is a prop being sent to ProductCard
                    //includes is a function in javascript to see if a value is inside an array 
					  // includes returns a boolean value
					  //the product.id is a boolean value that control whether or not the heart is filled 
					  //if product.id is inside a favoriteProductId then it returns true, otherwise it's false  

					return (
						<ProductCard 
							key={i} 
							product={product} //here we are passing the prop to the ProductCard
							isFavorite={isFavorite} 
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;

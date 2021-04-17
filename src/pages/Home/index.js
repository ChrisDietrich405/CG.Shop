import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

import ProductCard from "../../components/ProductCard"

function Home() {
	const [products, setProducts] = useState([]);
	const [favoriteProductIds, setFavoriteProductIds] = useState([]); // Array of fav products 

	function saveFavoriteId(id) { // add new id to our favoriteProductIds array 
			setFavoriteProductIds([...favoriteProductIds, id]) // set the new array ids to the state
	}

	function removeFavoriteId(id) {
	
    const newArray = favoriteProductIds.filter((favId) => {
				return favId !== id
			});

			setFavoriteProductIds(newArray)
			
	}

	useEffect(() => { 
		axios
			.get("http://localhost:5000/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((err) => { 
				console.log(err);
				alert("something is wrong :("); //we are going to add toast react later
			});
	}, []); //we usually put state variables inside of the brackets, it runs once when the pages is loaded
              //whenever there is something in the brackets, that thing triggers the UseEffect hook


	return (
		<div className="home-container">
			<h2>Best Smartphones in Town</h2>
			<div className="products-container">
				{products.map((product, i) => {
		
					const isFavorite = favoriteProductIds.includes(product.id);

					return (
						<ProductCard key={i} product={product} isFavorite={isFavorite} removeFavoriteId={removeFavoriteId}saveFavoriteId={saveFavoriteId}/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;

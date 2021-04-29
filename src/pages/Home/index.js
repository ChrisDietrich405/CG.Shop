import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

import ProductCard from "../../components/ProductCard"
import { toast } from "react-toastify";

function Home() {
	const [products, setProducts] = useState([]);
	const [favoriteProductIds, setFavoriteProductIds] = useState([]); // Array of fav products 

	function saveFavoriteId(productId) { // add new id to our favoriteProductIds array 
			setFavoriteProductIds([...favoriteProductIds, productId]) // productId is the specific product that the user clicked
								  //creating a new array that we can add to
		}

	function removeFavoriteId(productId) {
	
    const newArray = favoriteProductIds.filter(favId => favId !== productId);

			setFavoriteProductIds(newArray)
			
	}
	

	useEffect(() => { //the information from the API has to be mounted first before the components render
		axios
			.get("http://localhost:5000/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((err) => { 
				console.log(err);
				toast.error('Some error happened :(')
			});
	}, []);  //we usually put state variables inside of the brackets, it runs once when the pages is loaded
             // whenever there is something in the brackets, that thing triggers the UseEffect hook
			 // UseEffect is only called once so if you don't use it with your http request, 
			 // because of the setProducts state variable the request will continue to be called again and again
			 // UseEffect is only called once. 

	useEffect(() => {
				if(favoriteProductIds.length){
					toast.success('A product was saved into the favorites');
				}
	}, [favoriteProductIds]);


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
							removeFavoriteId={removeFavoriteId} 
							saveFavoriteId={saveFavoriteId}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;

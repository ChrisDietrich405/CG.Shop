import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((response) => {
				setProducts(response.data); // response is an object, data is an attribute
			})
			.catch((err) => {
				console.log(err);
				alert("something is wrong :(");
			});
	}, []); //we usually put state variables inside of the brackets,

	return (
		<div className="home-container">
			<h2>Best Smartphones in Town</h2>
			<div className="products-container">
				{products.map((product, i) => {
					return (
						<div key={i} className="product-card">
							<img src={product.url} alt="smartphone" />
							<p>{product.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Home;

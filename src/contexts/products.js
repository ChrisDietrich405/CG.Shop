import { createContext, useEffect, useState } from 'react'; 
import { toast } from "react-toastify";
import axios from 'axios'; 

export const ProductsContext = createContext(); 

export default function ProductsContextProvider({ children }){

  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]); 
	const [favoriteProductIds, setFavoriteProductIds] = useState([]); 
  const [headerSearchInput, setHeaderSearchInput] = useState('');  


  function handleHeaderSearchInput(event){
    setHeaderSearchInput(event.target.value)
  }
  

	function saveFavoriteId(productId) {
			 setFavoriteProductIds([...favoriteProductIds, productId]) 
	}

	function removeFavoriteId(productId) {
    const newArray = favoriteProductIds.filter(favId => favId !== productId);
		setFavoriteProductIds(newArray)
	} 

  
  useEffect(() => {
    const newProducts = products.filter(product => product.title.includes(headerSearchInput))
    setProductsFiltered(newProducts)
  }, [headerSearchInput])
  
	
	useEffect(() => { 
		axios
			.get("http://localhost:5000/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((err) => { 
				console.log(err);
				toast.error('Some error happened :(')
			});
	}, []); 

	useEffect(() => {
				if(favoriteProductIds.length){
					toast.success('A product was saved into the favorites');
				}
	}, [favoriteProductIds]);

  return(
    <ProductsContext.Provider 
      value={{
        products: headerSearchInput ? productsFiltered : products,
        favoriteProductIds,
        saveFavoriteId,
        removeFavoriteId,
        handleHeaderSearchInput
      }}
    >
      {children}
   </ProductsContext.Provider>
  )
} 
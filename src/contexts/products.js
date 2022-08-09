import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as fakeHttp from "../helpers/fakehttp";

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [favoriteProductIds, setFavoriteProductIds] = useState([]);
  const [headerSearchInput, setHeaderSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  function handleHeaderSearchInput(event) {
    setHeaderSearchInput(event.target.value);
  }

  function saveFavoriteId(productId) {
    setFavoriteProductIds([...favoriteProductIds, productId]);
  }

  function removeFavoriteId(productId) {
    const newArray = favoriteProductIds.filter((favId) => favId !== productId);
    setFavoriteProductIds(newArray);
  }

  useEffect(() => {
    const foundProducts = products.filter((product) =>
      product.title.toUpperCase().includes(headerSearchInput.toUpperCase())
    );
    setProductsFiltered(foundProducts);
  }, [products, headerSearchInput]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fakeHttp.getProducts();

        setProducts(response.data);
      } catch (err) {
        console.log(err);
        toast.error("Error");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (favoriteProductIds.length) {
      toast.info("A product was saved to your favorites");
    }
  }, [favoriteProductIds]);

  return (
    <ProductsContext.Provider
      value={{
        products: headerSearchInput !== "" ? productsFiltered : products,
        favoriteProductIds,
        saveFavoriteId,
        removeFavoriteId,
        handleHeaderSearchInput,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

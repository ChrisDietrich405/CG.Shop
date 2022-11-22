import React, { createContext, useEffect, useState, ReactNode } from "react";
import { toast } from "react-toastify";

import * as fakeHttp from "../helpers/fakehttp";
import { IProduct } from "../models/product";

export interface IProductsContext {
  products: IProduct[];
  favoriteProductIds: number[];
  saveFavoriteId: (productId: number) => void;
  removeFavoriteId: (productId: number) => void;
  handleHeaderSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

interface IProductsContextProvider {
  children: JSX.Element;
}

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext
);

export default function ProductsContextProvider({
  children,
}: IProductsContextProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);
  const [favoriteProductIds, setFavoriteProductIds] = useState<number[]>([]);
  const [headerSearchInput, setHeaderSearchInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleHeaderSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
    setHeaderSearchInput(event.target.value);
  }

  function saveFavoriteId(productId: number) {
    setFavoriteProductIds([...favoriteProductIds, productId]);
  }

  function removeFavoriteId(productId: number) {
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
      toast.info("A product was saved to your wishlist");
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

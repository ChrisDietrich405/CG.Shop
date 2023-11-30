// "https://phones-vzxsrv7pza-uc.a.run.app"

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"

import { api } from "../services/api";
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
        const response = await axios.get(
          "https://phones-vzxsrv7pza-uc.a.run.app"
        );
        setProducts(response.data);
      } catch (err) {
        toast.error("Error");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (favoriteProductIds.length) {
      toast.info("A product was saved to your wishlist");
    }
  }, [favoriteProductIds]);

  const productsContextValue: IProductsContext = {
    products: headerSearchInput !== "" ? productsFiltered : products,
    favoriteProductIds,
    saveFavoriteId,
    removeFavoriteId,
    handleHeaderSearchInput,
    loading,
  };

  return (
    <ProductsContext.Provider value={productsContextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

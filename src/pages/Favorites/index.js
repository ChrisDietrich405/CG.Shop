import axios from "axios";
import { useState, useContext } from "react";

import { ProductsContext } from "../../contexts/products";
import ProductCard from "../../components/ProductCard";

import "./styles.css";
import wishlistImage from "../../assets/images/wishlist.svg";

export default function WishList() {
  const { favoriteProductIds, products } = useContext(ProductsContext);
  const favoriteProducts = products.filter((product) => {
    return favoriteProductIds.includes(product.id);
  });
  if (!favoriteProducts.length) {
    return (
      <div className="emptyListContainer">
        <img src={wishlistImage} className="empty-list" alt="Empty List" />
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="products-container favorites">
        <h1>Favorites</h1>
        {favoriteProducts.map((product) => (
          <ProductCard product={product} isFavorite={true} />
        ))}
      </div>
    </div>
  );
}

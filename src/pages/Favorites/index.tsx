import { useContext } from "react";

import { ProductsContext, IProductsContext } from "../../contexts/products";
import ProductCard from "../../components/ProductCard";

import "./styles.css";

import wishlistImage from "../../assets/images/wishlist.svg";

export default function WishList() {
  const { favoriteProductIds, products } =
    useContext<IProductsContext>(ProductsContext);

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
    <div className="favorites-container">
      <h1 className="favorites-title">Wishlist</h1>
      <div className="products-container favorites">
        {favoriteProducts.map((product) => (
          <ProductCard product={product} isFavorite={true} />
        ))}
      </div>
    </div>
  );
}

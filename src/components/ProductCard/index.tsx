import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext } from "react";

import { IProduct } from "../../models/product";
import { IProductsContext, ProductsContext } from "../../contexts/products";

interface ProductCardProps {
  product: IProduct,
  isFavorite: boolean
}

export default function ProductCard({ product, isFavorite } : ProductCardProps) {
  const { removeFavoriteId, saveFavoriteId } =
    useContext<IProductsContext>(ProductsContext);

  function formatTitle(text: string): string {
    if (text.length > 60) {
      return text.slice(0, 60) + "...";
    }
    return text;
  }

  function formatPrice(price: number) : string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }

  return (
    <div className="product-card">
      <img src={product.url} alt="smartphone" />
      <p>{formatTitle(product.title)}</p>
      <div>
        <span>{formatPrice(product.price)}</span>
        {isFavorite ? (
          <AiFillHeart
            size="20px"
            onClick={() => removeFavoriteId(product.id)}
          />
        ) : (
          <AiOutlineHeart
            size="20px"
            onClick={() => saveFavoriteId(product.id)}
          />
        )}
      </div>
    </div>
  );
}

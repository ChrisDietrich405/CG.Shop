import axios from "axios"
import { useState, useContext } from "react"
import { ProductsContext } from "../../contexts/products"
import ProductCard from "../../components/ProductCard"


export default function WishList() {
    const { favoriteProductIds, products } = useContext(ProductsContext)
    const favoriteProducts = products.filter(product => {
        return favoriteProductIds.includes(product.id)
    })
   
    return (
        <div className="home-container">
            <div className="products-container">
            {
              favoriteProducts.map(product => (
                <ProductCard product={product} isFavorite={true}/>
                //product={product} we are passing an item from a favoriteProducts array to the
                //ProductCard as a prop
              ))
            }
            </div>
        </div>
    )
}


import axios from "axios"
import { useState, useContext } from "react"
import { ProductsContext } from "../../contexts/products"
import ProductCard from "../../components/ProductCard"


export default function WishList() {
    const { favoriteProductIds, products } = useContext(ProductsContext)
    const favoriteProducts =   products.filter(product => {
        return favoriteProductIds.includes(product.id)
    })
    console.log(favoriteProducts)
    // build this page just like the home page 
    return (
        <div>
            {
              favoriteProducts.map(product => (
                <ProductCard product={product} isFavorite={true}/>
              ))
            }
        </div>
    )
}


import axios from "axios"
import { useState, useContext } from "react"

import { ProductsContext } from "../../contexts/products"
import ProductCard from "../../components/ProductCard"

import "./styles.css"
import wishlistImage from "../../assets/images/wishlist.svg" 



export default function WishList() {
    const { favoriteProductIds, products } = useContext(ProductsContext)
    const favoriteProducts = products.filter(product => {
        return favoriteProductIds.includes(product.id)
    })
    if(!favoriteProducts.length) {
      return ( 
        <div className="emptyListContainer">
          <img src={wishlistImage} className="empty-list" alt="Empty List" /> 
        </div>
        )

    } // if there are no favorite products
    //we switched favoriteProducts.length from a truthy value to a falsy value
    //when we put an exclamation point in front we are switching a truthy value to a 
    //falsy value or vice versa
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


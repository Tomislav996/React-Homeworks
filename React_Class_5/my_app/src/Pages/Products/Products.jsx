
import { useState, useEffect } from "react"

import ProductCard from "../../Componets/ProductCard/ProductCart"

import "./Products.css"

import React from 'react'

const Products = () => {

  const URL = "https://fakestoreapi.com/products?limit=10";

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(URL);
    const result = await response.json();

    setProducts(result);
  }

  useEffect(() => {

    if(products.length > 0) return;
    
    fetchProducts();

  }, [])

  return (
    <div>
      <h1>Products Page</h1>

      <hr />

      <br />

      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Products
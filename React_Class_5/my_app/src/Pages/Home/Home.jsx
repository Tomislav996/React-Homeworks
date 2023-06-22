
import { useState, useEffect } from "react"

import ProductCard from "../../Componets/ProductCard/ProductCart"

import "./Home.css"


import React from 'react'

const Home = () => {

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const URL = "https://fakestoreapi.com/products/category/";

  const [categorySelected, setCategorySelected] = useState("electronics");
  const [productsByCategory, setProductsByCategory] = useState([]);

  const handleSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const getProductsByCategory = async (category) => {

    const response = await fetch(URL + category);
    const result = await response.json();

    setProductsByCategory(result);

  };

  useEffect(() => {
    getProductsByCategory(categorySelected)
  }, [categorySelected])

  return (
    <div>
      <h1>Home page</h1>
      <hr />
      <br />

      <h2>Selected category: {categorySelected}</h2>
      <hr />
      <br />

      <div className="categories">
        {categories.map((category) => (
          <div
            onClick={() => handleSelectCategory(category)}
            className={`${
              category === categorySelected ? "active-category" : ""
            } ${`category`}`}
            key={category}
          >
            {category}
          </div>
        ))}
      </div>

      {productsByCategory.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Home
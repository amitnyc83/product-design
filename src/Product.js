import React, { useState, useEffect } from 'react';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';

import './styles/product.scss';

export const Product = () => {

  const [data, setData] = useState([]);
  

  const getData = () => {
    fetch('data.json',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }) 
    .then(function(response){
      return response.json();
    })
    .then(function(productData) {
      setData(productData)
    
    }); 
  }
  
  
  useEffect(() => {
    getData()
  }, [])


 const mapProduct = (data) => {
  return data.map((product, idx) => {
    return (
      <div key={idx}>
      <div className ="product-image">
        <ProductImage image={product.imgURL} />
      </div>
      <div className="product-details">
        <ProductDesc 
        category={product.category}
        name={product.name}
        description={product.description}
        ratings={product.ratings} 
        features={product.features} 
        ingredients={product.Ingredients}
        shade={product.shade} />
        <hr/>
        <ProductPurchase price={product.price} />
      </div>
      </div>
    )
  })
 }

 
  return (
    <main className="container">
       {mapProduct(data)}
    </main>
     
   
 )
};
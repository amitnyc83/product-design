import React from 'react';


export const ProductImage = ({ image}) => (
  
  <figure className="product-figure">
    <img className="product-figure__image" src={image[0]} alt="Product" />
  </figure>
)

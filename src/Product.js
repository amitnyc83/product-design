import React from 'react';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';

import './styles/product.scss';

export const Product = ({ productData: { imgURL, category, name, description, ratingURL, features, shade, price } }) => (
  <main className="container">
    <div className ="product-image">
      <ProductImage image={imgURL} />
    </div>
    <div className="product-details">
      <ProductDesc 
        category={category}
        name={name}
        description={description}
        rating={ratingURL} 
        features={features} 
        shade={shade} />
      <hr/>
      <ProductPurchase price={price} />
    </div>
 </main>
);
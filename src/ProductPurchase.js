import React, { useState } from "react";

import caret from "./images/caret.png";



const QuantityContext = React.createContext(0);

const ProductPurchase = ({ price }) => {
  const [quantity, setQuantity] = useState(1);

  

  const decreaseQuanity = (quantity) => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    };
  };

  const increaseQuantity = (quantity) => {
    if (quantity < 9) {
      setQuantity(quantity + 1)
    };
  };

  const addToCart = (quantity) => {
    setQuantity(quantity)
  };

 

  return (
    <QuantityContext.Provider quantity={quantity}>
    <section>
      <div className="product-quantity-purchase">
        <div className="product-quantity">
          <span className="product-quantity__title">Quantity </span>
          <button 
            className="product-quantity__decrease-quantity"
            onClick={() => decreaseQuanity(quantity)}
          >-</button>
          <span className="product-quantity__amount">{quantity} </span>
          <button
           className="product-quantity__increase-quantity"
           onClick={() => increaseQuantity(quantity)}
           >+</button>
        </div>
        <div className="product-one-time-purchase">
          <span className="product-one-time-purchase__title">
            One Time Purchase
          </span>{" "}
          <img
            src={caret}
            className="product-one-time-purchase__frequency"
            alt="Select Frequency"
          />
        </div>
      </div>
      <div className="product-price-bag">
        <div className="product-price">{price}</div>
        <button className="product-add-to-bag" 
        name="AddToBag"
        onClick={() => addToCart(quantity)}
        >
          Add To Bag
        </button>
      </div>
    </section>
    </QuantityContext.Provider>
  );
};


export { QuantityContext, ProductPurchase };
import React, { useState, useEffect } from 'react';



export default function Accordion({ productIngredients, productGuarantee}) {
    const [isOpen, setIsOpen] = useState(false);

    const [guarantee, setGuarantee] = useState([]);


  const getGuarantee = () => {
    fetch("garantee.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (guaranteeData) {
        setGuarantee(guaranteeData);
      });
  };

    useEffect(() => {
       getGuarantee()
    }, ([]))

    console.log(guarantee)

    const Ingredients = productIngredients ? (
      <div className="product-ingredients">
        <div
          className="product-ingredients__title"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3>
            Ingredients
            <div className="product-ingredients__indicator">
              {isOpen ? "-" : "+"}
            </div>
          </h3>
        </div>
        {isOpen && (
          <div className="product-ingredients__list">
            {productIngredients.map((ingredients, idx) => {
              return <li key={idx}>{ingredients}</li>;
            })}
            <p>
              Note: Please be aware that ingredient lists may change or vary
              from time to time. Please refer to the ingredient list on the
              product package you receive for the most up to date list of
              ingredients.
            </p>
          </div>
        )}
      </div>
    ) : null;
   

    const Guarantee = productGuarantee
      ? guarantee.map(function (guarantee) {
          return (
            <div className="product-guarantee">
              <div
                className="product-guarantee__title"
                onClick={() => setIsOpen(!isOpen)}
              >
                <h3>
                  {guarantee.gauarantee.title}
                  <div className="product-guarantee__indicator">
                    {isOpen ? "-" : "+"}
                  </div>
                </h3>
              </div>
              {isOpen && <p className="product-guarantee__text">{guarantee.gauarantee.text}</p>}
            </div>
          );
        })
      : null;


    

   
  
    return (
      <div>
        {Ingredients}
        {Guarantee}
      </div>
    );
 }
import React, { useState } from 'react';


export default function Accordion({ productIngredients}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(productIngredients)
    return (
        <div className="product-ingredients">
           <div 
             className="product-ingredients__title"
             onClick={() => setIsOpen(!isOpen)}
            >
             <h4>Ingredients
             <div className="product-ingredients__indicator">
                 {isOpen ? '-' : '+'}
             </div>
             </h4>
            </div>
            {isOpen && (
               productIngredients.map(ingredients => {
                   return (
                    <div className="accordion-body">
                    <li>{ingredients}</li>
                    </div>
               )})
            )}
        </div>
   );
 }
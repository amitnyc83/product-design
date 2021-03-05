import React, { useState } from 'react';
import Accordion from './Accordion';
import { Modal } from './Modal';
import caret from './images/caret.png';
import { ReactComponent as VeganIcon } from './images/green-leaf-vegan-icon-by-Vexels.svg'

export const ProductDesc = ({ category, name, description, ratings, moreInfo, features, shade, ingredients }) => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
  <section className="product-details">
    <h4 className="product-category">{category}</h4>
    <h2 className="product-name">{name}
     {(() => {
       if (features.keyIngredients.includes('vegan')) {
         return <VeganIcon className="vegan-icon-style" /> 
       }
     })()}
     </h2> 
    <p className="product-description">{description} {" "}
    {!show && <button className="product-description__button" onClick={openModal}> More Info</button>}
    <Modal closeModal={closeModal} show={show} moreInfo={moreInfo}/>
    </p>
     <div className="product-rating-container">
     <div className="product-rating detail-description-style">
       <h4 className="product-rating__title">Average Rating</h4>
       <div className="product-rating__averageRatings">{ratings.averageRating.toFixed(1)}</div> 
       <h4 className="product-rating__totalRatingsTitle">Num of Ratings</h4>
       <div className="product-rating__totalRatings">{ratings.totalAmount}
         <img className="product-rating__view-all-ratings" src={caret} alt="View All Ratings" />
       </div>  
      </div>
     </div>
    <section className="product-detail-description">
      <div className="product-benefits-finish">
       <div className="product-benefits detail-description-style">
         <h4 className="product-benefits__title">Benefits</h4>
         <p className="product-benefits__description">{features.benefits}</p>
       </div>
       <div className="product-finish detail-description-style">
         <h4 className="product-finish__title">Finish</h4>
         <p className="product-finish__description">{features.finish}</p> 
       </div>
      </div>
      <div className="product-coverage-description">
       <div className="product-coverage detail-description-style">
         <h4 className="product-coverage__title">Coverage</h4>
         <p className="product-coverage__description">{features.coverage}</p>
       </div>
       <div className="product-key-ingredients detail-description-style">
         <h4 className="product-key-ingredients__title">Key Ingredients</h4>
         <p className="product_key_ingredients__description">
           {features.keyIngredients} {" "}
           <a className="product-key-ingredients__link" href="http://www.clinique.com">
             More
           </a>
         </p>
       </div>
      </div>
    </section>
    {(() => {
      if (ingredients.length > 0) {
        return <Accordion productIngredients={ingredients}/>
      }
      if (features.gauarantee === 1) {
        return <Accordion productGuarantee={features.gauarantee} />
      }
    })()}
    <section className="product-shade">
    <div className="product-shade__title">Shade</div>
      <select>
        {shade.map((shade, i) => {
          return (
            <option key={i} 
            value={shade.name}
            className="product-shade__shade-name">
            {shade.name}
            </option>
          )
        })}
      </select>
    </section>
  </section>
)};
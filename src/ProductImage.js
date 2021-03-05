import React, { useState, useEffect } from 'react';




export const ProductImage = ({ images, badge }) => {

  const [guarantee, setGuarantee] = useState([]);
  const [selectedImg, setSelectedImg] = useState(images[0])

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


    const mapImages = (images) => {
      return (
    images.map((image, idx) => {
      return (
        <img 
         key={idx}
         src={image}
         alt="Product"
         onClick={() => setSelectedImg(image)} 
        />
      )
    }))}



  return (
  <figure className="product-figure">
      <img className="product-figure__image" 
      src={selectedImg} 
      alt="Product"
       />
         { {badge}.hasOwnProperty("badge") && 
           guarantee.forEach(guarantee => {
             for (let i in guarantee) {
               return (
                 <div className="product-figure__new-item">{guarantee["new"]["text"]}</div>
                ) 
              }
            })}
       <div className="product-figure__thumb-bar">
         {mapImages(images)}
       </div>
  </figure>
  )
}






// {(() => {
//   if ({badge}.hasOwnProperty("badge")) {
//     guarantee.forEach(guarantee => {
//       for (let i in guarantee) {
//         console.log(guarantee["new"]["text"])
//         return (
//           <div className="product-figure__new-item">{guarantee["new"]["text"]}</div>
//          ) 
//        }
//      }) 
//    }
// })()}
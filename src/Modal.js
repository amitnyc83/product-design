import React from "react";


export const Modal = ({show, closeModal, moreInfo}) => {



  return (
    <>
    <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <p>{moreInfo}</p>
      </div>
      </>
  )

   
}


import React from "react";
import styled from "styled-components";
import "./IndividualProduct.css";

function IndividualProduct({ individualProduct, addToCart }) {
  //   console.log(individualProduct);
  const handleAddToCart = () => {
    addToCart(individualProduct);
  };
  return (
    <div className="Container">
      <img src={individualProduct.url} alt="product-image" className="Image" />
      <div className="desc">
        <div className="name">
          <h1 className="pname">{individualProduct.title}</h1>
        </div>
        <h2 className="pdesc">{individualProduct.description}</h2>
        <div className="bottom">
          <div className="H2">₹{individualProduct.price}</div>
          <button className="b1 " onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndividualProduct;

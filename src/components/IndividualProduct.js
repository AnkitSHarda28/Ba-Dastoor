import React from "react";
import styled from "styled-components";
import "./IndividualProduct.css";

const Container = styled.div`
  height: 300px;
  width: 220px;
  border: 2px solid black;
  margin: 20px 0;
  border-radius: 10px;
  text-align: center;
`;
const Logo = styled.img`
  width: 200px;
  height: 180px;
  border: 1px solid red;
`;
const H1 = styled.h1`
  font-size: 20px;
`;
const H2 = styled.h1`
  font-size: 10px;
`;
const Button = styled.div`
  background-color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px 16px;
  color: #023620;

  &:hover {
    background-color: black;
    color: white;
  }
`;

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
          <h1>{individualProduct.title}</h1>
        </div>
        <h2>{individualProduct.description}</h2>
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

import React from "react";
import styled from "styled-components";

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
    <Container>
      <Logo src={individualProduct.url} alt="product-image" />
      <H1>{individualProduct.title}</H1>
      <H2>{individualProduct.description}</H2>
      <div>₹{individualProduct.price}</div>
      <Button onClick={handleAddToCart}>ADD TO CART</Button>
    </Container>
  );
}

export default IndividualProduct;

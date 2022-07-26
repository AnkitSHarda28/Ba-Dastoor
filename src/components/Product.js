import React from "react";
import One from "../Images/one.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 180px;
  height: 180px;
`;

const H1 = styled.h1`
  font-size: 40px;
`;

const Container = styled.div`
  height: 300px;
  width: 200px;
  text-align: center;
  border: 2px solid black;
  margin: 20px 0;
`;

const All = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function Product() {
  return (
    <All>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <p>Description</p>
      </Container>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <p>Description</p>
      </Container>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <p>Description</p>
      </Container>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <p>Description</p>
      </Container>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <p>Description</p>
      </Container>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <p>Description</p>
      </Container>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <p>Description</p>
      </Container>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <p>Description</p>
      </Container>
    </All>
  );
}

export default Product;

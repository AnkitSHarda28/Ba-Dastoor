import React from "react";
import One from "../Images/one.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 230px;
  height: 230px;
`;

const H1 = styled.h1`
  font-size: 17px;
  margin: 2px 0 0 0;
`;

const Container = styled.div`
  height: 350px;
  width: 250px;
  padding: 10px;
  margin: 10px 0;
`;

const All = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`;
const Button = styled.button`
  border: 1px solid green;
  justify-content: center;
  height: 30px;
  width: auto;
  font-size: 10px;
`;
const P = styled.p`
  font-size: 10px;
`;
const H2 = styled.h2`
  font-size: 12px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Product() {
  return (
    <All>
      <Container>
        <Logo src={One} />
        <H1>Product1</H1>
        <P>Description</P>
        <Bottom>
          <H2>Price</H2>
          <Button>Add to Cart</Button>
        </Bottom>
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

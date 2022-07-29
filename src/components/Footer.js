import React from "react";
import styled from "styled-components";

const Footer1 = styled.div`
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: blur;
  position: fixed;
  text-align: center;
  backdrop-filter: blur(2px);
  padding: 2px;
`;

function Footer() {
  return <Footer1>©️ 2022 by Ba-Dastoor | All Rights Reserved</Footer1>;
}

export default Footer;

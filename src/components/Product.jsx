import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 1px solid #ccc;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  ${mobile({ height: "20vh" })}
`;
const Browser = styled.div`
  display: flex;
  background-color: #ccc;
  height: 20px;
  align-items: center;
  position: sticky;
  z-index: 2;
  ${mobile({ flexDirection: "column" })}
`;
const Circle = styled.div`
  border-radius: 50%;
  background-color: white;
  height: 6px;
  width: 6px;
  margin: 3px;
`;

const ImgContainer = styled.div`
  object-fit: cover;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: all 10s ease;
  &:hover {
    transform: translateY(-100%);
  }
`;
const Product = ({ src, url }) => {
  return (
    <Wrapper>
      <Browser>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </Browser>
      <ImgContainer>
        <a href={url} target="_blank" rel="noreferrer">
          <Img src={src} />
        </a>
      </ImgContainer>
    </Wrapper>
  );
};

export default Product;

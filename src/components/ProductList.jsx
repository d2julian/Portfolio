import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { products } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  width: 65%;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
`;
const TitleDesc = styled.p`
  margin: 2 0px 0px;
`;
const ProducttWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const ProductList = () => {
  return (
    <Container>
      <Text>
        <Title>Create & inspire.</Title>
        <TitleDesc>
          Julian lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum lore ipsum. lore ipsum lore ipsum lore ipsum
        </TitleDesc>
      </Text>
      <ProducttWrapper>
        {products.map((p) => (
          <Product key={p.id} src={p.img} url={p.link} />
        ))}
      </ProducttWrapper>
    </Container>
  );
};

export default ProductList;

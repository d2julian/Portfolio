import React, { useContext } from "react";
import Sun from "../img/sun.png";
import Moon from "../img/moon.png";
import styled from "styled-components";
import ThemeContext from "../store/ThemeContext";

const Container = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Icon = styled.img`
  height: 15px;
  width: 15px;
`;
const Switch = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  ${(props) => (props.position === "light" ? "left: 0" : "right: 0")};
  ${(props) => (props.position === "light" ? "background-color: yellow" : "background-color: grey")};
`;

const Toggle = () => {
  const themeContext = useContext(ThemeContext);
  const handleClick = () => {
    themeContext.dispatch({ type: "TOGGLE" });
  };
  return (
    <Container>
      <Icon src={Sun} />
      <Icon src={Moon} />
      <Switch position={themeContext.state.theme} onClick={handleClick}></Switch>
    </Container>
  );
};

export default Toggle;

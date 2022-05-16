import React from "react";
import styled from "styled-components";
import Aw from "../img/award.png";
import { mobile } from "../responsive";
import Thinking from "../img/thinking.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column", height: "100%" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;

const Right = styled.div`
  flex: 1;
  width: 50%;
  position: relative;
`;

const Card = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  overflow: hidden;
  position: ${(props) => (props.bg ? "absolute" : "relative")};
  ${(props) => props.bg && "top: 50px"};
  ${(props) => props.bg && "left: 50px"};
  ${(props) => props.bg && "background-color: #333"};
  ${mobile({ width: "100%" })}
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
`;

const Subtitle = styled.p`
  margin: 20px 0px;
`;
const SubtitleDesc = styled.p`
  font-weight: 200;
`;
const PdescAward = styled.p``;

const Title = styled.h1`
  font-weight: 400;
`;

const Award = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  ${mobile({ flexDirection: "column", justifyContent: "center", width: "100%" })}
`;
const AwardTitle = styled.h4`
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
`;
const AwardImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
`;
const Text = styled.div`
  width: 70%;
`;
const About = () => {
  return (
    <Container>
      <Left>
        <Card bg="true"></Card>
        <Card>
          <Img src={Thinking} alt="" className="a-img" />
        </Card>
      </Left>
      <Right>
        <Title>About Me</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Subtitle>
        <SubtitleDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </SubtitleDesc>
        <Award>
          <AwardImg src={Aw} alt="" />
          <Text>
            <AwardTitle>International Design Awards 2021</AwardTitle>
            <PdescAward>Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and fugit.</PdescAward>
          </Text>
        </Award>
      </Right>
    </Container>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 100vh;
  position: relative;
`;
const Bg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #59b256;
  position: absolute;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 60px;
`;
const Info = styled.div``;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Description = styled.div`
  font-weight: 200;
`;
const Form = styled.form`
  margin-top: 20px;
`;
const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 10px 0px;
  padding-left: 15px;
`;
const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  padding-left: 15px;
`;
const Button = styled.button`
  border: none;
  padding: 30px;
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Container>
      <Bg />
      <Wrapper>
        <Left>
          <Title>Contact me</Title>
          <Info>
            <InfoItem>
              <Icon src={Phone} /> +44 11 11 11 21
            </InfoItem>
            <InfoItem>
              <Icon src={Email} /> julian@gmail.com
            </InfoItem>
            <InfoItem>
              <Icon src={Address} /> Calle false de tu casa España
            </InfoItem>
          </Info>
        </Left>
        <Right>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quae fugit temporibus rem voluptate sed architecto distinctio ab. Neque
            explicabo autem qui ab quam quas veniam itaque nihil facilis reprehenderit.
          </Description>
          <Form>
            <Input type="text" placeholder="Name" name="username"></Input>
            <Input type="text" placeholder="Subject" name="subject"></Input>
            <Input type="text" placeholder="Email" name="email"></Input>
            <TextArea rows="5" placeholder="Message" name="message"></TextArea>
            <Button type="submit">Submit</Button>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;

import React from "react";
import {
  Container,
  ShadowContainer,
  ImageContainer,
} from "../../styles/styles.style";
import Login from "./Login";
import Header from "./Header";

const LoginPage = () => {
  return (
    <ImageContainer img>
      <ShadowContainer shadow="0.9">
      <Container col height="100vh" width="100vw">
      <Header/>
        <Container row height="100vh" width="100vw">
          <a style={{color:"white", fontSize:"27px",textAlign:"center",lineHeight:"45px",width:"45vw"}}>Witaj w systemie umożliwiającym zarządzanie twoim mieszkaniem.<br/>
          Dzięki systemowi będziesz mógł załatwiac sprawy związane z twoim mieszkaniem bez wychodzenia z domu.
          </a>
          <Login />
        </Container>
        </Container>
      </ShadowContainer>
    </ImageContainer>
  );
};

export default LoginPage;

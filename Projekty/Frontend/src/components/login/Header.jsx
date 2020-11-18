import React from 'react';
import { Container } from '../../styles/styles.style';
import { Image } from "react-bootstrap";
import Logo from "../../resources/logo.png";
const Header = () => {
    return (
        <Container height="20vh" col>
            <Image src={Logo} width="180"
                height="180" />
            <h1 style={{ fontSize: 50, color: "#ffffff" }}>
                System do zarządzania mieszkaniem</h1>
        </Container>
    );
};

export default Header;
import React from 'react';
import { Container } from '../../styles/styles.style';

const Header = () => {
    return (
        <Container height="20vh">
            <h1 style={{fontSize:50,color:"#ffffff"}}>
                System do zarządzania mieszkaniem</h1>
        </Container>
    );
};

export default Header;
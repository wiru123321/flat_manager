import { Container } from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

const FlatInformation = ({ user }) => {
    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "5vh", height: "70vh" }}>
            <HomeIcon style={{ fontSize: 90 }} />

        </Container>
    );
};

export default FlatInformation;
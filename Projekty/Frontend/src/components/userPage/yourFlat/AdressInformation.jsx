import { Container } from '@material-ui/core';
import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';

const AdressInformation = ({ user }) => {
    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "5vh", height: "70vh" }}>
            <PlaceIcon style={{ fontSize: 90 }} />
        </Container>
    );
};

export default AdressInformation;
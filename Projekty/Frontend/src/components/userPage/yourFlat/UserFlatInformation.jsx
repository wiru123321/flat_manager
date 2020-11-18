import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ContactsIcon from '@material-ui/icons/Contacts';

const UserFlatInformation = ({ user }) => {
    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "5vh", height: "70vh" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ContactsIcon style={{ fontSize: 90 }} />
                </Grid>
                <Grid item xs={12}>
                    <a>Imie: {user.name}</a>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserFlatInformation;
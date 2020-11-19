import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    paragraf: {
        fontWeight: "bold",
        fontSize: "23px"
    },
    texts: {
        fontSize: "20px"
    }
}));
const UserFlatInformation = ({ user }) => {

    const classes = useStyles();
    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "5vh", height: "100%" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ContactsIcon style={{ fontSize: 90 }} />
                    <p className={classes.paragraf}>Dane</p>
                </Grid>
                <Grid item xs={12}>
                    <AccountCircleIcon />
                    <p className={classes.paragraf}>Imie i Nazwisko</p>
                    <a className={classes.texts}>{user.name} {user.surname}</a>
                </Grid>
                <Grid item xs={12}>
                    <EmailIcon />
                    <p className={classes.paragraf}>Mail</p>
                    <a className={classes.texts}>{user.email}</a>
                </Grid>
                <Grid item xs={12}>
                    <PhoneIcon />
                    <p className={classes.paragraf}>Numer Telefonu</p>
                    <a className={classes.texts}>{user.phoneNumber}</a>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserFlatInformation;
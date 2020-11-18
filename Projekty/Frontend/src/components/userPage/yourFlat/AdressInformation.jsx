import { Container, Grid } from '@material-ui/core';
import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faCity } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles((theme) => ({
    paragraf: {
        fontWeight: "bold",
        fontSize: "23px"
    },
    texts: {
        fontSize: "20px"
    }
}));

const AdressInformation = ({ user, flat }) => {
    const classes = useStyles();
    console.log(flat)
    const {
        area,
        flor,
    } = flat

    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "5vh", height: "70vh" }}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <PlaceIcon style={{ fontSize: 90 }} />
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faCity} />
                    <p className={classes.paragraf}>Miasto {area}</p>
                    <a className={classes.texts}></a>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <p className={classes.paragraf}>Mail</p>
                    <a className={classes.texts}>{user.email}</a>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <p className={classes.paragraf}>Numer Telefonu</p>
                    <a className={classes.texts}>{user.phoneNumber}</a>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdressInformation;
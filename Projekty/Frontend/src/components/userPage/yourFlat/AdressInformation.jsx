import { Container, Grid } from '@material-ui/core';
import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faCity, faSortNumericUp, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    paragraf: {
        fontWeight: "bold",
        fontSize: "23px"
    },
    texts: {
        fontSize: "19px"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const AdressInformation = ({ user, flat, adress }) => {

    const classes = useStyles();
    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "4vh", height: "100%" }}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <PlaceIcon style={{ fontSize: 90 }} />
                    <p className={classes.paragraf}>Adres</p>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faCity} />
                    <p className={classes.paragraf}>Miasto</p>
                    <a className={classes.texts}>{adress.town}</a>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faWindowClose} />
                    <p className={classes.paragraf}>Kod pocztowy</p>
                    <a className={classes.texts}>{adress.postalCode} </a>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <p className={classes.paragraf}>Ulica</p>
                    <a className={classes.texts}>{adress.street}</a>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faSortNumericUp} />
                    <p className={classes.paragraf}>Numer</p>
                    <a className={classes.texts}>{adress.number}</a>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdressInformation;
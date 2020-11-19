import { Container, Grid, Button } from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import { faPeopleArrows, faBuilding, faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SpaceBarIcon from '@material-ui/icons/SpaceBar';

const useStyles = makeStyles((theme) => ({
    paragraf: {
        fontWeight: "bold",
        fontSize: "23px"
    },
    texts: {
        fontSize: "19px"
    }
}));
const FlatInformation = ({ user, flat }) => {
    const classes = useStyles();
    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "4vh", height: "100%" }}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <HomeIcon style={{ fontSize: 90 }} />
                    <p className={classes.paragraf}>Mieszkanie</p>
                </Grid>
                <Grid item xs={12}>
                    <SpaceBarIcon />
                    <p className={classes.paragraf} style={{ marginBottom: "1vh" }}>Powierzchnia</p>
                    <a className={classes.texts}>{flat.area} m<sup>2</sup></a>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faBuilding} />
                    <p className={classes.paragraf}>Piętro</p>
                    <a className={classes.texts}>{flat.flor}</a>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faPersonBooth} />
                    <p className={classes.paragraf}>Ilość pokoi</p>
                    <a className={classes.texts}>{flat.rooms}</a>
                </Grid>
                <Grid item xs={12}>
                    <FontAwesomeIcon icon={faPeopleArrows} />
                    <p className={classes.paragraf}>Mieszkańcy</p>
                    <a className={classes.texts}>{flat.peopleInFlat}</a>
                </Grid>
                <Grid item xs={12}>
                    <LocalFloristIcon />
                    <p className={classes.paragraf}>Balkon</p>
                    <a className={classes.texts}>{flat.isBalcony ? <a>Tak</a> : <a>Nie</a>}</a>
                </Grid>
                <Grid item xs={12}>
                    <p> <Button color="primary" variant="contained">Edytuj</Button></p>
                </Grid>
            </Grid>

        </Container>
    );
};

export default FlatInformation;
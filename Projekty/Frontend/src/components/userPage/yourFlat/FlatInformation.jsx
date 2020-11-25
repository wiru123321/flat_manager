import { Container, Grid, Button, Backdrop } from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import { faPeopleArrows, faBuilding, faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import EditFlatInfo from "./EditFlatInfo";
import { useDispatch } from "react-redux"
import { updateUserFlat } from "../../../features/userInformationSlice/userInformationSlice";

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
const FlatInformation = ({ user, flat, handleFlatChange, handleBalconyChange }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        dispatch(updateUserFlat(flat));
        setOpen(false);
    };
    const btnHandlerBack = () => {
        setOpen(false);
    }
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "4vh", height: "100%" }}>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <HomeIcon style={{ fontSize: 90 }} />
                        <p className={classes.paragraf}>Mieszkanie</p>
                    </Grid>
                    <Grid item xs={12}>
                        <SpaceBarIcon />
                        <p className={classes.paragraf} style={{ marginBottom: "1vh" }}>Powierzchnia</p>
                        <p className={classes.texts}>{flat.area} m<sup>2</sup></p>
                    </Grid>
                    <Grid item xs={12}>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p className={classes.paragraf}>Piętro</p>
                        <p className={classes.texts}>{flat.flor}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <FontAwesomeIcon icon={faPersonBooth} />
                        <p className={classes.paragraf}>Ilość pokoi</p>
                        <p className={classes.texts}>{flat.rooms}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <FontAwesomeIcon icon={faPeopleArrows} />
                        <p className={classes.paragraf}>Mieszkańcy</p>
                        <p className={classes.texts}>{flat.peopleInFlat}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <LocalFloristIcon />
                        <p className={classes.paragraf}>Balkon</p>
                        <p className={classes.texts}>{flat.isBalcony ? <span>Tak</span> : <span>Nie</span>}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p> <Button color="primary" variant="contained" onClick={handleToggle}>Edytuj</Button></p>
                    </Grid>
                </Grid>

            </Container>
            <Backdrop className={classes.backdrop} open={open}>
                <EditFlatInfo flat={flat} handleChange={handleFlatChange} handleClose={handleClose} btnHandlerBack={btnHandlerBack} handleBalconyChange={handleBalconyChange} />
            </Backdrop>
        </>
    );
};

export default FlatInformation;
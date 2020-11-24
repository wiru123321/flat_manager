import { Container, Grid, Button, Backdrop } from '@material-ui/core';
import React from 'react';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';
import EditUserInfo from "./EditUserInfo";
import { useDispatch } from "react-redux"
import { updateUserInfo } from "../../../features/userInformationSlice/userInformationSlice";



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
const UserFlatInformation = ({ user, handleChange }) => {
    const dispatch = useDispatch();

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        dispatch(updateUserInfo(user));
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
                        <ContactsIcon style={{ fontSize: 90 }} />
                        <p className={classes.paragraf}>Dane</p>
                    </Grid>
                    <Grid item xs={12}>
                        <AccountCircleIcon />
                        <p className={classes.paragraf}>Imie i Nazwisko</p>
                        <p className={classes.texts}>{user.name} {user.surname}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <EmailIcon />
                        <p className={classes.paragraf}>Mail</p>
                        <p className={classes.texts}>{user.email}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <PhoneIcon />
                        <p className={classes.paragraf}>Numer Telefonu</p>
                        <p className={classes.texts}>{user.phoneNumber}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p> <Button color="primary" variant="contained" onClick={handleToggle}>Edytuj</Button></p>
                    </Grid>
                </Grid>
            </Container>
            <Backdrop className={classes.backdrop} open={open}>
                <EditUserInfo user={user} handleChange={handleChange} handleClose={handleClose} btnHandlerBack={btnHandlerBack} />
            </Backdrop>
        </>
    );
};

export default UserFlatInformation;
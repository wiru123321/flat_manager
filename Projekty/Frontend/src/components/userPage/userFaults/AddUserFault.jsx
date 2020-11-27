import { Container, TextareaAutosize, Grid, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addFault, fetchActiveFaults } from "../../../features/userFaultsSlice/userFaultSlice";

const AddUserFault = () => {
    const dispatch = useDispatch();
    const [faultState, setFaultState] = useState({
        describe: "",
        isActive: true,
        title: "",
    });

    const handleChange = (event) => {
        setFaultState({
            ...faultState,
            [event.target.name]: event.target.value,
        });
    };
    const handleClick = (event) => {
        console.log(faultState)
        dispatch(addFault(faultState));
        dispatch(fetchActiveFaults())
        setFaultState({
            ...faultState,
            describe: "",
            title: "",
        });
    };

    return (
        <Container style={{ width: "100%", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "4vh", height: "100%" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <p style={{ fontWeight: "bold", fontSize: "25px" }}>Uzupełnij formularz aby dodać zgłoszenie.</p>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Tytuł zgłoszenia" name="title" onChange={handleChange} value={faultState.title} />
                </Grid>
                <Grid item xs={12}>
                    <TextareaAutosize aria-label="empty textarea" placeholder="Opis zgłoszenia" style={{ width: "25%" }} name="describe" onChange={handleChange} value={faultState.describe} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleClick}>Zgłoś</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddUserFault;
import { Container, TextareaAutosize, Grid, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addAnnoncement } from "../../../features/announcementsSlice/announcementsSlice";

const AddAnnouncements = () => {
    const dispatch = useDispatch();
    const now = new Date();
    const currentMonth = (now.getMonth() + 1).toString();
    const currentDay = (now.getDate()).toString();
    const year = now.getFullYear();
    const dataToSubmit = year + "-" + currentMonth + "-" + currentDay + "T00:00:01";
    const [announcementState, setAnnouncementState] = useState({
        adminMessage: "",
        isActive: true,
        title: "",
        data: dataToSubmit,
    });

    const handleChange = (event) => {
        setAnnouncementState({
            ...announcementState,
            [event.target.name]: event.target.value,
        });
    };

    const handleClick = () => {
        console.log(announcementState)
        dispatch(addAnnoncement(announcementState));
    };

    return (
        <Container style={{ justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "4vh", height: "100%" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <p style={{ fontWeight: "bold", fontSize: "25px" }}>Uzupełnij formularz aby dodać ogłoszenie.</p>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Tytuł ogłoszenia" name="title" onChange={handleChange} value={announcementState.title} />
                </Grid>
                <Grid item xs={12}>
                    <TextareaAutosize aria-label="empty textarea" placeholder="Opis ogłoszenia" style={{ width: "25%" }} name="adminMessage" onChange={handleChange} value={announcementState.adminMessage} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleClick}>Dodaj ogłoszenie</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddAnnouncements;
import React from 'react';
import { Grid, Paper, Button } from "@material-ui/core";
import InputData from "../../adminPage/addUserFrom/InputData";

const EditAddress = ({ user, handleChange, handleClose, btnHandlerBack }) => {
    return (
        <Grid
            container
            justify="center"
        >
            <Paper elevation={8} style={{ width: "40vw", height: "40vh", marginTop: "5vh" }}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    style={{ marginTop: "5vh" }}
                >
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        style={{ width: "27vw" }}>
                        <Grid item xs={6}>
                            <InputData
                                onChangeHandler={handleChange}
                                name={"name"}
                                value={user.name}
                                label={"Edytuj imię"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputData
                                onChangeHandler={handleChange}
                                name={"surname"}
                                value={user.surname}
                                label={"Edytuj nazwisko"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        style={{ width: "27vw" }}>
                        <Grid item xs={6}>
                            <InputData
                                onChangeHandler={handleChange}
                                name={"email"}
                                value={user.email}
                                label={"Edytuj maila"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputData
                                onChangeHandler={handleChange}
                                name={"phoneNumber"}
                                value={user.phoneNumber}
                                label={"Edytuj numer telefonu"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        style={{ width: "27vw" }}>
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                            <p>
                                <Button onClick={handleClose} variant="contained" color="primary" >
                                    Zatwierdź
                                </Button>
                            </p>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                            <p>
                                <Button onClick={btnHandlerBack} variant="contained" color="secondary">
                                    Powrót
                                </Button>
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default EditAddress;
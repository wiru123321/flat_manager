import React from 'react';
import { Grid, Paper, Checkbox, FormControlLabel, Button } from "@material-ui/core";
import InputData from "../../adminPage/addUserFrom/InputData";

const EditFlatInfo = ({ flat, handleChange, handleClose, btnHandlerBack, handleBalconyChange }) => {
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
                                name={"area"}
                                value={flat.area}
                                label={"Edytuj powierzchnie"}
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
                                name={"peopleInFlat"}
                                value={flat.peopleInFlat}
                                label={"Edytuj ilość osób"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputData
                                onChangeHandler={handleChange}
                                name={"rooms"}
                                value={flat.rooms}
                                label={"Edytuj ilośc pokoi"}
                            />
                        </Grid>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="isBalcony"
                                    checked={flat.isBalcony}
                                    onChange={handleBalconyChange}
                                    color="primary"
                                />
                            }
                            label="Mieszkanie z balkonem"
                            style={{ marginBottom: "1vh" }}
                        />
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        style={{ width: "27vw" }}>
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                            <a>
                                <Button onClick={handleClose} variant="contained" color="primary" >
                                    Zatwierdź
                                </Button>
                            </a>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "center" }}>
                            <a>
                                <Button onClick={btnHandlerBack} variant="contained" color="secondary">
                                    Powrót
                                </Button>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default EditFlatInfo;
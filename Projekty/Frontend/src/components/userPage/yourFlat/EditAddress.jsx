import React from 'react';
import { Grid, Paper, Checkbox, FormControlLabel } from "@material-ui/core";
import InputData from "../../adminPage/addUserFrom/InputData";

const EditAddress = ({ user }) => {
    const [open, setOpen] = React.useState("tak");

    const handleAreaChange = (event) => {
        setOpen(event.target.value);
    }
    return (
        <Grid
            container
            justify="center"
        >
            <Paper elevation={8} style={{ width: "40vw", height: "50vh", marginTop: "3vh" }}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                >
                    <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        style={{ width: "25vw" }}>
                        <Grid item xs={6}>
                            <InputData
                                onChangeHandler={handleAreaChange}
                                value={open}
                                label={"Wprowadź metraż"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputData
                                onChangeHandler={handleAreaChange}
                                value={open}
                                label={"Wprowadź piętro"}
                            />
                        </Grid>
                    </Grid>
                    {/* <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        style={{ width: "25vw" }}>
                        <Grid item xs={6}>
                            <InputData
                                //onChangeHandler={handlePeopleInFlatChange}
                                value={user.email}
                                label={"Wprowadź ilość osób"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputData
                                //onChangeHandler={handleRoomsChange}
                                value={user.phoneNumber}
                                label={"Wprowadź ilośc pokoi"}
                            />
                        </Grid>
                    </Grid> */}
                    {/* <FormControlLabel
                        control={
                            <Checkbox
                                checked="true"
                                //onChange={handleIsBalconyChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Mieszkanie z balkonem"
                    /> */}
                </Grid>
            </Paper>
        </Grid>
    );
};

export default EditAddress;
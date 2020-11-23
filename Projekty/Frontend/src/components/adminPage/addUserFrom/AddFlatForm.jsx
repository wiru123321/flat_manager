import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import InputData from "./InputData";
import { Grid, Paper, Checkbox, FormControlLabel } from '@material-ui/core';
import {
  selectAll,
  setArea,
  setFlor,
  setPeopleInFlat,
  setRooms,
  setIsBalcony,
  setStreet,
  setNumber,
  setTown,
  setPostalCode,
} from "../../../features/addUserSlice/addUserSlice";

const AddFlatForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAll);
  const {
    area,
    flor,
    peopleInFlat,
    rooms,
    isBalcony,
    town,
    postalCode,
    street,
    number,
  } = user

  const handleAreaChange = (event) =>
    dispatch(setArea(event.target.value));
  const handleFlorChange = (event) =>
    dispatch(setFlor(event.target.value));
  const handlePeopleInFlatChange = (event) =>
    dispatch(setPeopleInFlat(event.target.value));
  const handleRoomsChange = (event) =>
    dispatch(setRooms(event.target.value));
  const handleIsBalconyChange = (event) =>
    dispatch(setIsBalcony(event.target.value));
  const handleStreetChange = (event) =>
    dispatch(setStreet(event.target.value));
  const handleNumberChange = (event) =>
    dispatch(setNumber(event.target.value));
  const handleTownChange = (event) =>
    dispatch(setTown(event.target.value));
  const handlePostalCodeChange = (event) =>
    dispatch(setPostalCode(event.target.value));
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
                value={area}
                label={"Wprowadź metraż"}
              />
            </Grid>
            <Grid item xs={6}>
              <InputData
                onChangeHandler={handleFlorChange}
                value={flor}
                label={"Wprowadź piętro"}
              />
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ width: "25vw" }}>
            <Grid item xs={6}>
              <InputData
                onChangeHandler={handlePeopleInFlatChange}
                value={peopleInFlat}
                label={"Wprowadź ilość osób"}
              />
            </Grid>
            <Grid item xs={6}>
              <InputData
                onChangeHandler={handleRoomsChange}
                value={rooms}
                label={"Wprowadź ilośc pokoi"}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={isBalcony}
                onChange={handleIsBalconyChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Mieszkanie z balkonem"
          />
          <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ width: "25vw", marginTop: "3vh" }}>
            <Grid item xs={6}>
              <InputData
                onChangeHandler={handleTownChange}
                value={town}
                label={"Wprowadź miasto"}
              />
            </Grid>
            <Grid item xs={6}>
              <InputData
                onChangeHandler={handlePostalCodeChange}
                value={postalCode}
                label={"Wprowadź kod pocztowy"}
              />
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ width: "25vw" }}>
            <Grid item xs={6}>
              <InputData
                onChangeHandler={handleStreetChange}
                value={street}
                label={"Wprowadź ulice"}
              />
            </Grid>
            <Grid item xs={6}>
              <InputData
                onChangeHandler={handleNumberChange}
                value={number}
                label={"Wprowadź numer miszkania"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AddFlatForm;
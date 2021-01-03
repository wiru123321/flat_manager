import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TextValidator } from 'react-material-ui-form-validator';
import { Grid, Select, MenuItem, InputLabel, Paper } from '@material-ui/core';
import {
  selectAll, setFirstname,
  setLastname,
  setEmail,
  setLogin,
  setPhoneNumber,
  setPassword,
  setRePassword,
  setRole,
} from "../../../features/addUserSlice/addUserSlice";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAll);
  const {
    email,
    login,
    phoneNumber,
    password,
    rePassword,
    firstname,
    lastname,
    role,
  } = user

  const handleFirstnameChange = (event) =>
    dispatch(setFirstname(event.target.value));
  const handleLastnameChange = (event) =>
    dispatch(setLastname(event.target.value));
  const handleEmailChange = (event) =>
    dispatch(setEmail(event.target.value));
  const handleLoginChange = (event) =>
    dispatch(setLogin(event.target.value));
  const handlePhoneNumberChange = (event) =>
    dispatch(setPhoneNumber(event.target.value));
  const handlePasswordChange = (event) =>
    dispatch(setPassword(event.target.value));
  const handleRePasswordChange = (event) =>
    dispatch(setRePassword(event.target.value));
  return (
    <Grid
      container
      justify="center"
    >
      <Paper elevation={8} style={{ width: "40vw", height: "57vh", marginTop: "3vh" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Grid container
            direction="column"
            justify="space-evenly"
            alignItems="center"
            style={{ width: "35vw", marginBottom: "3vh", marginTop: "2vh" }}>
            <Grid item xs={12} >
              <p style={{ fontWeight: 'bold', fontSize: "22px" }}>Wprowadź dane urzytkownika</p>
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ width: "35vw", marginBottom: "3vh" }}>
            <Grid item xs={5} >
              <TextValidator id="outlined-basic" label="Wprowadź imie" variant="outlined"
                onChange={handleFirstnameChange} value={firstname} validators={['required']} errorMessages={['this field is required']} />
            </Grid>
            <Grid item xs={5}>
              <TextValidator id="outlined-basic" label="Wprowadź nazwisko" variant="outlined"
                onChange={handleLastnameChange} value={lastname} validators={['required']} errorMessages={['this field is required']} />
            </Grid>
          </Grid>
          <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ width: "35vw", marginBottom: "3vh" }}>
            <Grid item xs={5}>
              <TextValidator id="outlined-basic" label="Wprowadź email" variant="outlined"
                onChange={handleEmailChange} value={email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']} />
            </Grid>
            <Grid item xs={5}>
              <TextValidator id="outlined-basic" label="Wprowadź telefon" variant="outlined"
                onChange={handlePhoneNumberChange} value={phoneNumber} validators={['required', "minStringLength:9", "maxStringLength:9"]} errorMessages={['this field is required', 'Numer posiada 9 liczb']} />
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: "3vh" }}>
            <TextValidator id="outlined-basic" label="Wprowadź login" variant="outlined" onChange={handleLoginChange} value={login} validators={['required']} errorMessages={['this field is required']} />
          </Grid>
          <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ width: "35vw", marginBottom: "3vh" }}>
            <Grid item xs={5}>
              <TextValidator id="outlined-basic" label="Wprowadź hasło" type="password" variant="outlined" onChange={handlePasswordChange} value={password} validators={['required']} errorMessages={['this field is required']} />
            </Grid>
            <Grid item xs={5} >
              <TextValidator id="outlined-basic" label="Powtórz hasło" type="password" variant="outlined" onChange={handleRePasswordChange} value={rePassword} validators={['isPasswordMatch', 'required']} errorMessages={['password mismatch', 'this field is required']} />
            </Grid>

          </Grid>

          <InputLabel>Rola</InputLabel>
          <Select
            required
            onChange={(event) => dispatch(setRole(event.target.value))}
            value={role}
            style={{ width: '10vw' }}
          >
            <MenuItem value="EMPLOYEE">Mieszkaniec</MenuItem>
            <MenuItem value="ADMIN">Administrator</MenuItem>
          </Select>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AddUserForm;
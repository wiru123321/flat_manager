import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import InputData from "./InputData";
import {addUser} from "../../../features/authentication/authSlice";
import { Grid,Select,MenuItem,InputLabel, Button, Paper } from '@material-ui/core';
import {selectAll,setFirstname,
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
    }= user

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
    function submit(event) {
        event.preventDefault();
        let user = {
          email:email,
          login:login,
          phoneNumber:phoneNumber,
          password:password,
          firstname:firstname,
          lastname:lastname,
          roleDTO: { name: role},
        };
        console.log("zatwierdzono");
        console.log(user);
          //dispatch(addUser(user));
      }
    return (
            <Grid
            container
            justify="center"
          >
              <Paper elevation={8} style={{width:"40vw",height:"50vh",marginTop:"3vh"}}>
            <Grid
          container
          direction="column"
          alignItems="center"
        >
              <Grid container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    style={{width:"25vw"}}>
              <Grid item xs={6}>
            <InputData
            onChangeHandler={handleFirstnameChange}
            value={firstname}
            label={"Wprowadź imie"}
            />
            </Grid>
            <Grid item xs={6}>
             <InputData
            onChangeHandler={handleLastnameChange}
            value={lastname}
            label={"Wprowadź nazwisko"}
            />
            </Grid>
            </Grid>
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                  style={{width:"25vw"}}>
            <Grid item xs={6}>
             <InputData
            onChangeHandler={handleEmailChange}
            value={email}
            label={"Wprowadź email"}
            />
            </Grid>
            <Grid item xs={6}>
             <InputData
            onChangeHandler={handlePhoneNumberChange}
            value={phoneNumber}
            label={"Wprowadź telefon"}
            />
            </Grid>
            </Grid>
            
            <InputData
            onChangeHandler={handleLoginChange}
            value={login}
            label={"Wprowadź login"}
            />
            <InputData
            onChangeHandler={handlePasswordChange}
            value={password}
            label={"Wprowadź hasło"}
            />
            <InputData
            onChangeHandler={handleRePasswordChange}
            value={rePassword}
            label={"Powtórz hasło"}
            />
            <InputLabel>Rola</InputLabel>
            <Select
                required
                onChange={(event) => dispatch(setRole(event.target.value))}
                value={role}
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
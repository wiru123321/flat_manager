import React, { useState } from 'react';
import { Container, Grid } from "@material-ui/core"
import UserFlatInformation from "./UserFlatInformation";
import FlatInformation from "./FlatInformation";
import AdressInformation from "./AdressInformation";

const YourFlat = ({ user, flat, adress }) => {
  const [userState, setUserState] = useState({
    email: user.email,
    name: user.name,
    surname: user.surname,
    phoneNumber: user.phoneNumber,
  });
  const [flatState, setFlatState] = useState({
    area: flat.area,
    flor: flat.flor,
    peopleInFlat: flat.peopleInFlat,
    rooms: flat.rooms,
    isBalcony: flat.isBalcony,
  });
  const handleUserChange = (event) => {
    setUserState({
      ...userState,
      [event.target.name]: event.target.value,
    });
  };
  const handleFlatChange = (event) => {
    setFlatState({
      ...flatState,
      [event.target.name]: event.target.value,
    });
  };
  const handleBalconyChange = (event) => {
    setFlatState({
      ...flatState,
      isBalcony: !flatState.isBalcony,
    });
    console.log(flatState.isBalcony);
  }
  return (
    <Container style={{ height: "89.6vh", margin: "0", padding: "0", minWidth: "98vw" }}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <FlatInformation user={userState} flat={flatState} adress={adress} handleFlatChange={handleFlatChange} handleBalconyChange={handleBalconyChange} />
        </Grid>
        <Grid item md={4} xs={12}>
          <UserFlatInformation user={userState} handleChange={handleUserChange} />
        </Grid>
        <Grid item md={4} xs={12}>
          <AdressInformation user={userState} flat={flatState} adress={adress} />
        </Grid>
      </Grid>
    </Container>
  )
};

export default YourFlat;
import React, { useEffect } from 'react';
import { Button, Container, Grid, Paper } from "@material-ui/core"
import { fetchUser, selectUserInfo } from "../../../features/userInformationSlice/userInformationSlice";
import { useDispatch, useSelector } from "react-redux"
import UserFlatInformation from "./UserFlatInformation";
import FlatInformation from "./FlatInformation";
import AdressInformation from "./AdressInformation";

const YourFlat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());

  }, []);
  const user = useSelector(selectUserInfo);
  console.log(user)
  const flat = user.flatsDTO;
  return (
    <Container style={{ height: "89.6vh", margin: "0", padding: "0", minWidth: "98vw" }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper><FlatInformation user={user} flat={flat} /></Paper>
        </Grid>
        <Grid item xs>
          <Paper><UserFlatInformation user={user} flat={flat} /></Paper>
        </Grid>
        <Grid item xs>
          <Paper><AdressInformation user={user} flat={flat} /></Paper>
        </Grid>
      </Grid>
    </Container>
  )
};

export default YourFlat;
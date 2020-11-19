import React, { useEffect } from 'react';
import { Container, Grid } from "@material-ui/core"
import { fetchUser, selectUserInfo, selectFlat, selectAdress } from "../../../features/userInformationSlice/userInformationSlice";
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
  const flat = useSelector(selectFlat);
  const adress = useSelector(selectAdress);
  return (
    <Container style={{ height: "89.6vh", margin: "0", padding: "0", minWidth: "98vw" }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <FlatInformation user={user} flat={flat} adress={adress} />
        </Grid>
        <Grid item xs>
          <UserFlatInformation user={user} flat={flat} adress={adress} />
        </Grid>
        <Grid item xs>
          <AdressInformation user={user} flat={flat} adress={adress} />
        </Grid>
      </Grid>
    </Container>
  )
};

export default YourFlat;
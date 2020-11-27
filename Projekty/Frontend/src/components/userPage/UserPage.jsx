import React from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import MainUserPage from "./mainUserPage/MainUserPage";
import WrapAllInformation from "./yourFlat/WrapAllInformation";
import UserNavbar from "./userNavbar/UserNavbar";
import { Container } from "@material-ui/core";
import CheckBills from "./checkBills/CheckBills";
import UserAnnouncements from "./userAnnouncements/UserAnnouncements";
import FaultsMenu from "./userFaults/FaultsMenu";

const UserPage = () => {
  return (
    <Container style={{ width: "100vw", margin: "0", padding: "0", minWidth: "100vw" }}>
      <UserNavbar />
      <HashRouter basename="/userPage/">
        <Switch>
          <Route path="/" exact component={MainUserPage} />
          <Route path="/yourFlat" component={WrapAllInformation} />
          <Route path="/checkBills" component={CheckBills} />
          <Route path="/userAnnouncements" component={UserAnnouncements} />
          <Route path="/userFaults" component={FaultsMenu} />
        </Switch>
      </HashRouter>
    </Container>
  );
};

export default UserPage;

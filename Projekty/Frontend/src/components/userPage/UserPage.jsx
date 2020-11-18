import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import MainUserPage from "./mainUserPage/MainUserPage";
import YourFlat from "./yourFlat/YourFlat";
import UserNavbar from "./userNavbar/UserNavbar";
import { Container } from "@material-ui/core";

const UserPage = () => {
  return (
    <Container style={{ width: "100vw", margin: "0", padding: "0" }}>
      <UserNavbar />
      <Container style={{ width: "100vw", margin: "0", padding: "0" }}>
        <HashRouter basename="/userPage/">
          <Switch>
            <Route path="/" exact component={MainUserPage} />
            <Route path="/yourFlat" exact component={YourFlat} />
          </Switch>
        </HashRouter>
      </Container>
    </Container>
  );
};

export default UserPage;

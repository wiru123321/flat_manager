import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import MainUserPage from "./mainUserPage/MainUserPage";
import YourFlat from "./yourFlat/YourFlat";
import UserNavbar from "./userNavbar/UserNavbar";

const UserPage = () => {
  return (
    <div>
      <UserNavbar/>
      <HashRouter basename="/userPage/">
        <Switch>
          <Route path="/" exact component={MainUserPage} />
          <Route path="/yourFlat" exact component={YourFlat} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default UserPage;

import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import MainUserPage from "./mainUserPage/MainUserPage";

const UserPage = () => {
  return (
    <div>
      <HashRouter basename="/userPage/">
        <Switch>
          <Route path="/" exact component={MainUserPage} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default UserPage;

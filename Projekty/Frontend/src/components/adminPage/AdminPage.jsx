import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Stepper from "./addUserFrom/Stepper";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import UserAccManager from "./userAccManager/UserAccManager";
import UsersPayments from "./userPayments/UsersPayments";
import ManagerUserAcc from "./manageUserAcc/ManageUserAcc";
import Annoucements from "./announcements/Announcements";

const AdminPage = () => {


  return (
    <div>
      <AdminNavbar />
      <HashRouter basename="/adminPage">
        <Switch>
          <Route path="/addUserAcc" component={Stepper} />
          <Route path="/usersPayments" component={UsersPayments} />
          <Route path="/managerUserAcc" component={ManagerUserAcc} />
          <Route path="/annoucements" component={Annoucements} />
          <Route path="/" exact component={UserAccManager} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default AdminPage;

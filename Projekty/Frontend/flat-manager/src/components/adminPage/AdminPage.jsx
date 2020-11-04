import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainAdminPage from "./addUserFrom/AddUserForm";
import Stepper from "./addUserFrom/Stepper";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import UserAccManager from "./userAccManager/UserAccManager";

const AdminPage = () => {
  const dispatch = useDispatch();


  return (
    <div>
      <AdminNavbar/>
      <HashRouter basename="/adminPage">
        <Switch>
          <Route path="/addUserAcc" component={Stepper} />
          <Route path="/" exact component={UserAccManager} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default AdminPage;

import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainAdminPage from "./mainAdminPage/MainAdminPage";

const AdminPage = () => {
  const dispatch = useDispatch();


  return (
    <div style={{ height: "100%", backgroundColor: "#708090" }}>
      <HashRouter basename="/adminPage/">
        <Switch>
          <Route path="/" exact component={MainAdminPage} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default AdminPage;

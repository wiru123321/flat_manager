import React from 'react';
import { useDispatch } from "react-redux";
import {Button} from "@material-ui/core";
import { logout } from "../../../features/authentication/authSlice";

const MainAdminPage = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
      };
    return (
        <div>
            <a>hello Admin</a>
            <Button onClick={handleLogout} href="/login">Logout</Button>
        </div>
    );
};

export default MainAdminPage;
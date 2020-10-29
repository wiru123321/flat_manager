import React from 'react';
import { useDispatch } from "react-redux";
import {Button} from "@material-ui/core";
import { logout } from "../../../features/authentication/authSlice";


const MainUserPage = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
      };

    return (
        <div>
            <a>hello user</a>
            <Button onClick={handleLogout} href="/login">Logout</Button>
        </div>
    );
};

export default MainUserPage;
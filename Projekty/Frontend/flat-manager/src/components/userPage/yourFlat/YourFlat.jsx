import React from 'react';
import {Button} from "@material-ui/core"
import {fetchUsers} from "../../../features/userInformationSlice/userInformationSlice";
import {useDispatch} from "react-redux"

const YourFlat = () => {
    const dispatch = useDispatch();
    const btnHandler = (event) =>{
        dispatch(fetchUsers())
    }
    return (
        <div>
            {console.log(localStorage.getItem("login"))}
            <Button onClick={btnHandler}>asdasd</Button>
        </div>
    );
};

export default YourFlat;
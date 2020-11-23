import React, { useEffect } from 'react';
import { fetchUser, selectUserInfo, selectFlat, selectAdress } from "../../../features/userInformationSlice/userInformationSlice";
import { useDispatch, useSelector } from "react-redux"
import YourFlat from "./YourFlat";
import { CircularProgress } from "@material-ui/core"

const WrapAllInformation = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUserInfo);
    const flat = useSelector(selectFlat);
    const adress = useSelector(selectAdress);
    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <>{user.name ? <YourFlat user={user} flat={flat} adress={adress} /> : <CircularProgress />}</>
    );
};

export default WrapAllInformation;
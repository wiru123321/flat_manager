import React, { useEffect, useState } from 'react';
import { fetchUser, selectUserInfo, selectFlat, selectAdress } from "../../../features/userInformationSlice/userInformationSlice";
import { useDispatch, useSelector } from "react-redux"
import YourFlat from "./YourFlat";

const WrapAllInformation = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUserInfo);
    const flat = useSelector(selectFlat);
    const adress = useSelector(selectAdress);
    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <>{user.name ? <YourFlat user={user} flat={flat} adress={adress} /> : <a>Ładowanie</a>}</>
    );
};

export default WrapAllInformation;
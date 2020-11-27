import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
    ActiveFaults: [],
};

export const userFaultsSlice = createSlice({
    name: "userFaults",
    initialState,
    reducers: {
        setActiveFaults: (state, action) => {
            state.ActiveFaults = action.payload;
        },
    }
});

export const {
    setActiveFaults,
} = userFaultsSlice.actions;

export const selectActiveFaults = (state) => state.userFaults.ActiveFaults;

export const addFault = (userFault) => async (dispatch) => {
    try {
        await axios.post(API_URL + "/u/addFault/" + localStorage.getItem("login"), userFault, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const fetchActiveFaults = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL + "/e/getActiveFaults/" + localStorage.getItem("login"), {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        dispatch(setActiveFaults(response.data));
    } catch (error) {
        console.log(error);
    }
};


export default userFaultsSlice.reducer;

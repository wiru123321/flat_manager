import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
    ActiveFaults: [],
    DisActiveFaults: [],
};

export const userFaultsSlice = createSlice({
    name: "userFaults",
    initialState,
    reducers: {
        setActiveFaults: (state, action) => {
            state.ActiveFaults = action.payload;
        },

        setDisActiveFaults: (state, action) => {
            state.DisActiveFaults = action.payload;
        },
    }
});

export const {
    setActiveFaults,
    setDisActiveFaults
} = userFaultsSlice.actions;

export const selectActiveFaults = (state) => state.userFaults.ActiveFaults;
export const selectDisActiveFaults = (state) => state.userFaults.DisActiveFaults;


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

export const fetchActiveFaultsByLogin = (login) => async (dispatch) => {
    try {
        const response = await axios.get(API_URL + "/e/getActiveFaults/" + login, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        dispatch(setActiveFaults(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const fetchActiveFaults = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL + "/e/getActiveFaults", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        dispatch(setActiveFaults(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const fetchDisActiveFaults = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL + "/e/getDisActiveFaults", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        dispatch(setDisActiveFaults(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const updateUserFault = (id, faults) => async (dispatch) => {
    try {
        await axios.put(API_URL + "/a/disactivateUserFault/" + id, faults, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    } catch (error) {
    }
};

export const deleteUserFault = (id) => async (dispatch) => {
    try {
        await axios.delete(API_URL + "/u/deleteUserFault/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    } catch (error) {
    }
};


export default userFaultsSlice.reducer;

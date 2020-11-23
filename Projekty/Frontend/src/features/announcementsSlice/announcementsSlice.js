import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
};

export const announcementsSlice = createSlice({
    name: "announcements",
    initialState,
    reducers: {
    },
});

export const {
} = announcementsSlice.actions;

export const selectAll = (state) => state.announcements;

export const addAnnoncement = (annoncement) => async (dispatch) => {
    try {
        await axios.post(API_URL + "/a/addAnnouncement", annoncement, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export default announcementsSlice.reducer;

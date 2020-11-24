import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
    announcements: [],
};

export const announcementsSlice = createSlice({
    name: "announcements",
    initialState,
    reducers: {
        setAnnouncements: (state, action) => {
            state.announcements = action.payload;
        },
    },
});

export const {
    setAnnouncements,
} = announcementsSlice.actions;

export const selectAnnouncement = (state) => state.announcements.announcements;

export const addAnnoncement = (announcement) => async (dispatch) => {
    try {
        await axios.post(API_URL + "/a/addAnnouncement", announcement, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const fetchAnnouncements = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL + "/e/announcement", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        dispatch(setAnnouncements(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const deleteAnnouncement = (index) => async (dispatch) => {
    try {
        await axios.delete(API_URL + `/a/deleteAnnouncement/${index}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        dispatch(fetchAnnouncements());
    } catch (error) {
    }
};

export default announcementsSlice.reducer;

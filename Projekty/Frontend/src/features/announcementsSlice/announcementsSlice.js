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

export const addAnnoncement = (announcement, alert) => async (dispatch) => {
    try {
        if (announcement.title && announcement.adminMessage) {
            await axios.post(API_URL + "/a/addAnnouncement", announcement, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            alert.success("Operacja przebiegła pomyślnie.");
        }
        else {
            alert.error("Błąd, prosze wprowadzić dane.");
        }

    } catch (error) {
        console.log(error);
        alert.error("Coś poszło źle.");
    }
};

export const fetchAnnouncements = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL + "/r/announcement", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        dispatch(setAnnouncements(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const deleteAnnouncement = (index, alert) => async (dispatch) => {
    try {
        await axios.delete(API_URL + `/a/deleteAnnouncement/${index}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        dispatch(fetchAnnouncements());
        alert.success("Operacja przebiegła pomyślnie.");
    } catch (error) {
        alert.error("Coś poszło źle.");
    }
};

export default announcementsSlice.reducer;

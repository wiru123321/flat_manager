import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
    users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {
    setUsers,
} = userSlice.actions;

export const selectUsers = (state) => state.user.users;

export const fetchUsers = () => async (dispatch) => {
    try {
      const response = await axios.get(API_URL +"/a/users", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(setUsers(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

export default userSlice.reducer;

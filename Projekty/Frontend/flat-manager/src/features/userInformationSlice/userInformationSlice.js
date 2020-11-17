import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
    userInfo: [],
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
}
});

export const {
    setUserInfo,
} = userInfoSlice.actions;

export const selectUserInfo = (state) => state.userInfo.userInfo;

export const fetchUsers = () => async (dispatch) => {
    try {
      const response = await axios.get(API_URL + "/u/getUsers/"+localStorage.getItem("login"), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(setUserInfo(response.data));
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

export default userInfoSlice.reducer;

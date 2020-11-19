import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
  userInfo: "",
  flat: "",
  adress: "",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.flat = action.payload.flatsDTO;
      state.adress = action.payload.flatsDTO.adressDTO;
    },
    setFlat: (state, action) => {
      state.flat = action.payload;
    },

  }
});

export const {
  setUserInfo,
} = userInfoSlice.actions;

export const selectUserInfo = (state) => state.userInfo.userInfo;
export const selectFlat = (state) => state.userInfo.flat;
export const selectAdress = (state) => state.userInfo.adress;


export const fetchUser = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL + "/u/getUsers/" + localStorage.getItem("login"), {
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

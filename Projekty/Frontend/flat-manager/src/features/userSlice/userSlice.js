import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
    users: [],
    water:"",
    rubbish:"",
    rent:"",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setWater: (state, action) => {
      state.water = action.payload;
    },
    setRubbish: (state, action) => {
      state.rubbish = action.payload;
    },
    setRent: (state, action) => {
      state.rent = action.payload;
    },
  },
});

export const {
    setUsers,
    setWater,
    setRubbish,
    setRent,
} = userSlice.actions;

export const selectUsers = (state) => state.user.users;
export const selectAll = (state) => state.user;

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

  export const updateUser = (addId, userAccount) => async (dispatch) => {
    try {
      await axios.put(API_URL + `/a/user/${addId}`, userAccount, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(fetchUsers());
    } catch (error) {
    }
  };

export default userSlice.reducer;

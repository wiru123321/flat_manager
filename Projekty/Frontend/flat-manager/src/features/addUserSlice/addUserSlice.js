import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    login: "",
    phoneNumber: "",
    password: "",
    rePassword: "",
    role: "",
    area:"",
    flor: "",
    peopleInFlat: "",
    rooms: "",
    isBalcony: false,
    isActive: "",
    town:"",
    postalCode: "",
    street: "",
    number: "",
};

export const addUserSlice = createSlice({
  name: "addUser",
  initialState,
  reducers: {
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
        state.lastname = action.payload;
      },
      setEmail: (state, action) => {
        state.email = action.payload;
      },
      setLogin: (state, action) => {
        state.login = action.payload;
      },
      setPhoneNumber: (state, action) => {
        state.phoneNumber = action.payload;
      },
      setPassword: (state, action) => {
        state.password = action.payload;
      },
      setRePassword: (state, action) => {
        state.rePassword = action.payload;
      },
      setRole: (state, action) => {
        state.role = action.payload;
      },
      setArea: (state, action) => {
        state.area = action.payload;
      },
      setFlor: (state, action) => {
        state.flor = action.payload;
      },
      setPeopleInFlat: (state, action) => {
        state.peopleInFlat = action.payload;
      },
      setRooms: (state, action) => {
        state.rooms = action.payload;
      },
      setIsBalcony: (state, action) => {
        state.isBalcony = !state.isBalcony;
      },
      setIsActive: (state, action) => {
        state.isActive = action.payload;
      },
      setTown: (state, action) => {
        state.town = action.payload;
      },
      setPostalCode: (state, action) => {
        state.postalCode = action.payload;
      },
      setStreet: (state, action) => {
        state.street = action.payload;
      },
      setNumber: (state, action) => {
        state.number = action.payload;
      },
  },
});

export const {
    setFirstname,
    setLastname,
    setEmail,
    setLogin,
    setPhoneNumber,
    setPassword,
    setRePassword,
    setRole,
    setArea,
    setFlor,
    setPeopleInFlat,
    setRooms,
    setIsBalcony,
    setIsActive,
    setTown,
    setPostalCode,
    setStreet,
    setNumber,
} = addUserSlice.actions;

export const selectAll = (state) => state.addUser;

export const addUser = (userCration) => async (dispatch) => {
  try {
    await axios.post(API_URL + "/a/user", userCration, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default addUserSlice.reducer;

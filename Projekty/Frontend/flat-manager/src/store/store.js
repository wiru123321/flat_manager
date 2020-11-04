import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import addUserReducer from "../features/addUserSlice/addUserSlice.js";

export default configureStore({
  reducer: {
    auth: authReducer,
    addUser: addUserReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import addUserReducer from "../features/addUserSlice/addUserSlice.js";
import userReducer from "../features/userSlice/userSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    addUser: addUserReducer,
    user: userReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import addUserReducer from "../features/addUserSlice/addUserSlice.js";
import userReducer from "../features/userSlice/userSlice";
import userInfoReducer from "../features/userInformationSlice/userInformationSlice";
import announcementsReducer from "../features/announcementsSlice/announcementsSlice";
import userFaultsReducer from "../features/userFaultsSlice/userFaultSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    addUser: addUserReducer,
    user: userReducer,
    userInfo: userInfoReducer,
    announcements: announcementsReducer,
    userFaults: userFaultsReducer,
  },
});

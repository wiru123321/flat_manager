import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "../../services/LoginService";
import axios from "axios";

const API_URL = "http://localhost:8080";

const initialState = {
  success: false,
  failed: false,
  redirectTo: "",
  shouldRedirect: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRedirectAddress: (state, action) => {
      state.redirectTo = action.payload;
    },

    allowRedirect: (state, action) => {
      state.shouldRedirect = action.payload;
    },
    setFailed: (state, action) => {
      state.failed = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setRedirectAddress,
  allowRedirect,
  setFailed,
  setErrorMessage,
} = authSlice.actions;

export const selectAll = (state) => state.auth;

export const login = ({ login, password }) => {
  return async (dispatch) => {
    try {
      const response = await handleLogin({ login, password });
      const { token, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("login", login);
      if (role === "ADMIN") {
        dispatch(setRedirectAddress("/adminPage"));
      } else if (role === "EMPLOYEE") {
        dispatch(setRedirectAddress("/userPage"));
      }
      dispatch(allowRedirect(true));
      dispatch(setFailed(false));
      dispatch(setErrorMessage(""));
    } catch (error) {
      if (error.response) {
        if (error.response.status === 403) {
          dispatch(setFailed(true));
          dispatch(setErrorMessage("Nazwa użytkownika lub hasło jest niepoprawna."));
        } else {
          dispatch(setFailed(true));
          dispatch(setErrorMessage("Zalogowanie niemożliwe."));
        }
      } else {
        dispatch(setFailed(true));
        dispatch(setErrorMessage("Brak połączenia z serverem."));
      }
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("login");
    dispatch(setRedirectAddress("/login"));
    dispatch(allowRedirect(false));
  };
};

export default authSlice.reducer;

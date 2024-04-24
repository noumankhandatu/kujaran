// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.role = payload.role;
      state.accessToken = payload.token;
    },
    logout: (state) => {
      state.role = null;
      state.accessToken = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const reduxAccesstoken = (state) => state.auth.accessToken;
export const reduxRole = (state) => state.auth.role;

export default authSlice.reducer;

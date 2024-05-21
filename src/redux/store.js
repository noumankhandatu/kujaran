import { configureStore } from "@reduxjs/toolkit";
// slice import
import authReducer from "./slices/auth";
import extraslices from "./slices/extraslices";

// rtk query imports
import AuthApi from "./services/auth";
import SupervisorApi from "./services/supervisor-apis";
import RiderApi from "./services/rider";
import JudgeApi from "./services/judge";

const store = configureStore({
  reducer: {
    auth: authReducer,
    extraSlice: extraslices,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [SupervisorApi.reducerPath]: SupervisorApi.reducer,
    [RiderApi.reducerPath]: RiderApi.reducer,
    [JudgeApi.reducerPath]: JudgeApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      SupervisorApi.middleware,
      RiderApi.middleware,
      JudgeApi.middleware
    ),

  devTools: import.meta.env.APP_MODE !== "production",
});

export default store;

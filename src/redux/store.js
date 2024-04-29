import { configureStore } from "@reduxjs/toolkit";
// slice import
import authReducer from "./slices/auth";

// rtk query imports
import AuthApi from "./services/auth";
import SupervisorApi from "./services/supervisor-apis";
import RiderApi from "./services/rider";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [SupervisorApi.reducerPath]: SupervisorApi.reducer,
    [RiderApi.reducerPath]: RiderApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      SupervisorApi.middleware,
      RiderApi.middleware
    ),

  devTools: import.meta.env.APP_MODE !== "production",
});

export default store;

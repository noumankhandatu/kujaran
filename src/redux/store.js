import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./services/auth";
import authReducer from "./slices/auth";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthApi.middleware),
  devTools: import.meta.env.APP_MODE !== "production",
});

export default store;

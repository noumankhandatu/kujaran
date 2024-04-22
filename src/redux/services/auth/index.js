import { createApi } from "@reduxjs/toolkit/query/react";
import BaseURL from "../../../utils/config/baseUrl";

export const AuthApi = createApi({
  reducerPath: "api",
  baseQuery: BaseURL,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: "/user/signUp",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSignupMutation } = AuthApi;

export default AuthApi;

import { createApi } from "@reduxjs/toolkit/query/react";
import BaseURL from "../../../utils/config/baseUrl";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  tagTypes: ["AuthApi"],
  baseQuery: BaseURL,
  endpoints: (builder) => ({
    createStable: builder.mutation({
      query: (payload) => ({
        url: "/auth/rider/create/stable",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["AuthApi"],
    }),
    createHorse: builder.mutation({
      query: (payload) => ({
        url: "/auth/rider/horse/register",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["AuthApi"],
    }),
  }),
});

export const { useCreateStableMutation, useCreateHorseMutation } = AuthApi;

export default AuthApi;

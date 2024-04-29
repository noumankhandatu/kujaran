import { createApi } from "@reduxjs/toolkit/query/react";
import BaseURL from "../../../utils/config/baseUrl";

export const RiderApi = createApi({
  reducerPath: "RiderApi",
  tagTypes: ["RiderApi"],
  baseQuery: BaseURL,
  endpoints: (builder) => ({
    getRider: builder.query({
      query: () => ({
        url: "/users/rider/me",
        method: "GET",
      }),
    }),
    getAllEventsRider: builder.query({
      query: () => ({
        url: "/supervisor/events/getAll",
        method: "GET",
      }),
      providesTags: ["SupervisorApi"],
    }),
  }),
});

export const { useGetRiderQuery, useGetAllEventsRiderQuery } = RiderApi;

export default RiderApi;

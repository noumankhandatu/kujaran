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
      providesTags: ["SupervisorApi"],
    }),
    getAllEventsRider: builder.query({
      query: () => ({
        url: "/supervisor/events/getAll",
        method: "GET",
      }),
      providesTags: ["SupervisorApi"],
    }),
    riderAllClasses: builder.query({
      query: () => ({
        url: "/competition/classes/getAll",
        method: "GET",
      }),
      providesTags: ["SupervisorApi"],
    }),
    getEventById: builder.mutation({
      query: (id) => ({
        url: `/supervisor/events/getById/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["SupervisorApi"],
    }),
    createRegistration: builder.mutation({
      query: (payload) => ({
        url: `/create/registrations`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["SupervisorApi"],
    }),
  }),
});

export const {
  useGetRiderQuery,
  useGetAllEventsRiderQuery,
  useRiderAllClassesQuery,
  useGetEventByIdMutation,
  useCreateRegistrationMutation,
} = RiderApi;

export default RiderApi;

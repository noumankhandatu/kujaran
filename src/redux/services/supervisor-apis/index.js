import { createApi } from "@reduxjs/toolkit/query/react";
import BaseURL from "../../../utils/config/baseUrl";

export const SupervisorApi = createApi({
  reducerPath: "SupervisorApi",
  tagTypes: ["SupervisorApi"],
  baseQuery: BaseURL,
  endpoints: (builder) => ({
    // profile
    getUser: builder.query({
      query: () => ({
        url: "/users/rider/me",
        method: "GET",
      }),
    }),
    // event
    createEvent: builder.mutation({
      query: (payload) => ({
        url: "/supervisor/event/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["SupervisorApi"],
    }),
    getAllEvents: builder.query({
      query: () => ({
        url: "/supervisor/events/getAll",
        method: "GET",
        providesTags: ["SupervisorApi"],
      }),
    }),
    getEventById: builder.mutation({
      query: (id) => ({
        url: `/supervisor/events/getById/${id}`,
        method: "GET",
      }),
    }),
    addSponsor: builder.mutation({
      query: (payload) => ({
        url: `/event/sponsor/upload`,
        method: "POST",
        body: payload,
      }),
    }),
    addClass: builder.mutation({
      query: (payload) => ({
        url: `/competition/class/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["SupervisorApi"],
    }),
    getSponsor: builder.query({
      query: () => ({
        url: "/event/sponsor/getAll",
        method: "GET",
      }),
    }),
    getClasses: builder.query({
      query: () => ({
        url: "/competition/classes/getAll",
        method: "GET",
        providesTags: ["SupervisorApi"],
      }),
      providesTags: ["SupervisorApi"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useCreateEventMutation,
  useGetAllEventsQuery,
  useGetEventByIdMutation,
  useAddSponsorMutation,
  useAddClassMutation,
  useGetSponsorQuery,
  useGetClassesQuery,
} = SupervisorApi;

export default SupervisorApi;

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const refreshToken = localStorage.getItem("refreshToken");
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
const BaseURL = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshResult = await axios
      .post(`${import.meta.env.VITE_APP_BASE_URL}auth/refresh-token`, {
        refresh_token: refreshToken,
      })
      .catch((err) => {
        if (err.response.status && err) {
          logoutUser();
        }
        console.log(err, "err");
      });
    if (refreshResult?.access?.token) {
      const newAccessToken = refreshResult.access?.token;
      localStorage.setItem("accessToken", newAccessToken);
      window.location.reload();
    }
  }
  return result;
};

const logoutUser = () => {
  localStorage.remove("refreshToken");
  localStorage.remove("accessToken");
  window.location.reload();
};

export default BaseURL;

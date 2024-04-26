import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const accessToken = Cookies.get("accessToken");

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
const BaseURL = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    console.log("Lets log out user we dont have refresh token ");
  }
  return result;
};

const logoutUser = () => {
  localStorage.remove("refreshToken");
  localStorage.remove("accessToken");
  window.location.reload();
};

export default BaseURL;

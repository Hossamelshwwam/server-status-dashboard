import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API with base query
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://hala-nour-elkhier.vercel.app/`,

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `__$HalaNourChar$__ ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const { reducer: baseApiReducer, middleware: baseApiMiddleware } =
  baseApi;

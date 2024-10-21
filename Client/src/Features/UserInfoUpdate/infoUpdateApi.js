import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const infoUpdateApi = createApi({
  reducerPath: "infoUpdateApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["infoUpdate"],
  endPoints: (builder) => ({
    getInfo: builder.query({
      query: (userId) => ({
        url: `/users/${userId}/users`,
        method: "GET",
      }),
      providesTags: ["infoUpdate"],
    }),
    addInfo: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/updateInfo`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["infoUpdate"],
    }),
  }),
});

export const { useGetInfoQuery, useAddInfoMutation } = infoUpdateApi;
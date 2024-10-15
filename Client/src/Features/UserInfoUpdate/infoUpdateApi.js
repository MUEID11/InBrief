import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const infoUpdateApi = createApi({
  reducerPath: "infoupdateapi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["infoupdate"],
  endPoints: (builder) => ({
    getInfo: builder.query({
      query: (userId) => ({
        url: `/users/${userId}/users`,
        method: "GET",
      }),
      providesTags: ["infoupdate"],
    }),
    addInfo: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/updateInfo`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["infoupdate"],
    }),
  }),
});

export const { useGetInfoQuery, useAddInfoMutation } = infoUpdateApi;

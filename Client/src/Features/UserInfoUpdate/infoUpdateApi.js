import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const infoUpdateApi  = createApi({
  reducerPath: "infoUpdateApi ",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["infoUpdate"],
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: (userId) => ({
        url: `/users/${userId}/users`,
        method: "GET",
      }),
      providesTags: ["infoUpdate"],
    }),

    addInfo: builder.mutation({
      query: ({ userId, data }) => {
        return {
            url: `/users/${userId}/updateInfo`,
            method: "PATCH",
            body: data,
        };
      },
      invalidatesTags: ["infoUpdate"],
    }),

  }),
});

export const {
useGetInfoQuery,useAddInfoMutation
} = infoUpdateApi ;

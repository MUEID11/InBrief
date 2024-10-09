import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComment: builder.query({
      query: (postId) => ({
        url: `/comments/${postId}/comments`,
        method: "GET",
      }),
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: ({ postId, data }) => ({
        url: `/comments/${postId}/createComment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentQuery,useAddCommentMutation} = commentsApi;

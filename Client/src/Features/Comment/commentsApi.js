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
      providesTags: ["Comment"],
    }),
    addComment: builder.mutation({
      query: ({ postId, data }) => ({
        url: `/comments/${postId}/createComment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comment"],
    }),
    addReply: builder.mutation({
      query: ({ commentId, data }) => ({
        url: `/comments/${commentId}/reply`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Comment"],
    }),
    
    
    
  }),
});

export const { useGetCommentQuery,useAddCommentMutation,useAddReplyMutation} = commentsApi;

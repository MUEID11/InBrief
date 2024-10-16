import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const forumcommentsApi = createApi({
  reducerPath: "forumcommentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["FourmComments"],
  endpoints: (builder) => ({
    getForumComment: builder.query({
      query: (discussionId) => ({
        url: `/forum/${discussionId}/comments`,
        method: "GET",
      }),
      providesTags: ["ForumComment"],
    }),
    addForumComment: builder.mutation({
      query: ({ discussionId, data }) => ({
        url: `/forum/${discussionId}/createComment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ForumComment"],
    }),

    deleteForumComment: builder.mutation({
      query: ({ commentId }) => ({
        url: `/forum/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ForumComment"],
    }),


  }),
});

export const { useGetForumCommentQuery, useAddForumCommentMutation,useDeleteForumCommentMutation } =
  forumcommentsApi;

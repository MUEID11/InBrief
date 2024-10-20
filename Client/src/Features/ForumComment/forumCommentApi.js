import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const forumcommentsApi = createApi({
  reducerPath: "forumcommentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["FourmComments"],
  endpoints: (builder) => ({
    getForumComment: builder.query({
      query: (discussionId) => ({
        url: `/forum/getcomments/${discussionId}`,
        method: "GET",
      }),
      providesTags: ["ForumComment"],
    }),
    addForumComment: builder.mutation({
      query: ({ discussionId, data }) => ({
        url: `/forum/addComment/${discussionId}`,
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
    addForumReply: builder.mutation({
      query: ({ commentId, data }) => ({
        url: `/forum/reply/${commentId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["ForumComment"],
    }),
    deleteForumReply: builder.mutation({
      query: ({ commentId,replyId }) => ({
        url: `/forum/${commentId}/${replyId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ForumComment"],
    }),


  }),
});

export const { useGetForumCommentQuery, useAddForumCommentMutation,useDeleteForumCommentMutation,useAddForumReplyMutation,useDeleteForumReplyMutation } =
  forumcommentsApi;

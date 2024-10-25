import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const votesApi = createApi({
  reducerPath: "votesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["votes"],
  endpoints: (builder) => ({
    getVotes: builder.query({
      query: (email) => ({
        url: `/articles/myVotedArticles/${email}`,
        method: "GET",
      }),
      providesTags: ["votes"],
    }),

    addVotes: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: '/articles/addLike',
          method: 'PATCH',
          body: { articleId: id, ...body },
        };
      },
      invalidatesTags: ["votes"],
    }),

  }),
});

export const {
useGetVotesQuery,
useAddVotesMutation
} = votesApi;

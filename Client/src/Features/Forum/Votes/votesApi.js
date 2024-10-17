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
  

  }),
});

export const {
useGetVotesQuery
} = votesApi;

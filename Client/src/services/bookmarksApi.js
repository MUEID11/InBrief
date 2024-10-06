import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookmarksApi = createApi({
  reducerPath: 'bookmarksApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Bookmarks'],
  endpoints: (builder) => ({
    getBookmarks: builder.query({
      query: (email) => ({
        url: `/articles/allBookmarks?userEmail=${email}`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result?.length ? [...result.map(({ _id }) => ({ type: 'Bookmarks', id: _id })), { type: 'Bookmarks', id: 'LIST' }] : [{ type: 'Bookmarks', id: 'LIST' }],
    }),
    addBookmark: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: '/articles/addBookmark',
          method: 'PATCH',
          body: { articleId: id, ...body },
        };
      },
      invalidatesTags: [{ type: 'Bookmarks', id: 'LIST' }],
    }),
  }),
});

export const { useGetBookmarksQuery, useAddBookmarkMutation } = bookmarksApi;

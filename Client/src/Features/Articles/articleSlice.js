import { createSlice } from '@reduxjs/toolkit';
import { getArticleByPreference } from '../thunks/articleThunk';

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArticleByPreference.pending, (state) => {
        state.isLoading = true; // Properly set state using block
      })
      .addCase(getArticleByPreference.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
        state.error = null;
      })
      .addCase(getArticleByPreference.rejected, (state, action) => {
        state.isLoading = false;
        state.articles = null;
        state.error = action.error.message;
      });
  },
});

export default articleSlice.reducer;

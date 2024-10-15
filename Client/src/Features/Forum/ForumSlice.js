import { createSlice } from "@reduxjs/toolkit";
import { getForums } from "../thunks/forumThunk";

const initialState = {
  forums: [],
  isLoading: false,
  error: null,
};

export const forumSlice = createSlice({
  name: "forums",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getForums.pending, (state) => {
        state.isLoading = true; // Properly set state using block
      })
      .addCase(getForums.fulfilled, (state, action) => {
        state.isLoading = false;
        state.forums = action.payload;
        state.error = null;
      })
      .addCase(getForums.rejected, (state, action) => {
        state.isLoading = false;
        state.forums = null;
        state.error = action.error.message;
      });
  },
});
export default forumSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import userThunk from "../thunks/userThunks";

const initialState = {
  user: null,
  isLoading: false, 
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.pending, (state) => {
        state.isLoading = true; // Properly set state using block
      })
      .addCase(userThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(userThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

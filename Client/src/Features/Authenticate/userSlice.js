import { createSlice } from "@reduxjs/toolkit";
import userThunk, { checkAuthState, createUserWithGoogle, firebaseLogout, updateUser } from "../thunks/userThunks";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      (state.user = null), localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUserWithGoogle.fulfilled, (state, action) => {
        console.log("load", action.payload);
        state.isLoading = false;
        state.user = action.payload || null;
      })
      .addCase(createUserWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true; // Properly set state using block
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(firebaseLogout.fulfilled, (state) => {
        state.user = null; // Clear user state on successful logout
        state.isLoading = false;
      })
      .addCase(firebaseLogout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // Handle auth state change listener
    builder
      .addCase(checkAuthState.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuthState.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(checkAuthState.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { resetUser } = userSlice.actions;
export default userSlice.reducer;

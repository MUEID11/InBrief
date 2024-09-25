import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    authFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logOut(state) {
      state.user = null;
    },
  },
});

export const { authStart, authSuccess, authFailure, logOut } = authSlice.actions;
export default authSlice.reducer;

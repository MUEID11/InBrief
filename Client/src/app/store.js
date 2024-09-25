import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Authenticate/AuthSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})

export default store;
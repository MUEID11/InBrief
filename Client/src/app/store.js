import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Authenticate/userSlice";
import { bookmarksApi } from "../services/bookmarksApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { commentsApi } from "../Features/Comment/commentsApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    [bookmarksApi.reducerPath]: bookmarksApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()                                                                    
      .concat(bookmarksApi.middleware)
      .concat(commentsApi.middleware),
});

setupListeners(store.dispatch);

export default store;

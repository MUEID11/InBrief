import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Authenticate/userSlice";
import { bookmarksApi } from "../services/bookmarksApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import articleReducer from "../Features/Articles/articleSlice";
import { commentsApi } from "../Features/Comment/commentsApi";
import { userApi } from "../Features/Users/UserApi";
const store = configureStore({
  reducer: {
    user: userReducer,
    preferredArticles: articleReducer,
    [bookmarksApi.reducerPath]: bookmarksApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookmarksApi.middleware)
      .concat(commentsApi.middleware)
      .concat(userApi.middleware)
});

setupListeners(store.dispatch);

export default store;

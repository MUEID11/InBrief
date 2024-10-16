import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Authenticate/userSlice";
import { bookmarksApi } from "../services/bookmarksApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import articleReducer from "../Features/Articles/articleSlice";
import { commentsApi } from "../Features/Comment/commentsApi";
import forumReducer from "../Features/Forum/ForumSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    preferredArticles: articleReducer,
    forumsR: forumReducer,
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

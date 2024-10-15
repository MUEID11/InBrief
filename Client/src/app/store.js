import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Authenticate/userSlice";
import { bookmarksApi } from "../services/bookmarksApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import articleReducer from "../Features/Articles/articleSlice";
import { commentsApi } from "../Features/Comment/commentsApi";
import { infoUpdateApi } from "../Features/UserInfoUpdate/infoUpdateApi";
const store = configureStore({
  reducer: {
    user: userReducer,
    preferredArticles: articleReducer,
    [bookmarksApi.reducerPath]: bookmarksApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [infoUpdateApi.reducerPath]: infoUpdateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookmarksApi.middleware)
      .concat(commentsApi.middleware)
      .concat(infoUpdateApi.middleware)
});

setupListeners(store.dispatch);

export default store;

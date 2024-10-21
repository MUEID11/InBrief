import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Authenticate/userSlice";
import { bookmarksApi } from "../services/bookmarksApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import articleReducer from "../Features/Articles/articleSlice";
import { commentsApi } from "../services/Comment/commentsApi";
import { infoUpdateApi } from "../Features/UserInfoUpdate/infoUpdateApi";
import { forumcommentsApi } from "../services/ForumComment/forumCommentApi";
import { votesApi } from "../services/Votes/votesApi";
const store = configureStore({
  reducer: {
    user: userReducer,
    preferredArticles: articleReducer,
    forumsR: forumReducer,
    [bookmarksApi.reducerPath]: bookmarksApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [forumcommentsApi.reducerPath]: forumcommentsApi.reducer,
    [votesApi.reducerPath]: votesApi.reducer,
    [infoUpdateApi.reducerPath]: infoUpdateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookmarksApi.middleware)
      .concat(commentsApi.middleware)
      .concat(forumcommentsApi.middleware)
      .concat(votesApi.middleware)
});

setupListeners(store.dispatch);

export default store;

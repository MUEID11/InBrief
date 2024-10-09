import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Features/Authenticate/userSlice';
import { bookmarksApi } from '../services/bookmarksApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import articleReducer from '../Features/Articles/articleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    preferredArticles: articleReducer,
    [bookmarksApi.reducerPath]: bookmarksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookmarksApi.middleware),
});

setupListeners(store.dispatch);

export default store;

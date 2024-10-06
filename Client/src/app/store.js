import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Features/Authenticate/userSlice';
import { bookmarksApi } from '../services/bookmarksApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    user: userReducer,
    [bookmarksApi.reducerPath]: bookmarksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookmarksApi.middleware),
});

setupListeners(store.dispatch);

export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import { youtubeApiSlice } from "./youtubeApiSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    [youtubeApiSlice.reducerPath]: youtubeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApiSlice.middleware),
});

export default store;

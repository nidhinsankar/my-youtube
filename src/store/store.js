import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import { youtubeApiSlice } from "./youtubeApiSlice";
import searchSLice from "./searchSLice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSLice,
    [youtubeApiSlice.reducerPath]: youtubeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApiSlice.middleware),
});

export default store;

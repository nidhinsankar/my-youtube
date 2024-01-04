import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import { youtubeApiSlice } from "./youtubeApiSlice";
import searchSLice from "./searchSLice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSLice,
    [youtubeApiSlice.reducerPath]: youtubeApiSlice.reducer,
    chat: chatSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApiSlice.middleware),
});

export default store;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { YOUTUBE_BASE_URL, YOUTUBE_VIDEOS_URL } from "../utils/constants";

export const youtubeApiSlice = createApi({
  reducerPath: "youtubeApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: YOUTUBE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => YOUTUBE_VIDEOS_URL,
    }),
  }),
});

export const { useGetVideosQuery } = youtubeApiSlice;

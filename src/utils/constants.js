export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const YOUTUBE_VIDEOS_URL =
  "/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=" +
  import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

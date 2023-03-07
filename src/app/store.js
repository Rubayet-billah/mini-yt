import { configureStore } from "@reduxjs/toolkit";
import relatedVideosSlice from "../features/relatedVideo/relatedVideosSlice";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    tags: tagsSlice,
    videos: videosSlice,
    video: videoSlice,
    relatedVideos: relatedVideosSlice,
  },
});

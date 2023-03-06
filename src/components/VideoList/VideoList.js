import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = () => {
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <VideoListItem />
    </div>
  );
};

export default VideoList;

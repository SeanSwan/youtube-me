import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
        className="vidList"
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default VideoList;

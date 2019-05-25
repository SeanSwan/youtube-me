import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <div className="video-item">
        <h4 className="title">{video.snippet.title}</h4>
        <p>video.snippet.description</p>
      </div>
    </div>
  );
};

export default VideoDetail;

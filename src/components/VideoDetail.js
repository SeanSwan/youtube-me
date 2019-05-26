import React from "react";
import "../css/style.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>LOADING...</div>;
  }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="tv">
        <iframe src={videoSrc} />
      </div>
      <div className="detailContainer">
        <h4 className="title">{video.snippet.channelTitle}</h4>
        <h3 className="title">{video.snippet.title}</h3>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

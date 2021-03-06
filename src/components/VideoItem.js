import React from "react";
import "../css/style.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <div className="titleBox">
        <div className="content">
          <h4 className="title">{video.snippet.title}</h4>
          <h4 className="description">{video.snippet.description}</h4>
        </div>
      </div>

      <div className="box">
        <div className="imgBox">
          <img
            className="boxImage"
            src={video.snippet.thumbnails.high.url}
            alt={video.description}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;

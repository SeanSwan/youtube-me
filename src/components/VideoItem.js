import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <div className="video-item">
        <div className="titleBox">
          <div className="content">
            <h4 className="title">{video.snippet.title}</h4>
          </div>
          <div className="box">
            <div className="imgBox">
              <img
                className="boxImage"
                src={video.snippet.thumbnails.high.url}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;

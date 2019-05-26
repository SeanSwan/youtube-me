import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <div> 
        <h4 >{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

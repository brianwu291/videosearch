import React from 'react';
import './VideoItem.css';

const VideoItem = ( { video, onVideoSelect } ) => {
  //console.log(video);
  return (
    <div className="video-item item"
         onClick={() => onVideoSelect(video)}>
      <img className="ui image"
           src={video.snippet.thumbnails.medium.url}
           alt={video.snippet.description}/>
      <div className="content">
        <div className="header">
          <h5>{video.snippet.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;

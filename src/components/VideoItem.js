import React from 'react';

const VideoItem = ( { video, onVideoSelect } ) => {
  //console.log(video);
  return (
    <div className="item"
         onClick={() => onVideoSelect(video)}>
      <div className="ui small image">
        <img src={video.snippet.thumbnails.medium.url}
             alt={video.snippet.description}/>
      </div>
      <div className="middle aligned content">
        <div className="description">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;

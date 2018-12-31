import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = ( { videos, onVideoSelect } ) => {
  //console.log(videos)
  //console.log(onVideoSelect);
  const renderedList = videos.map(video => {
    return <VideoItem video={video}
                      key={video.id.videoId}
                      onVideoSelect={onVideoSelect} />;
  });

  return (
    <div className="ui segment">
      <div className="ui divided items ui middle aligned animated list">
        {renderedList}
      </div>
    </div>
  );
}


export default VideoList;

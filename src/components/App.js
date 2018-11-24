import React from 'react';
import youtube from '../apis/youtube.js';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';

class App extends React.Component {
  state = { videos:[], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit('relax');
  }

  onTermSubmit = (term) => {
    youtube.get('/search' , {
      params:{
        q:term
      }
    })
    .then(res => {
      //console.log(res.data.items);
      this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[0]
      });
    })
    .catch(err => {
      console.log(err);
      this.setState({videos: err})
    })
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  };

  render(){
    console.log('render');
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} remove={this.remove}/>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;

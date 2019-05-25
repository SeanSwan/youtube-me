import React from "react";
import Searchbar from "./SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';

library.add(faSearch);

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectVideo: video });
  };

  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} 
        videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

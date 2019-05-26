import React from "react";
import  Searchbar  from "./SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import youtube from "../apis/youtube";
import  VideoList  from "./VideoList";
import  VideoDetail  from "./VideoDetail";

library.add(faSearch);

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('Swizzle_TV StarCitizen Reclaimer')
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: response.data.items, 
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    
  };

  render() {
  return (
      <div>
        <Searchbar onFormSubmit={this.onTermSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect}videos={this.state.videos} />
        <VideoDetail video={this.state.selectedVideo} />
        
        
        
      </div>
    );
  }
}

export default App;

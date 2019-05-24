import React from "react";
import Searchbar from "./SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import youtube from "../apis/youtube";
import VideoList from './VideoList';


library.add(faSearch);

class App extends React.Component {
    state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

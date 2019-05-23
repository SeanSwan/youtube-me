import React from "react";
import Searchbar from "./SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);


class App extends React.Component {
  render() {
    return(
      <div>
        <Searchbar />
      </div>
    );
  }
}

export default App;

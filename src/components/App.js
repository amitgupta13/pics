import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = term => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID e7ccb549e8ab4acf981b3ca1a39368cbd63eaa9e5f7310cd121f37a6c9ba6350"
      }
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

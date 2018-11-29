import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Jumbo from "../Components/Jumbotron/Jumbo";
import SearchBar from "../Components/SearchBar/SearchBar";
import Results from "../Components/Results/Results";


function Search() {
    return(
        <div>
          <NavBar />
          <Jumbo />
          <SearchBar />
          <Results />
        </div>
    );
};
export default Search;

// Todo list:
// Fix Page layout

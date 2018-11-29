import React from "react";


function SearchBar() {
    return(
        <div classNameName="container">
          <div className="row">
            <div className="input-field col s6">
              <input id="book" type="text" className="validate"></input>
              <label className="active" for="first_name2">Title</label>
            </div>
            <button>
              <i class="medium material-icons">send</i>
            </button>
          </div>
        </div>
    );
};
export default SearchBar;

// Todo list:
// get it to work
// change css to button
// add logic to button that render the results to the results component
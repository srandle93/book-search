import React from "react";
import NavBar from "../Components/NavBar/NavBar";


function Saved() {
    return(
        <div>
          <NavBar />
          <ul className="collection with-header">
            <li className="collection-header"><h4>Results</h4></li>
            <li className="collection-item"><div><a href="#!" className="secondary-content"><i className="material-icons">delete</i></a></div></li>
            <li className="collection-item"><div><a href="#!" className="secondary-content"><i className="material-icons">delete</i></a></div></li>
            <li className="collection-item"><div><a href="#!" className="secondary-content"><i className="material-icons">delete</i></a></div></li>
            <li className="collection-item"><div><a href="#!" className="secondary-content"><i className="material-icons">delete</i></a></div></li>
          </ul>
        </div>
    );
};
export default Saved;

// Todo list:
// Set up div that intakes saved books
// get delete to work
// change css to page
// add logic to button that deletes book object from db and saved page

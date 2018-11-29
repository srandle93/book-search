import React from "react";


function Results() {
    return(
        <ul className="collection with-header">
        <li className="collection-header"><h4>Results</h4></li>
        <li className="collection-item"><div><a href="#!" className="secondary-content"><i className="material-icons">save</i></a></div></li>
        <li className="collection-item"><div><a href="#!" className="secondary-content"><i className="material-icons">save</i></a></div></li>
        <li className="collection-item"><div><a href="#!" className="secondary-content"><i className="material-icons">save</i></a></div></li>
        <li className="collection-item"><div><a href="#!" className="secondary-content"><i className="material-icons">save</i></a></div></li>
      </ul>
    );
};
export default Results;

// Todo list:
// Set up div that intakes search result(s)
// change css to button
// add logic to button that saves book object to db and saved page
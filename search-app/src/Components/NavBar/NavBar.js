import React from "react";


function NavBar() {
    return(
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center">Book Seearch</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Seearch</a></li>
        <li><a href="badges.html">Saved</a></li>
      </ul>
    </div>
  </nav>
    );
};
export default NavBar;

// Todo list:
// assign links to appropriate pages
// change css to navbar
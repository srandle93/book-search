import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages//SearchBar";
import Results from "./Components/Results/Results";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/results/:id" component={Results} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

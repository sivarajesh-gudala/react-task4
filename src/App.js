import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Cards from "./cards.js";
import Resume from "./resume.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div>
      <Nav/>
        <Route exact path="/react-task4" component={Cards} />
        <Route exact path="/resume" component={Resume} className="bg-info" />
    </div>
  );
}


export default App;

import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/react-task4">
          Home
        </Link>
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/react-task4" className="nav-link"> Aboutus</Link>
        </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

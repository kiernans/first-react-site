import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Start with Capital
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/register">Sign Me Up!</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  ); // returns JSX
}

export default Navbar;

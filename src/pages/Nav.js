import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="nav">
      <h3 className="h3">Logo</h3>
      <ul className="ul">
        <Link className="l" to="">
          <li>Home</li>
        </Link>

        <Link className="l" to="about">
          <li>About</li>
        </Link>

        <Link className="l" to="products">
          <li>Products</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

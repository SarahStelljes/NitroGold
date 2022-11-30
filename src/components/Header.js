import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h2>NitroGold</h2>
      </Link>
      <nav>
        <Link to="/">
          <h3>About</h3>
        </Link>
        <Link to="/portfolio">
          <h3>Portfolio</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
        <Link to="/resume">
          <h3>Resume</h3>
        </Link>
      </nav>
    </header>
  );
}

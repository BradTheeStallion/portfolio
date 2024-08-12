import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css';

function Nav() {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li><Link to="/">About</Link></li>
        <li><Link to="/interactive-art">Interactive Art</Link></li>
        <li><Link to="/doggy-dog-world">Doggy Dog World</Link></li>
        <li><Link to="/planet-generator">Planet Generator</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
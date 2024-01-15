import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__title">Dazzling Demo</div>
        <div className="navbar__container__items">
          <ul className="navbar__container__items__list">
            <Link to={'/'}><li>Home</li></Link>
            <li>Gallery</li>
            <li>Shortcodes</li>
            <li>About</li>
            <li>Language</li>
            <Link to={'/AddPage'}><li>AddPage</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="row__nav">
        <figure className="logo__img--wrapper-nav">
          <img src="" alt="Logo" className="logo__img--nav" />
        </figure>
        <ul className="nav__link--list">
          <Link to="/" className="nav__link--wrapper">
            <li className="nav__link">Home</li>
          </Link>
          <Link to="/about" className="nav__link--wrapper">
            <li className="nav__link">About Me</li>
          </Link>
          <Link to="/testimonial" className="nav__link--wrapper">
            <li className="nav__link">Testimonials</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

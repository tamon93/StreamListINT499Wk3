import React from "react";

import { NavLink } from "react-router-dom";

import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome /> StreamList
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaFilm /> Movies
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaShoppingCart /> Cart
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaInfoCircle /> About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

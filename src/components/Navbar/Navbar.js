import React, { useState } from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <span className="navbar-brand mb-0 h1">JSONPLACEHOLDER</span>

      <button
        className="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <NavLink activeClassName="active" className="nav-item nav-link" to="/">
          Usuarios
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/posts"
        >
          Posts
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/54b7d1950e1bca3.png";

export const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt={"logo"}
              width="90"
              height="50"
              className="d-inline-block align-text-top"
            />
            
          </NavLink>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                Information
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/notespage">
                Notes
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/authpage">
                Authorization
                </NavLink>
            </li>
        </ul>
        </div>
      </nav>
    </Fragment>
  );
};

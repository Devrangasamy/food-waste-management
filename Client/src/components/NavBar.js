import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Userprofile from "./profile/Userprofile";
function NavBar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            Zero Waste
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/mission"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Mission
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/contact"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to={props.isLogin ? window.location.NavBar : "./loginregister"}
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                {!props.isLogin ? (
                  "login/register"
                ) : (
                  <Userprofile
                    setLoginFalse={props.setLoginFalse}
                  ></Userprofile>
                )}
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

import React, {useRef} from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Styles.css";
import "../styles/Header.css"
import richlogowhite from "../assets/richlogowhite.png";

function Nav() {
  let activeStyle = {
    textDecoration: "none",
    borderStyle: "solid",
    borderWidth: "0 0 1px",
  };

  let defaultStyle = {
    textDecoration: "none",
  };

  // const myRef = useRef(null)

  // const executeScroll = myRef.current.scrollIntoView()

  return (
    <div className="header">
      <container className="site-title">
        <row style={{ display: "flex", justifyContent: "center" }}>
          <div className="image-container">
            <img src={richlogowhite} alt="logo" />
          </div>
        </row>
        <row className="subtitle">THE LAW OFFICE OF</row>
        <row className="title-text">
        RICH HERBERT, P.C.
        </row>
      </container>
      <row>
        <nav className="nav">
          <ul className="ul">
            
            <li>
              <NavLink
                to="Specialties"
                style={({ isActive }) => 
                  isActive ? activeStyle : defaultStyle
                }>
                  SPECIALTIES
                </NavLink>
            </li>
            <li>
              <NavLink
                to="Testimonials"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                TESTIMONIALS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Contact"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <a href="tel:##########">PHONE: ### ###-####</a>
            </li>
          </ul>
        </nav>
      </row>
    </div>
  );
}

export default Nav;

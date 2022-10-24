import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Styles.css";
import "../styles/Header.css";
import richlogowhite from "../assets/richlogowhite.png";

const Nav = ({ refs }) => {
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    switch (location.pathname) {
      case "/Specialties":
        scrollSmoothHandler(refs.specRef);
        break;
      case "/Testimonials":
        scrollSmoothHandler(refs.testRef);
        break;
      case "/Contact":
        scrollSmoothHandler(refs.contactRef);
        break;
      default:
      //ignore
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  let activeStyle = {
    textDecoration: "none",
    borderStyle: "solid",
    borderWidth: "0 0 1px",
  };

  let defaultStyle = {
    textDecoration: "none",
  };

  return (
    <div className="header">
      <container className="site-title">
        <row style={{ display: "flex", justifyContent: "center" }}>
          <div className="image-container">
            <img src={richlogowhite} alt="logo" />
          </div>
        </row>  
        <row className="title-text">RICH HERBERT LAW, P.C.</row>
        <row className="subtitle">richherbert@email.com</row>
        <row className="subtitle">430 Main Street, Suite 3, Agawam, MA 01001</row>
        <row className="subtitle">
          <button className="call-button">
            <a className="phonelink" href="tel:123-456-7890">(###) ###-####</a>
          </button>
        </row>
      </container>
      <row>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <NavLink
                  to="Specialties"
                  style={({ isActive }) =>
                    isActive ? activeStyle : defaultStyle
                  }
                >
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
            </ul>
          </nav>
        </div>
      </row>
    </div>
  );
};

export default Nav;

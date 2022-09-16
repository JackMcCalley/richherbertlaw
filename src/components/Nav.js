import React, {useEffect, useRef} from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Styles.css";
import "../styles/Header.css"
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
      // case "/Contact":
      //   scrollSmoothHandler(refs.contactRef);
      default:
        //ignore
    }
  }, [location, refs])

  const scrollSmoothHandler = (ref) => {
     ref.current.scrollIntoView({behavior: 'smooth'})
  }

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
        <row className="title-text">
        RICH HERBERT LAW, P.C.
        </row>
      </container>
      <row>
        <div className='sticky'>
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
        </div>
      </row>
    </div>
  );
}

export default Nav;

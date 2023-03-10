import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Table"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Table
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Submit Data
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Help"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Help
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar--logo">
        <Link
          onClick={closeMenu}
          activeClass="navbar-active-content"
          spy={true}
          smooth={true}
          offset={-100}
          duration={900}
          to="profile"
        >
          Chandana Ganesu
        </Link>
      </div>
      <a
        className={`nav_hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-100}
              duration={900}
              to="skills"
              className={`navbar--content ${navActive ? "active" : ""}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-100}
              duration={900}
              to="about"
              className={`navbar--content ${navActive ? "active" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-100}
              duration={900}
              to="MyPortfolio"
              className={`navbar--content ${navActive ? "active" : ""}`}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-100}
              duration={900}
              to="ContactMe"
              className={`navbar--content ${navActive ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar--social--section">
          <a
            href="https://www.linkedin.com/in/chandana-ganesu-b5aa60287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="navbar--img"
              src="./linkedin-icon.png"
              alt="linkedin icon"
            />
          </a>
          <a
            href="https://github.com/Chandana439"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="navbar--img"
              src="./github-icon.png"
              alt="github icon"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

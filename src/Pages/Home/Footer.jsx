import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-100}
                duration={900}
                to="profile"
                className="footer--content"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-100}
                duration={900}
                to="skills"
                className="footer--content"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-100}
                duration={900}
                to="about"
                className="footer--content"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-100}
                duration={900}
                to="MyPortfolio"
                className="footer--content"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <hr className="divider" />
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/chandana-ganesu-b5aa60287"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer--img"
                  src="./social/linkedin-footer.svg"
                  alt="github icon"
                />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Chandana439"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer--img"
                  src="./social/github.svg"
                  alt="github icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer--logo">
        <span className="footer--letter">C</span>
        <span className="footer--letter">G</span>
      </div>
    </footer>
  );
}

export default Footer;

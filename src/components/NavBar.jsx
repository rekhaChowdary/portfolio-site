import React from "react";
import { Link } from "react-scroll";
import "@/styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-50} spy={true}>
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="companies"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
          >
            Companies
          </Link>
        </li>
        <li>
          <Link
            to="contactForm"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

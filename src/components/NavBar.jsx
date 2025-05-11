import React from "react";
import { Link, scroller } from "react-scroll";
import "../styles/NavBar.scss";

const Navbar = ({ ensureSectionsVisible }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={800}
            onClick={() => {
              ensureSectionsVisible();
              setTimeout(() => {
                scroller.scrollTo("about", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }, 100);
            }}
          >
            About
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

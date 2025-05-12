import React from "react";
import { scroller } from "react-scroll";
import "../styles/NavBar.scss";

const Navbar = ({ ensureSectionsVisible }) => {
  const scrollToSection = (section) => {
    ensureSectionsVisible();
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }, 200);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a onClick={() => scrollToSection("about")}>About</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("companies")}>Companies</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("contactForm")}>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

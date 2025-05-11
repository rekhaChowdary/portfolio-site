import React, { useState } from "react";
import { Link, scroller } from "react-scroll";
import LogoImg from "../assets/rekha.jpg";
import HamMenuIcon from "../assets/cigna.png";
import HamMenuClose from "../assets/HM.png";
import "../styles/Header.scss";

const Header = ({ ensureSectionsVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img src={LogoImg} alt="Logo" className="header__logo-img" />
          </div>
          <span className="header__logo-sub">Rekha</span>
        </div>

        <div className="header__main">
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
          {/* <Navbar
            ensureSectionsVisible={() => {
              if (!sectionsVisible) setSectionsVisible(true);
            }}
          /> */}

          <div className="header__main-ham-menu-cont">
            <img
              src={isMenuOpen ? HamMenuClose : HamMenuIcon}
              alt="Menu"
              className="header__main-ham-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="header__sm-menu">
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { scroller } from "react-scroll";
import LogoImg from "../assets/rekha.jpg";
import HamMenuIcon from "../assets/cigna.png";
import HamMenuClose from "../assets/HM.png";
import "../styles/Header.scss";

const Header = ({ ensureSectionsVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (target) => {
    ensureSectionsVisible();
    setTimeout(() => {
      scroller.scrollTo(target, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }, 200);
  };

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
              <a onClick={() => handleScrollTo("about")} className="nav-link">
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollTo("projects")}
                className="nav-link"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollTo("companies")}
                className="nav-link"
              >
                Companies
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollTo("contactForm")}
                className="nav-link"
              >
                Contact Me
              </a>
            </li>
          </ul>

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
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollTo("about");
                  }}
                >
                  About
                </a>
              </li>
              <li className="header__sm-menu-link">
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollTo("projects");
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="header__sm-menu-link">
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollTo("companies");
                  }}
                >
                  Companies
                </a>
              </li>
              <li className="header__sm-menu-link">
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollTo("contactForm");
                  }}
                >
                  Contact Me
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

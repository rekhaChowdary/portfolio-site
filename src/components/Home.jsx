import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import "../styles/Home.scss";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contacts";
import ContactForm from "./ContactForm";
import Navbar from "./NavBar";
import Companies from "./Companies";

const Home = () => {
  const [sectionsVisible, setSectionsVisible] = useState(false);

  const [aboutRef, inViewAbout] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [projectsRef, inViewProjects] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [contactRef, inViewContact] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contactFormRef, inViewContactForm] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [companiesRef, inViewCompanies] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleViewWorkClick = () => {
    setSectionsVisible(true);
  };

  return (
    <div className="home">
      <Element name="home">
        <Navbar />
        <div className="intro">
          <h2>Hello, I'm Rekha.</h2>
          <p className="secondary-text">
            A Result-Oriented Front End focused Full Stack Developer building
            and managing Websites and Web Applications that lead to the success
            of the overall product.
          </p>
          <button className="view-work" onClick={handleViewWorkClick}>
            View my work ↓
          </button>
        </div>
      </Element>
      {sectionsVisible && (
        <>
          <Element name="about">
            <div
              ref={aboutRef}
              className={`section-wrapper ${sectionsVisible ? "show" : ""}`}
            >
              <About inView={inViewAbout} />
            </div>
          </Element>

          <Element name="projects">
            <div
              ref={projectsRef}
              className={`section-wrapper ${sectionsVisible ? "show" : ""}`}
            >
              <Projects inView={inViewProjects} />
            </div>
          </Element>

          <Element name="contact">
            <div
              ref={contactRef}
              className={`section-wrapper ${sectionsVisible ? "show" : ""}`}
            >
              <Contact inView={inViewContact} />
            </div>
          </Element>

          <Element name="companies">
            <div
              ref={companiesRef}
              className={`section-wrapper ${sectionsVisible ? "show" : ""}`}
            >
              <Companies inView={inViewCompanies} />
            </div>
          </Element>

          <Element name="contactForm">
            <div
              ref={contactFormRef}
              className={`section-wrapper ${sectionsVisible ? "show" : ""}`}
            >
              <ContactForm inView={inViewContactForm} />
            </div>
          </Element>
        </>
      )}
    </div>
  );
};

export default Home;

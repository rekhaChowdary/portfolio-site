// src/App.jsx
import React, { useState } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/NavBar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contacts";
import Companies from "../src/components/Companies";
import ContactForm from "../src/components/ContactForm";
import Footer from "../src/components/Footer";
import "./styles/Home.scss";
import { scroller } from "react-scroll";
import Header from "./components/Header";

const App = () => {
  const [sectionsVisible, setSectionsVisible] = useState(false);

  const refs = {
    about: useInView({ triggerOnce: true, threshold: 0.2 }),
    projects: useInView({ triggerOnce: true, threshold: 0.2 }),
    contact: useInView({ triggerOnce: true, threshold: 0.2 }),
    companies: useInView({ triggerOnce: true, threshold: 0.2 }),
    contactForm: useInView({ triggerOnce: true, threshold: 0.2 }),
    footer: useInView({ triggerOnce: true, threshold: 0.2 }),
  };

  return (
    <div className="container">
      <Header
        ensureSectionsVisible={() => {
          if (!sectionsVisible) setSectionsVisible(true);
        }}
      />

      <Element name="home">
        <Home
          onViewWork={() => {
            setSectionsVisible(true);
            setTimeout(() => {
              scroller.scrollTo("about", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }, 100);
          }}
        />
      </Element>

      {sectionsVisible && (
        <>
          <Element name="about">
            <section ref={refs.about[0]} className="section-wrapper show">
              <About inView={refs.about[1]} />
            </section>
          </Element>

          <Element name="projects">
            <section ref={refs.projects[0]} className="section-wrapper show">
              <Projects inView={refs.projects[1]} />
            </section>
          </Element>

          <Element name="contact">
            <section ref={refs.contact[0]} className="section-wrapper show">
              <Contact inView={refs.contact[1]} />
            </section>
          </Element>

          <Element name="companies">
            <section ref={refs.companies[0]} className="section-wrapper show">
              <Companies inView={refs.companies[1]} />
            </section>
          </Element>

          <Element name="contactForm">
            <section ref={refs.contactForm[0]} className="section-wrapper show">
              <ContactForm inView={refs.contactForm[1]} />
            </section>
          </Element>

          <Element name="footer">
            <section
              ref={refs.footer[0]}
              className="section-wrapper show"
              aria-label="Site Footer"
            >
              <Footer inView={refs.footer[1]} />
            </section>
          </Element>
        </>
      )}
    </div>
  );
};

export default App;

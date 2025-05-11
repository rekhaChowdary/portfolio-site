import React from "react";
import Skills from "./Skills";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p className="about-text">
          I'm a <strong>Front-End focused Web Developer</strong> passionate
          about crafting responsive, user-centric websites and web applications.
        </p>
        <p className="about-text">
          With hands-on experience building and managing the front-end of
          scalable digital products, I strive to deliver interfaces that are not
          just visually appealing but also optimized for performance and user
          experience.
        </p>
        <p className="about-text">
          I actively share what I learn about modern web development to help
          others in the Dev Community grow. You can find me posting insights and
          tips on{" "}
          <a
            href="https://www.linkedin.com/in/rekha-polineni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://www.instagram.com/rekha_polineni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          .
        </p>
        <p className="about-text">
          I'm always open to exciting opportunities where I can contribute,
          grow, and make meaningful impact. If you’re hiring or have a role that
          aligns with my skills, feel free to reach out—I’d love to connect!
        </p>
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;

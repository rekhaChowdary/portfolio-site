import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "../styles/Home.scss";

const Home = ({ onViewWork }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/public/Rekha S.pdf";
    link.download = "Resume.pdf";
    link.click();
  };
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="hero-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hello, I'm Rekha.
      </motion.h2>

      <motion.h3
        className="role-switch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Typewriter
          words={["Frontend Developer", "Full Stack Engineer", "UI Enthusiast"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.h3>

      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        A Result-Oriented Front End focused Full Stack Developer building and
        managing Websites and Web Applications that lead to the success of the
        overall product.
      </motion.p>

      <motion.p
        className="location"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        📍 Based in Kansas | Open to Relocation
      </motion.p>

      <motion.div
        className="cta-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <button className="view-work" onClick={onViewWork}>
          View My Work ↓
        </button>
        <a
          href="/Resume.pdf"
          className="resume-button"
          onClick={handleDownload}
        >
          📄 Download Resume
        </a>
      </motion.div>

      <motion.div
        className="tech-icons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <img src="/imgs/react.svg" alt="React" />
        <img src="/imgs/springboot.jpeg" alt="Spring Boot" />
        <img src="/imgs/mongodb.png" alt="MongoDB" />
        <img src="/imgs/aws.png" alt="AWS" />
        <img src="/imgs/java.png" alt="Java" />
      </motion.div>

      <motion.blockquote
        className="quote"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        “Code with purpose. Build with passion.”
      </motion.blockquote>
    </motion.div>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";

const Home = ({ onViewWork }) => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hello, I'm Rekha.
      </motion.h2>

      <motion.p
        className="secondary-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A Result-Oriented Front End focused Full Stack Developer building and
        managing Websites and Web Applications that lead to the success of the
        overall product.
      </motion.p>

      <motion.button
        className="view-work"
        onClick={onViewWork}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        View my work ↓
      </motion.button>
    </motion.div>
  );
};

export default Home;

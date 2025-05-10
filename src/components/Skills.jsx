import React from "react";
import SkillCard from "./SkillCard";
import "../styles/Skills.scss";

const skills = [
  { name: "React", image: "/imgs/react.svg" },
  { name: "CSS", image: "/imgs/css.png" },
  { name: "JavaScript", image: "/imgs/Js.png" },
  { name: "HTML", image: "/imgs/html.jpeg" },
  { name: "Next.js", image: "/imgs/nextjs.jpeg" },
  { name: "Redux", image: "/imgs/redux.png" },
  { name: "MongoDB", image: "/imgs/mongodb.png" },
  { name: "Git", image: "/imgs/git.png" },
  { name: "SASS | SCSS", image: "/imgs/SCSS.webp" },
  { name: "AWS | IBM", image: "/imgs/download.jpeg" },
  { name: "Java", image: "/imgs/java.png" },
  { name: "SpringBoot", image: "/imgs/springboot.jpeg" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} image={skill.image} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

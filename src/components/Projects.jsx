import React from "react";
import "../styles/Projects.scss";
import hanoverLogo from "../assets/Hanover.jpeg";
import yumLogo from "../assets/Yum!brands.png";
import uaeXchangeLogo from "../assetS/UAEXchange.png";
import metLifeLogo from "../assetS/Metlife.png";
import ibmLogo from "../assets/IBM.png";
import cignaLogo from "../assets/cigna.png";
import { Button } from "@mui/material";

const projects = [
  {
    title: "Hanover Insurance Group",
    description:
      "The Hanover Insurance Group is a U.S.-based property and casualty insurance company founded in 1852. Headquartered in Worcester, Massachusetts, it offers personal and commercial insurance through independent agents.The company specializes in tailored coverage for small and mid-sized businesses, as well as home and auto insurance.",
    skills: [
      "Java",
      "Spring",
      "Hibernate",
      "HTML",
      "CSS",
      "Adobe Flex",
      "MXML",
      "MY SQL",
    ],
    link: "https://www.hanover.com/",
    image: hanoverLogo,
  },
  {
    title: "Yum! Brands",
    description:
      "Yum! Brands, Inc. is a leading global quick-service restaurant company headquartered in Louisville, Kentucky. It operates over 58,000 restaurants across more than 155 countries and territories, primarily through its well-known brands: KFC, Pizza Hut, Taco Bell, and The Habit Burger Grill. Established in 1997 as a spin-off from PepsiCo.",
    skills: [
      "Java",
      "Spring MVC",
      "JDBC",
      "Hibernate",
      "Websphere Portal",
      "Web content Management",
      "HTML",
      "CSS",
      "Oracle",
    ],
    link: "https://www.yum.com/wps/portal/yumbrands/Yumbrands/",
    image: yumLogo,
  },
  {
    title: "UAE Exchange",
    description:
      "UAE Exchange, established in 1980 and headquartered in Abu Dhabi, was a prominent financial services company specializing in remittances, foreign exchange, and bill payments. At its peak, it operated over 800 branches across 31 countries, particularly strong in India and the Middle East.",
    skills: [
      "React",
      "React Query",
      "Java",
      "Redux",
      "spring mvc",
      "PL/SQL",
      "SVN",
      "Adobe Flex",
      "Action Script",
      "Javascript",
    ],
    link: "https://your-dashboard-link.com",
    image: uaeXchangeLogo,
  },
  {
    title: "MetLife, Inc",
    description:
      "MetLife, Inc. is a leading global provider of insurance, annuities, and employee benefit programs, founded in 1868 and headquartered in New York City.It serves over 90 million customers in more than 40 countries, including individuals and businesses.MetLife offers life, dental, disability, and other insurance products through various channels.",
    skills: [
      "React",
      "React Query",
      "React Router",
      "SCSS",
      "GitHUB",
      "Lodash",
      "IBM CLoud",
    ],
    link: "https://www.metlife.com/",
    image: metLifeLogo,
  },
  {
    title: "IBM Cloud",
    description:
      "IBM Cloud is IBM's comprehensive cloud computing platform, offering a suite of Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) solutions. It supports various deployment models, including public, private, and hybrid clouds, catering to diverse business needs.",
    skills: ["React", "React Query", "Spring Boot", "JWT", "Chart.js"],
    link: "https://www.ibm.com/cloud",
    image: ibmLogo,
  },
  {
    title: "The Cigna Group",
    description:
      "The Cigna Group℠ is a global health company committed to improving health and vitality. We relentlessly challenge ourselves to partner and innovate solutions for better health. ",
    skills: [
      "React",
      "React Query",
      "Redux",
      "SCSS",
      "Next js",
      "TypeScript",
      "Javascript",
      "AWS",
      "Spring Boot",
      "Mongo DB",
    ],
    link: "https://www.thecignagroup.com/",
    image: cignaLogo,
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-skills">
              {project.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #c91436",
                padding: "10px 20px",
                color: "#c91436",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={() =>
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
              className="view-work"
            >
              Visit Website
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

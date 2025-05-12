import React, { useState } from "react";
import "../styles/Tabs.scss";

// Skills Data for each category
const skillsData = {
  frontend: [
    { name: "React", image: "/imgs/react.svg" },
    { name: "JavaScript", image: "/imgs/Js.png" },
    { name: "CSS", image: "/imgs/css.png" },
    { name: "HTML", image: "/imgs/html.jpeg" },
    { name: "ReactQuery", image: "/imgs/reactQuery.jpeg" },
    { name: "ReactHooks", image: "/imgs/ReactHooks.png" },
    { name: "ReduxThunk", image: "/imgs/ReduxThunnk.jpg" },
    { name: "ReactContextAPI", image: "/imgs/ReactContextAPI.png" },
    { name: "Lodash", image: "/imgs/Lodash.png" },
    { name: "TypeScript", image: "/imgs/Ts.png" },
    { name: "Next.js", image: "/imgs/nextjs.jpeg" },
  ],
  backend: [
    { name: "Java", image: "/imgs/java.png" },
    { name: "SpringBoot", image: "/imgs/springboot.jpeg" },
    { name: "JDBC", image: "/imgs/JDBC.png" },
    { name: "JPA", image: "/imgs/JPA.png" },
    { name: "Spring MVC", image: "/imgs/MVC.png" },
  ],
  ci_cd: [
    { name: "Docker", image: "/imgs/Docker.png" },
    { name: "Git", image: "/imgs/git.png" },
    { name: "BitBucket", image: "/imgs/BitBucket.png" },
    { name: "Jenkins", image: "/imgs/Jenkins.png" },
  ],
  databases: [
    { name: "MySQL", image: "/imgs/mysql.png" },
    { name: "MongoDB", image: "/imgs/mongodb.png" },
    { name: "Postgres", image: "/imgs/plsql.png" },
  ],
  cloud: [
    { name: "IBM Cloud", image: "/imgs/IBM.png" },
    { name: "AWS", image: "/imgs/aws.png" },
    { name: "GCP", image: "/imgs/GCP.png" },
  ],
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="tabs-section">
      <h2 className="tabs-heading">My Skills</h2>

      <div className="tabs-buttons">
        <button
          className={`tab-button ${activeTab === "frontend" ? "active" : ""}`}
          onClick={() => setActiveTab("frontend")}
        >
          Frontend
        </button>
        <button
          className={`tab-button ${activeTab === "backend" ? "active" : ""}`}
          onClick={() => setActiveTab("backend")}
        >
          Backend
        </button>
        <button
          className={`tab-button ${activeTab === "ci_cd" ? "active" : ""}`}
          onClick={() => setActiveTab("ci_cd")}
        >
          CI/CD
        </button>
        <button
          className={`tab-button ${activeTab === "databases" ? "active" : ""}`}
          onClick={() => setActiveTab("databases")}
        >
          Databases
        </button>
        <button
          className={`tab-button ${activeTab === "cloud" ? "active" : ""}`}
          onClick={() => setActiveTab("cloud")}
        >
          Cloud
        </button>
      </div>

      <div className="tab-content">
        {skillsData[activeTab].map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.image} alt={skill.name} />
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tabs;

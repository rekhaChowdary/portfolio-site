import React from "react";
import Skills from "./Skills";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Rekha, a <strong>Full Stack Web Developer</strong> with over{" "}
          <strong>10 years of experience</strong> crafting scalable and
          efficient digital solutions. I specialize in <strong>React</strong>,{" "}
          <strong>Redux</strong>, <strong>JavaScript</strong>,{" "}
          <strong>TypeScript</strong>, <strong>Node.js</strong>, and{" "}
          <strong>Spring Boot</strong>, with a strong focus on delivering{" "}
          <strong>highly responsive</strong> and{" "}
          <strong>accessible user interfaces</strong>.
        </p>
        <p>
          Throughout my career, I've had the privilege to work on{" "}
          <strong>enterprise-level applications</strong> and collaborate with
          talented teams, creating seamless and intuitive user experiences. My
          expertise spans both <strong>frontend</strong> and{" "}
          <strong>backend development</strong>, with a deep understanding of{" "}
          <strong>cloud technologies</strong> like <strong>AWS</strong>,{" "}
          <strong>IBM Cloud</strong>, and{" "}
          <strong>microservices architecture</strong>.
        </p>
        <p>
          I'm particularly passionate about{" "}
          <strong>performance optimization</strong>,{" "}
          <strong>data synchronization</strong>, and integrating{" "}
          <strong>cloud-based solutions</strong>. My work with{" "}
          <strong>React Query</strong>, <strong>Redux</strong>, and{" "}
          <strong>React Hooks</strong> has allowed me to create highly
          performant applications that scale with ease. Additionally, I have
          hands-on experience with <strong>CI/CD tools</strong> like{" "}
          <strong>Jenkins</strong>, <strong>Docker</strong>, and{" "}
          <strong>Kubernetes</strong>, ensuring seamless deployment and{" "}
          maintenance of web applications.
        </p>
        <p>
          Beyond the code, I'm naturally curious, always striving to stay ahead
          of the curve with the latest trends in web development. When I’m not
          writing code, I’m focused on expanding my knowledge, learning new
          technologies, and improving my skills. I'm a firm believer in teamwork
          and collaboration, and I thrive in environments where I can contribute
          and learn from others.
        </p>
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "../styles/Certifications.scss";

const certifications = [
  {
    title: "Oracle Certified Associate (OCA)",
    logo: "/imgs/oca.png",
    description: "Oracle Certified Associate (OCA) certification in Java",
    link: "/OCA.pdf",
    isPdf: true,
  },
  {
    title: "Oracle Certified Professional (OCP)",
    logo: "/imgs/ocp.jpeg",
    description: "Oracle Certified Professional (OCP) certification in Java",
    link: "/OCP.pdf",
    isPdf: true,
  },
  {
    title: "IBM Cloud Advocate",
    logo: "/imgs/IBmAdvocate.png",
    description: "IBM Cloud Advocate Certification",
    link: "https://www.credly.com/badges/85303584-4352-4f2e-abc3-cb64a401597d/linked_in_profile",
    isPdf: false,
  },
  {
    title: "IBM WatsonX",
    logo: "/imgs/IBMWatsonx.png",
    description: "IBM WatsonX Certification",
    link: "https://www.credly.com/badges/89544731-6ac0-4e9d-b836-84767164f0c0/linked_in_profile",
    isPdf: false,
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.logo} alt={cert.title} className="cert-logo" />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            {cert.isPdf ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            ) : (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View on Credly
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

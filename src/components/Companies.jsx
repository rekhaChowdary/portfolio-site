import React from "react";
import "../styles/Companies.scss";
import NttLogo from "../assets/NttData.jpg";
import Capgemini from "../assets/Capgemini.png";
import HM from "../assets/HM.png";
import IBM from "../assets/IBM.png";

const companies = [
  { name: "IBM", logo: IBM },
  { name: "Capgemini", logo: Capgemini },
  { name: "Happiest Minds", logo: HM },
  { name: "NTT Data", logo: NttLogo },
];

const Companies = () => {
  return (
    <section className="companies-section">
      <h2>Companies I've Collaborated With</h2>
      <p className="intro-text">I'm proud to have worked with:</p>
      <div className="companies-grid">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            <img
              src={company.logo}
              alt={company.name}
              className="company-img"
            />
            <p className="company-name">{company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;

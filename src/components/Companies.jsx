import React from "react";
import "../styles/Companies.scss";
import NttLogo from "../assets/NttData.jpg";
import Capgemini from "../assets/Capgemini.png";
import HM from "../assets/HM.png";
import IBM from "../assets/IBM.png";

const companies = [
  { name: "IBM", logo: IBM },
  { name: "Infosys", logo: NttLogo },
  { name: "TCS", logo: Capgemini },
  { name: "Capgemini", logo: HM },
];

const Companies = () => {
  return (
    <div className="companies-container">
      <h1>Companies I've Collaborated With</h1>
      <p className="intro-text">
        I'm proud to have collaborated with some awesome companies:
      </p>
      <div className="companies-logos">
        {companies.map((company, index) => (
          <div className="company-logo" key={index}>
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;

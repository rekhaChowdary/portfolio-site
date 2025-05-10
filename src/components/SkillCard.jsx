import React from "react";
import "../styles/SkillCard.scss";

const SkillCard = ({ image, name }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={name} className="skill-card-image" />
      <p className="skill-card-name">{name}</p>
    </div>
  );
};

export default SkillCard;

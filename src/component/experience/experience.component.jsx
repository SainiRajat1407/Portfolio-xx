import React from "react";
import "./experience.styles.scss";
import backgrondImage from "../../asset/images/backgroundimages/experiencebackground.jpg";
import data from "../../data/details.json";
import ExperienceCarousel from "./MaterialUiCard.component";

const Experience = () => {
  return (
    <div className="experience-container" id="Experience">
      <div className="experience-details-container">
        {data.experiences.map((item, index) => {
          return <ExperienceCarousel item={item} key={index} />;
        })}
      </div>
      <img
        src={backgrondImage}
        alt=""
        className="experience-background-image"
      />
    </div>
  );
};

export default Experience;

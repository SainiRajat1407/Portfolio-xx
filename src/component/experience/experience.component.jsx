import React from "react";
import "./experience.styles.scss";
import ExperienceCarousel from './carousel/Carousel.component'


const Experience = () => {
    
  return (
    <div className="experience-container" id="Experience">
      <div className="experience-heading">Work Experience</div>
      <div className="experience-details-container">
        <ExperienceCarousel />
        </div>
    </div>
  );
};

export default Experience;

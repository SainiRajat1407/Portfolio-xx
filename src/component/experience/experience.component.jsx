import React from "react";
import "./experience.styles.scss";
import ExperienceCarousel from "./carousel/Carousel.component";
import backgrondImage from "../../asset/images/backgroundimages/experiencebackground.jpg";


const Experience = () => {

  return (
    <div
      className="experience-container"
      id="Experience"
     
    >
      <div
        className="experience-heading"

      >
        Work Experience
      </div>
      <div
        
        className="experience-details-container"
      >
        <ExperienceCarousel />
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

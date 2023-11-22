import React from "react";
import "./experience.styles.scss";
import ExperienceCarousel from './carousel/Carousel.component'
import backgrondImage from '../../asset/images/backgroundimages/experiencebackground.jpg'
import ScrollContext from "../../context/scroll/scrollContext";

const Experience = () => {
  const scrollTracker = React.useContext(ScrollContext)
  const scrollY = scrollTracker[0];
  return (
    <div className="experience-container" id="Experience" >
      <div className="experience-heading" style={{
        position: scrollY <= 1826 ? 'absolute' : "fixed",
        top: scrollY >= 1826 ? "205px" : ""
      }}>Work Experience</div>
      <div style={{
        position: scrollY <= 1826 ? 'absolute' : "fixed",
        top: scrollY >= 1826 ? "245px" : ""
      }} className="experience-details-container">
        <ExperienceCarousel />
      </div>
      <img style={{
        position: scrollY <= 1826 ? 'absolute' : "fixed",
        top: scrollY >= 1826 ? "75px" : ""
      }} src={backgrondImage}
        alt="" className="experience-background-image" />
    </div>
  );
};

export default Experience;

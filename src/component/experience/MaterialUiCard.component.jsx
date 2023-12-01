import React from "react";
import { motion, useDragControls } from "framer-motion";

const ExperienceCarousel = (props) => {
  const { id, jobTitle, startDate, endDate, company, description } = props.item;
  const { controls } = useDragControls();
  const dragConstraints = {
    left: -200, 
    right: 200, 
    top: -100,
    bottom: 100,
  };
  return (
    <motion.div
      key={id}
      className="experience-card"
      drag
      dragControls={controls}
      dragConstraints={dragConstraints}
      whileInView={{ opacity: 1, x: 0 , y: 0}}
      style={{ zIndex: `${id * 2}`, touchAction: "none" }}
    >
      <div className="job-heading">{jobTitle}</div>
      <div className="job-time">
        {startDate} - {endDate}
      </div>
      <div className="job-company">{company}</div>
      <div className="job-description">
        {description.map((item, index) => {
          return <div>{item}</div>;
        })}
      </div>
    </motion.div>
  );
};

export default ExperienceCarousel;

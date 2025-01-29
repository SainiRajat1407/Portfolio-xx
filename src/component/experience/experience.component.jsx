import React from "react";
import "./experience.styles.scss";
import data from "../../data/details.json";
import { motion } from "framer-motion";


const Experience = () => {
  return (
    <div className="experience-container" id="Experience">

      <motion.div className="experience-heading-top"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
        Work Experience
      </motion.div>


      <div className="experience-details-container">
        {data.experiences.map((item) => {
          return (
            <motion.div
              key={item.id}
              className={`experience-card`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="job-heading">{item.jobTitle}</div>
              <div className="job-time">
                {item.startDate} - {item.endDate}
              </div>
              <div className="job-company">{item.company}</div>


              <div className="job-description">
                {item.description.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

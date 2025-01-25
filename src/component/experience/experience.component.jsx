import React from "react";
import "./experience.styles.scss";
import data from "../../data/details.json";
import { GoRepoPush } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import ScrollContext from "../../context/scroll/scrollContext";


const Experience = () => {
  const [isOverlayed, setIdOverlayed] = React.useState(true);
  const scrollContext = React.useContext(ScrollContext);

  const [overlays, setOverlays] = React.useState({
    1: false,
    2: false,
    3: false,
  });

  const handleStateChange = (id) => {
    setOverlays((prevOverlays) => ({
      ...prevOverlays,
      [id]: true,
    }));
  };

  return (
    <div className="experience-container" id="Experience">

      <div className="experience-heading-top">
        Work Experience
      </div>

      <div className="experience-details-container">
        {data.experiences.map((item) => {
          return (
            <motion.div
              key={item.id}
              className={`experience-card ${
                overlays[item.id + 1] ? "overlay" : ""
              }`}
            >
              <div className="job-heading">{item.jobTitle}</div>
              <div className="job-time">
                {item.startDate} - {item.endDate}
              </div>
              <div className="job-company">{item.company}</div>
              {isOverlayed && (
                <GoRepoPush
                  onClick={(e) => {
                    handleStateChange(item.id + 1);
                    setIdOverlayed(!isOverlayed);
                  }}
                  className="job-popup"
                />
              )}
              {!isOverlayed && (
                <IoMdClose
                  style={{ fontSize: "100px" }}
                  onClick={() => {
                    setOverlays({ 1: false, 2: false, 3: false });
                    setIdOverlayed(!isOverlayed);
                  }}
                  className="job-popup"
                />
              )}
              <div className="job-description">
                {item.description.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
     

      {/* <div
        className="experience-heading-top"
        style={{
          left:
            scrollInVh > 165 && scrollInVh < 220
              ? `${scrollInVh - 165}vw`
              : "0",
          top: "0",
        }}
      >
        Experience
      </div> */}
    </div>
  );
};

export default Experience;

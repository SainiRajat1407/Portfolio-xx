import React from "react";
import "./experience.styles.scss";
import data from "../../data/details.json";
import { GoRepoPush } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import ScrollContext from "../../context/scroll/scrollContext";
import ThemeContext from "../../context/theme/themeContext";
import topBackground from "../../asset/images/backgroundimages/experiencebackground/topPart.png";
import bottomBackground from "../../asset/images/backgroundimages/experiencebackground/bottompart.png";
import DeviceContext from "../../context/deviceTracker/deviceContext";
import backsky from "../../asset/images/backgroundimages/experiencebackground/backgroundnightsky.jpg";
import mounstainForeground from "../../asset/images/backgroundimages/experiencebackground/mountainforground.png";
import ThemeToggle from "../themeChangeCompnents/themeChange.component";
const Experience = () => {
  const [isOverlayed, setIdOverlayed] = React.useState(true);
  const scrollContext = React.useContext(ScrollContext);
  const scrollInVh = scrollContext[2];
  const themeContext = React.useContext(ThemeContext);
  const deviceContext = React.useContext(DeviceContext);
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
      <div className="experience-details-container">
        {data.experiences.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              className={`experience-card ${
                overlays[item.id + 1] ? "overlay" : ""
              }`}
              style={{backgroundColor : themeContext.themeTwo ? "#161A30" : "rgba(0, 0, 0, 0.798)"}}
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
      <AnimatePresence>
        {themeContext["themeOne"] && (
          <>
            <motion.img
              src={topBackground}
              alt=""
              className="experience-background-image"
              initial ={{z: 0 , x : 0}}
              animate={{
                filter: "brightness(0.8)",
                x: [deviceContext[0],0],
                transition: { duration: 1, type: "spring" },
              }}
              exit={{
                filter: "brightness(0.2)",
                x: deviceContext[0],
             
                transition: { duration: 1, type: "spring" , delay : 1},
              }}
            />
            <motion.img
              src={bottomBackground}
              alt=""
              className="experience-background-image"
              animate={{
                filter: "brightness(0.8)",
                x: [-deviceContext[0], 0],
                transition: { duration: 1, type: "spring", delay: 1 },
              }}
              exit={{ filter: "brightness(0.2)", x: -deviceContext[0], transition: { duration: 1, type: "spring" } }}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {themeContext["themeTwo"] && (
          <>
            <motion.img
              src={backsky}
              alt=""
              className="experience-background-image"
              animate={{
                filter: "brightness(0.8)",
                x : [-deviceContext[0],0],
                transition: { duration: 0.9, type: "spring", delay: 1 },
              }}
              exit={{
                filter: "brightness(0.2)",
                x: -deviceContext[0],
                transition: { duration: 0.9, type: "spring" },
              }}
            />
            <motion.img
              src={mounstainForeground}
              alt=""
              className="experience-background-image"
              animate={{
                filter: "brightness(0.8)",
                x: [deviceContext[0], 0],
                transition: { duration: 1, type: "spring" },
              }}
              exit={{
                filter: "brightness(0.2)",
                x: deviceContext[0],
                transition: { duration: 1,  type: "spring", delay   : 1 },
              }}
            />
          </>
        )}
      </AnimatePresence>

      <div
        className="experience-heading-top"
        style={{
          left:
            scrollInVh > 110 && scrollInVh < 180
              ? `${scrollInVh - 110}vw`
              : "0",
          top: "40px",
        }}
      >
        My Experience
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Experience;

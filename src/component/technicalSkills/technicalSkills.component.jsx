import React from "react";
import "./technicalSkills.styles.scss";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { BsFiletypeJson } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";

import {
  SiCss3,
  SiFirebase,
  SiPostman,
  SiJunit5,
  SiEclipseide,
  SiApachenetbeanside,
} from "react-icons/si";
import { motion } from "framer-motion";
import ScrollContext from "../../context/scroll/scrollContext";
import DeviceContext from "../../context/deviceTracker/deviceContext";
import ThemeContext from "../../context/theme/themeContext";


const iconsFirstArray = [
  <FaReact />,
  <FiGithub />,
  <FaNode />,
  <SiMysql />,
  <RiBootstrapLine />,
  <BsFiletypeJson />,
  <FaJava />,
  <BiLogoSpringBoot />,
];
const iconsSecondArray = [
  <SiJunit5 />,
  <SiEclipseide />,
  <TbBrandVscode />,
  <SiApachenetbeanside />,
  <SiPostman />,
  <SiFirebase />,
  <SiCss3 />,
];

const Skills = () => {
  const scrollContext = React.useContext(ScrollContext);
  const scrollInVh = scrollContext[2];



  //theme context
  const themeContext = React.useContext(ThemeContext);


  return (
    <div
      className="technical-skills-main-container"
      id="Technical"
    >
       <div className="icon-technical-container-heading">
          Technical Skills
        </div>

      <div className="icon-technical-container">
       
        {iconsFirstArray.map((icon, index) => {
          return (
            <div
              className="technical-skill"
              key={index}
              style={{
                left:
                  scrollInVh < 46
                    ? `${(index - 5) * 12}vw`
                    : scrollInVh > 45 && scrollInVh < 160
                    ? `${index * 12 + (scrollInVh - 104)}vw`
                    : ``,
                top: "-24vh",
              }}
            >
              <motion.div
                className={`technical-skill-sub-container`}
                whileHover={{ scale: 1.4 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
              >
                {icon}
              </motion.div>
            </div>
          );
        })}
        {iconsSecondArray.map((icon, index) => {
          return (
            <div
              className="technical-skill"
              key={index}
              style={{
                right:
                  scrollInVh < 55
                    ? `${(index - 3.5) * 12}vw`
                    : scrollInVh > 54 && scrollInVh < 160
                    ? `${index * 12 + (scrollInVh - 96)}vw`
                    : ``,
       
              }}
            >
              <motion.div
                className={`technical-skill-sub-container`}
                whileHover={{ scale: 1.4 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
              >
                {icon}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* <AnimatePresence>
        {themeContext["themeOne"] && (
          <motion.img
            src={rockBackgrond}
            alt=""
            className="skill-rock-background"
            initial={{ x: 0 }}
            animate={{ opacity: 1, x: 0, filter: "brightness(0.8)" }}
            exit={{ opacity: 0, x: 0, filter: "brightness(0.2)" }}
            variants={handleSkillsBackground}
            transition={{ duration: 2, delay: 1, type: "spring" }}
          />
        )}
      </AnimatePresence> */}

      {/* <AnimatePresence>
        {themeContext["themeTwo"] && (
          <motion.img
            src={backgroundTwo}
            alt=""
            className="skill-rock-background"
            initial={{ x: 0 }}
            animate={{ opacity: 1, x: 0, filter: "brightness(0.8)" }}
            exit={{ opacity: 0, x: 0, filter: "brightness(0.2)" }}
            variants={handleSkillsBackground}
            transition={{ duration: 2, delay: 1, type: "spring" }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {themeContext["themeOne"] && (
          <motion.img
            src={rockmiddle}
            alt=""
            className="skill-rock-middle"
            style={{ left: scrollInVh > 129 ? ` -${scrollInVh - 129}vh` : 0 }}
            initial={{ x: 0 }}
            animate={{
              opacity: 1,
              x: [-deviceContext[0], 0],
              y: deviceContext[0] < 979 ? 50 : 10,
              filter: "brightness(0.8)",
            }}
            transition={{ duration: 1.5 }}
            exit={{ x: -deviceContext[0], filter: "brightness(0.2)" }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {themeContext["themeTwo"] && (
          <>
            <motion.img
              src={leftHill}
              alt=""
              className="skill-rock-middle"
              style={{
                left: scrollInVh > 100 ? `-${scrollInVh - 100}vw` : "0",
                height:
                deviceContext[0] > 979
                  ? `80vh`
                  : deviceContext[0] < 980 && deviceContext[0] > 670 
                  ? `80vh`:
                  deviceContext[0] < 671 ?
                  "60vh"
                  : "100%",
              width:
                deviceContext[0] > 979
                  ? `120vw`
                  : deviceContext[0] < 980 && deviceContext[0] > 670
                  ? "150vw":
                  deviceContext[0] < 670 ?
                  "260vw"
                  : "100%",
              }}
              initial={{ x: 0, y: 5 }}
              animate={{
                opacity: 1,
                x:  [-deviceContext[0], 0],
                y:  5,
                filter: "brightness(0.8)",
              }}


              transition={{ duration: 1 }}
              exit={{ x: -deviceContext[0], filter: "brightness(0.2)" }}
            />
            <motion.img
              src={rightHill}
              alt=""
              className="skill-rock-middle"
              style={{
                height:
                deviceContext[0] > 979
                  ? `80vh`
                  : deviceContext[0] < 980 && deviceContext[0] > 670 
                  ? `80vh`:
                  deviceContext[0] < 671 ?
                  "60vh"
                  : "100%",
              width: "100%",
                  left: scrollInVh > 100 ? `${scrollInVh - 100}vw` : "0",
                }}
              initial={{ x: 0, y: 5 }}
              animate={{
                opacity: 1,
                y: 108,
                x : [deviceContext[0], 0],
                filter: "brightness(0.8)",
              }}


              transition={{ duration: 1 }}
              exit={{ x: deviceContext[0], filter: "brightness(0.2)" }}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {themeContext["themeOne"] && (
          <motion.img
            src={rockForeground}
            alt=""
            className="skill-rock-foreground"
            style={{ right: scrollInVh > 129 ? `${-(scrollInVh - 129)}vh` : "0" }}
            initial={{ x: 0 }}
            animate={{
              opacity: 1,
              x: [deviceContext[0], 0],
              filter: "brightness(0.8)",
            }}
            transition={{ duration: 1 }}
            exit={{ x: deviceContext[0], filter: "brightness(0.2)" }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {themeContext["themeTwo"] && (
          <motion.img
            src={brideforeground}
            alt=""
            className="skill-rock-foreground"
            style={{
              bottom: scrollInVh > 100 ? `-${scrollInVh - 100}vh` : 0,
              height:
                deviceContext[0] > 979
                  ? `80vh`
                  : deviceContext[0] < 980 && deviceContext[0] > 670 
                  ? `80vh`:
                  deviceContext[0] < 671 ?
                  "60vh"
                  : "100%",
              width:
                deviceContext[0] > 979
                  ? `120vw`
                  : deviceContext[0] < 980 && deviceContext[0] > 670
                  ? "150vw":
                  deviceContext[0] < 670 ?
                  "260vw"
                  : "100%",
            }}
            initial={{ x: 0 }}
            animate={{
              opacity: 1,
              y: [deviceContext[0], 0],
              filter: "brightness(0.8)",
              zIndex: -1,
            }}
            transition={{ duration: 1 }}
            exit={{ y: deviceContext[0], filter: "brightness(0.2)" }}
          />
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default Skills;

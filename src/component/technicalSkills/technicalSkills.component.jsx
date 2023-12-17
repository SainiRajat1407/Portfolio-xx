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
import rockForeground from "../../asset/images/backgroundimages/frontrock.png";
import rockmiddle from "../../asset/images/backgroundimages/nightmiddle.png";
import rockBackgrond from "../../asset/images/backgroundimages/nightbackground.png";
import {
  SiCss3,
  SiFirebase,
  SiPostman,
  SiJunit5,
  SiEclipseide,
  SiApachenetbeanside,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import ScrollContext from "../../context/scroll/scrollContext";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import DeviceContext from "../../context/deviceTracker/deviceContext";
import ThemeContext from "../../context/theme/themeContext";
import backgroundTwo from "../../asset/images/backgroundimages/skillsbackground/plainImage.png";
import brideforeground from "../../asset/images/backgroundimages/skillsbackground/bridgephoto.png";
import leftHill from "../../asset/images/backgroundimages/skillsbackground/lefthill.png";
import rightHill from "../../asset/images/backgroundimages/skillsbackground/righthill.png";
import handleSkillsBackground from "../../variants/technicalSkillsVariant";
import ThemeToggle from "../themeChangeCompnents/themeChange.component";

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
  const [arrowControl, setArrowControl] = React.useState(false);
  const scrollInVh = scrollContext[2];

  //Device Context
  const deviceContext = React.useContext(DeviceContext);

  //theme context
  const themeContext = React.useContext(ThemeContext);

  const handleScrollButton = (viewHeightPercentage) => {
    const scrollPosition = (viewHeightPercentage / 100) * window.innerHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
      duration: 1500,
    });
    setArrowControl(!arrowControl);
  };

  return (
    <div
      className="technical-skills-main-container"
      id="Technical"
      style={{
        height:
          scrollInVh > 100 && scrollInVh < 150
            ? `${200 - scrollInVh}vh`
            : scrollInVh < 101
            ? "100vh"
            : "50vh",
      }}
    >
      <div
        className="technical-up-arrow"
        style={{
          top: deviceContext[0] < 980 ? "-50px" : "30px",
        }}
        onClick={() => handleScrollButton(100)}
      >
        <BiSolidUpArrowCircle />
      </div>

      <div
        className="technical-up-arrow"
        style={{
          top: deviceContext[0] < 980 ? "85vh" : "90vh",
        }}
        onClick={() => handleScrollButton(10)}
      >
        <BiSolidDownArrowCircle />
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
                    : scrollInVh > 45 && scrollInVh < 150
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
                    : scrollInVh > 54 && scrollInVh < 150
                    ? `${index * 12 + (scrollInVh - 96)}vw`
                    : ``,
                top: "3vh",
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

      <AnimatePresence>
        {themeContext["themeOne"] && (
          <motion.img
            src={rockBackgrond}
            alt=""
            className="skill-rock-background"
            style={{ top: scrollInVh > 117 ? `-${scrollInVh - 118}vh` : 0 }}
            initial={{ x: 0 }}
            animate={{ opacity: 1, x: 0, filter: "brightness(0.8)" }}
            exit={{ opacity: 0, x: 0, filter: "brightness(0.2)" }}
            variants={handleSkillsBackground}
            transition={{ duration: 2, delay: 1, type: "spring"  }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {themeContext["themeTwo"] && (
          <motion.img
            src={backgroundTwo}
            alt=""
            className="skill-rock-background"
            style={{ top: scrollInVh > 117 ? `-${scrollInVh - 118}vh` : 0 }}
            initial={{ x: 0 }}
            animate={{ opacity: 1, x: 0, filter: "brightness(0.8)" }}
            exit={{ opacity: 0, x: 0, filter: "brightness(0.2)" }}
            variants={handleSkillsBackground}
            transition={{ duration: 2, delay: 1, type: "spring"  }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {themeContext["themeOne"] && (
          <motion.img
            src={rockmiddle}
            alt=""
            className="skill-rock-middle"
            style={{ top: scrollInVh > 99 ? ` -${scrollInVh- 100}vh` : 0 }}
            initial={{ x: 0 }}
            animate={{
              opacity: 1,
              x: [-deviceContext[0], 0], y : 10,
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
              style={{ left: scrollInVh > 100 ? `-${scrollInVh - 100}vh` : 0 , width :deviceContext[0] < 838 ?  `120vw` : "100%"}}
              initial={{ x: 0 , y : 5}}
              animate={{ opacity: 1, x: [-deviceContext[0],0], y : 13,filter: "brightness(0.8)" }}
              transition={{ duration: 1 }}
              exit={{ x: -deviceContext[0], filter: "brightness(0.2)" }}
            />
            <motion.img
              src={rightHill}
              alt=""
              className="skill-rock-middle"
              style={{ right: scrollInVh > 100 ? `-${scrollInVh - 100}vh` : 0, width :deviceContext[0] < 838 ?  `120vw` : "100%"} }
              initial={{ x: 0 }}
              animate={{ opacity: 1, x: [deviceContext[0],0],y : 180, filter: "brightness(0.8)" }}
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
            style={{ top: scrollInVh > 100 ? `-${scrollInVh - 100}vh` : 0 }}
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
            style={{ bottom: scrollInVh > 100 ? `-${scrollInVh - 100}vh` : 0 ,zIndex : 1, width :deviceContext[0] < 838 ?  `250vw` : "100%"}}
            initial={{ x: 0 }}
            animate={{ opacity: 1, y: [deviceContext[0],0], filter: "brightness(0.8)" }}
            transition={{ duration: 1 }}
            exit={{ y: deviceContext[0], filter: "brightness(0.2)" }}
          />
        )}
      </AnimatePresence>
      <ThemeToggle />
    </div>
  );
};

export default Skills;

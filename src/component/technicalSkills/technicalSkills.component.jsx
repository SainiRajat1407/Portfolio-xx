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
import { motion } from "framer-motion";
import ScrollContext from "../../context/scroll/scrollContext";
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
  <SiCss3 />];

const Skills = () => {
  const scrollContext = React.useContext(ScrollContext);
  const scrollY = scrollContext[0];
  const scrollInVh = scrollContext[2];
  console.log(scrollInVh, scrollY);
  return (
    <div className="technical-skills-main-container" id="Technical" style={{height : scrollInVh > 100 && scrollInVh < 150 ? `${200-scrollInVh}vh` : scrollInVh < 101 ? "100vh" : "50vh"}}>
      <div className="icon-technical-container">
        {iconsFirstArray.map((icon, index) => {
          return (
            <span
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
            </span>
          );
        })}
        {iconsSecondArray.map((icon, index) => {
          return (
            <span
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
            </span>
          );
        })}
      </div>
      <motion.img
        src={rockBackgrond}
        alt=""
        className="skill-rock-background"
        style={{ top: scrollInVh > 117 ? `-${scrollInVh - 118}vh` : 0 }}
      />
      <motion.img
        src={rockmiddle}
        alt=""
        className="skill-rock-middle"
        style={{ top: scrollInVh > 100 ? `-${scrollInVh - 100}vh` : 0 }}
      />
      <motion.img
        src={rockForeground}
        alt=""
        className="skill-rock-foreground"
        style={{ top: scrollInVh > 100 ? `-${scrollInVh - 100}vh` : 0 }}
      />
    </div>
  );
};

export default Skills;

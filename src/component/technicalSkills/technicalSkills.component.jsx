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
import ThemeContext from "../../context/theme/themeContext";


const iconsFirstArray = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <FiGithub />, name: "GitHub" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <RiBootstrapLine />, name: "Bootstrap" },
  { icon: <BsFiletypeJson />, name: "JSON" },
  { icon: <FaJava />, name: "Java" },
  { icon: <BiLogoSpringBoot />, name: "SpringBoot" },
];

const iconsSecondArray = [
  { icon: <SiJunit5 />, name: "JUnit 5" },
  { icon: <SiEclipseide />, name: "Eclipse" },
  { icon: <TbBrandVscode />, name: "VS Code" },
  { icon: <SiApachenetbeanside />, name: "NetBeans" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiCss3 />, name: "CSS3" },
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
       <motion.div className="icon-technical-container-heading"
       initial={{ opacity: 0, y: 80 }}
       whileInView={{ opacity: 1, y: 0 }}>
          Technical Skills
        </motion.div>

      <div className="icon-technical-container">
       
        {iconsFirstArray.map((iconobj, index) => {
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
                {iconobj.icon}
                {iconobj.name}

              </motion.div>
            </div>
          );
        })}
        {iconsSecondArray.map((iconobj, index) => {
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
                {iconobj.icon}
                {iconobj.name}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

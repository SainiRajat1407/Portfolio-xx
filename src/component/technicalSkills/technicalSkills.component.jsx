import React from 'react'
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
import mountainsunbackground from '../../asset/images/backgroundimages/mountaisun.jpg'
import {
  SiCss3, SiFirebase, SiPostman, SiJunit5, SiEclipseide, SiApachenetbeanside
} from "react-icons/si";
import {motion } from "framer-motion"

const iconsArray = [<FaReact />, <FiGithub />, <FaNode />,
<SiMysql />, <RiBootstrapLine />, <BsFiletypeJson />, <FaJava />, <BiLogoSpringBoot />,
<SiJunit5 />, <SiEclipseide />, <TbBrandVscode />, <SiApachenetbeanside />, <SiPostman />, <SiFirebase />, <SiCss3 />]

const Skills = () => {
  const [unhoveredSkills, setUnhoveredSkills] = React.useState(Array(iconsArray.length).fill(false));

  const handleMouseOver = (index) => {
    const newUnhoveredSkills = [...unhoveredSkills];
    newUnhoveredSkills[index] = true;
    setUnhoveredSkills(newUnhoveredSkills);
  };

  const handleMouseOut = (index) => {
    const newUnhoveredSkills = [...unhoveredSkills];
    newUnhoveredSkills[index] = false;
    setUnhoveredSkills(newUnhoveredSkills);
  };
  return (
    <div className="technical-skills-main-container" id='Technical' >
      <div className="technical-skills-heading"
        >
        Technical Skills
      </div>
      <div className="icon-technical-container"
      >
        {iconsArray.map((icon, index) => (
          <span className="technical-skill" key={index}>
            <motion.div
              className={`technical-skill-sub-container ${unhoveredSkills[index] ? 'icon-hovered' : 'icon-unhovered'}`}
               whileHover={{ scale: 1.4 }}
               whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
            >
              {icon}
            </motion.div>
          </span>
        ))}
      </div>
      <img className='technical-skill-background'
        
        src={mountainsunbackground} alt="mountainsun" />
    </div>
  );
};

export default Skills;
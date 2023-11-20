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
import {
  SiCss3, SiFirebase, SiPostman, SiJunit5, SiEclipseide, SiApachenetbeanside
} from "react-icons/si";

const iconsArray = [<FaReact />, <FiGithub />, <FaNode />,
<SiMysql />, <RiBootstrapLine />, <BsFiletypeJson />, <FaJava />, <BiLogoSpringBoot />,
<SiJunit5 />, <SiEclipseide />, <TbBrandVscode />, <SiApachenetbeanside />, <SiPostman />, <SiFirebase />, <SiCss3 />]

const Skills = () => {
  const [unhoveredskill, setUnhoveredskill] = React.useState(null);
    const handleMouseOver = () => {
      setUnhoveredskill(true);
      console.log(unhoveredskill);

    };
    const handleMouseOut = () => {
      setUnhoveredskill(false);
      console.log(unhoveredskill);
    };


  return (
    <div className="technical-skills-main-container" id='Technical'>
      <div className="technical-skills-heading">
        Technical Skills
      </div>
      <div className="icon-technical-container">
        {iconsArray.map((icon, index) => (
          <span className="technical-skill" key={index} >
            <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{icon}</span>
          </span>
        ))}
      </div>

    </div>
  )
};

export default Skills;
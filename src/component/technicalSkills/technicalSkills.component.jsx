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
import ScrollContext from '../../context/scroll/scrollContext';

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
  const scrollTracker = React.useContext(ScrollContext)
  const scrollY = scrollTracker[0];
  console.log(scrollY)

  return (
    <div className="technical-skills-main-container" id='Technical' style={{visibility : scrollY > 1820 ? "hidden" : 'visible'}}>
      <div className="technical-skills-heading"
        style={{ position: scrollY <= 600 ? 'absolute' : "fixed", top: scrollY <= 600 ? `-${scrollY * 0.18}px` : "211px" }}>
        Technical Skills
      </div>
      <div className="icon-technical-container"
        style={{ position: scrollY <= 600 ? 'absolute' : "fixed", top: scrollY <= 600 ? `-${scrollY * 0.15}px` : '230px' }}>
        {iconsArray.map((icon, index) => (
          <span className="technical-skill" key={index}>
            <span
              className={`technical-skill-sub-container ${unhoveredSkills[index] ? 'icon-hovered' : 'icon-unhovered'}`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut(index)}
            >
              {icon}
            </span>
          </span>
        ))}
      </div>
      <img className='technical-skill-background'
        style={{
          position: scrollY <= 600 ? 'absolute' : "fixed", top: scrollY <= 600 ? `-${scrollY * 0.41}px` : '75px', 
           filter: scrollY  >= 950  ?  `brightness(0.${1190 - scrollY*0.35})` : "1"
        }}
        src={mountainsunbackground} alt="mountainsun" />
    </div>
  );
};

export default Skills;
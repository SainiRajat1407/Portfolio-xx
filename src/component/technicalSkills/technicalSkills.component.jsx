import React from 'react'
import "./technicalSkills.styles.scss";
import {  FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";

const technicalSkils = [`React Js`, "NodeJS", "ExpressJS", "MongoDB", "MySQL", "Bootstrap", "MaterialUI" , "JSON", "RESTful API", "Java", "Spring Boot", "JUnit", "Git", "GitHub", "Postman", "Eclipse", "VS Code", "NetBeans", "Tomcat", "Firebase"];

const Skills = () => {

    return(
        <div className="technical-skills-main-container" id='Technical'
            >
                <div className="technical-skills-heading">
                    Technical Skills
                </div>
                <div className="icon-technical-container">
                  <FaReact />
                  <FiGithub />
                  <FaNode />
                  <SiMysql />
                  <RiBootstrapLine />
                </div>
            <div className="technical-skills-container">
            {technicalSkils.map((skill, index) => {
              return (
                <div key={index} className="technical-skill">
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
    )
}

export default Skills;
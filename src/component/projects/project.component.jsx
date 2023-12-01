import React from "react";
import "./project.styles.scss";
import data from "../../data/details.json";
import MaterialProjectCard from "./MaterialProjectCard.component";
import projectbackground from "../../asset/images/backgroundimages/projectsbackground.png";
import ScrollContext from "../../context/scroll/scrollContext";

const Project = () => {

  return (
    <div className="project-container" id="Project">
      <div
        className="project-heading"

      >
        Projects
      </div>
      <div
        className="project-details-container"
      
      >
        {data.projects.map((item) => {
          return (
            <div className="project-details-item" key={item.id}>
              <MaterialProjectCard item={item} />
            </div>
          );
        })}
      </div>
      <img
        src={projectbackground}
        alt="projectBackground"
        className="project-background-container"
      
      />
    </div>
  );
};

export default Project;

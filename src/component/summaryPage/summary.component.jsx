import "./summary.styles.scss";
import React from "react";
import { Container } from "@mui/material";
import rajatSecondPhoto from "../../asset/images/rajat.jpg";
import rajatFirstPhoto from "../../asset/images/rajat2.jpg";
import backgroundImage from '../../asset/images/backgroundimages/waterbackground.jpg'
import ScrollContext from "../../context/scroll/scrollContext";

const items = [
  <>
    An <span className="threed-effect-word">Energetic <span className="background-effect"></span></span> job seeker with strong
    organizational and time management skills
  </>,
  <>
    Passionate, <span className="threed-effect-word">Self-driven<span className="background-effect"></span></span> and
    enthusiast to pursue a career in Software Development.
  </>,
  <>
    Knowledge of <span className="threed-effect-word">Spring <span className="background-effect"></span></span> Framework and{" "}
    <span className="threed-effect-word">Relational <span className="background-effect"></span></span> Databases.
  </>,
  <>
    <span className="threed-effect-word">Linux/Unix <span className="background-effect"></span></span> Operating Systems, putty,
    WinSCP
  </>,
  <>
    Experience in <span className="threed-effect-word">Agile <span className="background-effect"></span></span> and Waterfall
    Methodologies, <span className="threed-effect-word">Scrum <span className="background-effect"></span></span> and JIRA
  </>,
  <>
    Implementing Software design principles,{" "}
    <span className="threed-effect-word">SDLC <span className="background-effect"></span></span> (unified agile and scrum)
  </>,
  <>
    Comfortable in <span className="threed-effect-word">collaborative <span className="background-effect"></span></span>{" "}
    environments, working alongside developers
  </>,
  <>
    Really into designing <span className="threed-effect-word">Wireframes <span className="background-effect"></span></span> and{" "}
    <span className="threed-effect-word">User-centered <span className="background-effect"></span></span> design
  </>,
];
const Summary = () => {

  const state = React.useContext(ScrollContext)
  const scrollY = state[0];
 
  return (
    <div className="summary-container" id="Summary" style={{visibility : scrollY >= 840 ? 'hidden' : 'visible' }}>
      <div
        className="summary-first-photo-container"
        style={{ left: `${-scrollY*1 + 130}px` , top : `${scrollY+260}px`  }}
      >
        <img
          src={rajatFirstPhoto}
          alt="rajat"
          className="summary-first-photo"
        />
      </div>
      <div className="summary-details-container" >
        <div className="name">Myself, Rajat Saini.</div>
        <Container className="summary-list">

          {items.map((line, index) => {
            return (
              <li key={index} className="summary-list-item">
                {line}
              </li>
            );
          })}
        </Container>
      </div>
      <div
        className="summary-second-photo-container"
        style={{ right: `${-scrollY + 110}px` , top : `${scrollY+260}px` }}
      >
        <img
          src={rajatSecondPhoto}
          alt="rajat"
          className="summary-second-photo"
        />
      </div>

      <img style={{top : `${scrollY}px` ,filter : `brightness(0.${790-scrollY})`,
       opacity : `0.${990-scrollY}`}} className="summary-background-image" src={backgroundImage} alt="waterbackgroud" />
    </div>
  );
};

export default Summary;

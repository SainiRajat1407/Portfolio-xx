import "./summary.styles.scss";
import React from "react";
import { Container } from "@mui/material";
import rajatSecondPhoto from "../../asset/images/rajat.jpg";
import rajatFirstPhoto from "../../asset/images/rajat2.jpg";

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
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    const handle = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    document.addEventListener("mousemove", handle);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousemove", handle);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="summary-container" id="Summary">
      <div
        className="summary-first-photo-container"
        style={{ top: `${-scrollY + 290}px` }}
      >
        <img
          src={rajatFirstPhoto}
          alt="rajat"
          className="summary-first-photo"
        />
      </div>
      <div className="summary-details-container">
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
        style={{ top: `${-scrollY + 290}px` }}
      >
        <img
          src={rajatSecondPhoto}
          alt="rajat"
          className="summary-second-photo"
        />
      </div>
    </div>
  );
};

export default Summary;

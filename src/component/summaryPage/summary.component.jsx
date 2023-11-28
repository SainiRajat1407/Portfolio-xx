import "./summary.styles.scss";
import React from "react";
import rajatFirstPhoto from "../../asset/images/rajat2.png";
import { motion } from "framer-motion";

const items = [
  <>
    An{" "}
    <span className="threed-effect-word">
      Energetic <span className="background-effect"></span>
    </span>{" "}
    job seeker with strong organizational and time management skills
  </>,
  <>
    Passionate,{" "}
    <span className="threed-effect-word">
      Self-driven<span className="background-effect"></span>
    </span>{" "}
    and enthusiast to pursue a career in Software Development.
  </>,
  <>
    Knowledge of{" "}
    <span className="threed-effect-word">
      Spring <span className="background-effect"></span>
    </span>{" "}
    Framework and{" "}
    <span className="threed-effect-word">
      Relational <span className="background-effect"></span>
    </span>{" "}
    Databases.
  </>,
  <>
    <span className="threed-effect-word">
      Linux/Unix <span className="background-effect"></span>
    </span>{" "}
    Operating Systems, putty, WinSCP
  </>,
  <>
    Experience in{" "}
    <span className="threed-effect-word">
      Agile <span className="background-effect"></span>
    </span>{" "}
    and Waterfall Methodologies,{" "}
    <span className="threed-effect-word">
      Scrum <span className="background-effect"></span>
    </span>
  </>,
  <>
    Implementing Software design principles,{" "}
    <span className="threed-effect-word">
      SDLC <span className="background-effect"></span>
    </span>{" "}
    (unified agile and scrum)
  </>,
  <>
    Comfortable in{" "}
    <span className="threed-effect-word">
      collaborative <span className="background-effect"></span>
    </span>{" "}
    environments, working alongside developers
  </>,
  <>
    Really into designing{" "}
    <span className="threed-effect-word">
      Wireframes <span className="background-effect"></span>
    </span>{" "}
    and{" "}
    <span className="threed-effect-word">
      User-centered <span className="background-effect"></span>
    </span>{" "}
    design
  </>,
];
const Summary = () => {
  return (
    <div className="summary-container" id="Summary">
      <div className="summary-first-photo-container">
        <motion.img
          src={rajatFirstPhoto}
          alt="rajat"
          className="summary-first-photo"
          animate={{ x: 0, opacity: 1, scale: 1, rotateY: 0 }}
          initial={{ x: -300, opacity: 0, scale: 0.5, rotateY: 360 }}
          transition={{ duration: 2.5 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <div className="summary-details-container">
        <div className="name">Myself, Rajat Saini.</div>
        <motion.Container
          className="summary-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.5,
          }}
        >
          {items.map((line, index) => {
            return (
              <li key={index} className="summary-list-item">
                {line}
              </li>
            );
          })}
        </motion.Container>
      </div>
    

    </div>
  );
};

export default Summary;

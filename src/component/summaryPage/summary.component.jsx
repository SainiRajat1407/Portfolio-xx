import "./summary.styles.scss";
import React from "react";
import ScrollContext from "../../context/scroll/scrollContext";
import profileImage from '../../asset/images/profile-removebg.png'



const Summary = () => {
  const scrollTracker = React.useContext(ScrollContext);
  const scrollInVh = scrollTracker[2];
  return (
    <div
      className="summary-container"
      id="Summary"
      style={{
        top: scrollInVh >= 0 && scrollInVh <= 99 ? "0" : "",
        visibility: scrollInVh > 49 ? "hidden" : "visible",
      }}
    >
      <div className="summary-content">
        <img src={profileImage} alt="profile" className="summary-image" />
        <div className="summary-intro">

          <div className="summary-heading">
            Full Stack Web Developer
          </div>
          <div className="summary-paragraph">
            Welcome to my portfolio website! I have completed my Advanced Diploma in Software Development
            from Sheridan college, with a passion for web
            development. Here, you&apos;ll find a showcase of my projects,
            experiences, and the skills I&apos;ve acquired throughout my studies.
            I love creating functional and beautiful websites that provide great
            user experiences.
          </div>
        </div>

      </div>

    </div>
  );
};

export default Summary;

import React from "react";
import "./education.styles.scss";
import data from "../../data/details.json";
import ScrollContext from "../../context/scroll/scrollContext";
import ThemeContext from "../../context/theme/themeContext";



const Education = () => {
  const scrollContext = React.useContext(ScrollContext);

  return (
    <div className="education-container" id="Education" >
      <div className="education-container-heading">
        Education
      </div>
      <div className="education-details-container">
        {data.education.map((item) => {
          return (
            <>
              <div key={item.id} className="education-card"  >
                <div className="education-card-heading">{item.type}</div>
                <div className="education-institution">{item.name}</div>
                <div className="education-location">
                  Location : {item.location}
                </div>
                <div className="education-major">Major : {item.major}</div>
                <div className="education-gpa">GPA : {item.gpa}</div>
                <div className="education-padding-year">
                  Passing Year : {item.passingYear}
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <img src="" alt="" className="education-background"/> */}
      {/* <div
        className="education-heading-top"
        style={{
          left:
            scrollInVh > 365 && scrollInVh < 401
              ? `${scrollInVh - 365}vw`
              : "0",
              color : themeContext['darkMode'] ? "white" : ""
        }}
      >
        My Education
      </div> */}
      
    </div>
  );
};

export default Education;

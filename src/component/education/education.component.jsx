import React from "react";
import "./education.styles.scss";
import data from "../../data/details.json";
import ScrollContext from "../../context/scroll/scrollContext";



const Education = () => {
  const scrollContext = React.useContext(ScrollContext);
  const scrollInVh = scrollContext[2];
  return (
    <div className="education-container" id="Education">
      <div className="education-details-container">
        {data.education.map((item, index) => {
          return (
            <>
              <div key={item.id} className="education-card" >
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
      <div
        className="education-heading-top"
        style={{
          left:
            scrollInVh > 310 && scrollInVh < 380
              ? `${scrollInVh - 310}vw`
              : "0",
        }}
      >
        My Education
      </div>
      
    </div>
  );
};

export default Education;

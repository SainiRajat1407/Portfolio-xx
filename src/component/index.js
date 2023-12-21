import React from "react";
import Header from "./header/header.component";
import Summary from "./summaryPage/summary.component";
import Footer from "./footer/footer.component";
import "./index.scss";
import Experience from "./experience/experience.component";
import Education from "./education/education.component";
import Project from "./projects/project.component";
import ThemeState from "../context/theme/themeState";
import Skills from "./technicalSkills/technicalSkills.component";
import ScrollState from "../context/scroll/scrollState";
import MousePositionState from "../context/mouseTracker/mouseState";
import DeviceState from "../context/deviceTracker/deviceState";


const Index = () => {
  return (
    <div className="index-container">
      <ThemeState>
        <MousePositionState>
          <ScrollState>
            <DeviceState>
              <Header />
              <Summary />
              <Skills />
              <Experience />
              <Project />
              <Education />
              <Footer />
            </DeviceState>
          </ScrollState>
        </MousePositionState>
      </ThemeState>
    </div>
  );
};

export default Index;

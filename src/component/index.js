import React from "react";
import Header from "./header/header.component";
import Summary from "./summaryPage/summary.component";
import Footer from "./footer/footer.component";
import "./index.scss";
import Experience from "./experience/experience.component";
import Project from "./projects/project.component";
import ThemeState from "../context/theme/themeState";
import Skills from "./technicalSkills/technicalSkills.component";
import ScrollState from "../context/scroll/scrollState";
import MousePositionState from "../context/mouseTracker/mouseState";
import DeviceState from "../context/deviceTracker/deviceState";
import Contact from "./contact/contact.component";


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
              <Project />
              <Experience />
              <Footer />
              <Contact/>
            </DeviceState>
          </ScrollState>
        </MousePositionState>
      </ThemeState>
    </div>
  );
};

export default Index;

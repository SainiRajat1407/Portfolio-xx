import React from "react";
import Header from "./header/header.component";
import Summary from "./summaryPage/summary.component";
import Footer from "./footer/footer.component";
import "./index.scss";
import Experience from "./experience/experience.component";
import Education from "./education/education.component";
import Project from "./projects/project.component";
import Contact from "./contact/contact.component";
import ThemeState from "../context/theme/themeState";
import Chatbot from "./chatbot/chatbot.component";
import Skills from "./technicalSkills/technicalSkills.component";
import Cursor from "./cursor/cursor.component";
import ScrollState from '../context/scroll/scrollState'

const Index = () => {
  return (
    <div className="index-container">
      <ThemeState>
        <ScrollState >
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Project />
        <Education />
        <Contact />
        <Footer />
        <Chatbot />
        <Cursor />
        </ScrollState>
      </ThemeState>
    </div>
  );
};

export default Index;

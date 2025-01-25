import React, { useContext } from "react";
import "./header.style.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

import ThemeContext from "../../context/theme/themeContext";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ScrollContext from "../../context/scroll/scrollContext";
import Contact from "../contact/contact.component";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";


const Header = () => {
  const theme = useContext(ThemeContext);
  const scrollTracker = React.useContext(ScrollContext);
  const scrollInVh = scrollTracker[2];
  const [isContactFormOpened, setIsContactFormOpened] = React.useState(false);
  const modeChange = () => {
    theme.setLightMode(!theme.lightMode);
    theme.setDarkMode(!theme.darkMode);
  };
 
  const handleScrollButton = (viewHeightPercentage) => {
    const scrollPosition = (viewHeightPercentage / 100) * window.innerHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
      duration: 1500,
    });
  };

  const toggleContactForm = () => {
    setIsContactFormOpened(!isContactFormOpened);
  };

  return (
    <>
      <div className="navigation-container">
        <div className="nav-functions">
          {theme.lightMode ? (
            <div className="theme" onClick={modeChange} style={{color: "yellow"}}>
              <LightModeIcon />
              <div className="under-heading">Light</div>
            </div>
          ) : (
            ""
          )}
          {theme.darkMode ? (
            <div className="theme" onClick={modeChange} >
              <NightlightRoundIcon />
              <div className="under-heading">Dark</div>
            </div>
          ) : (
            ""
          )}
          
          <div
            className="menu-item"
            onClick={() => handleScrollButton(100)}
            style={{
              color: scrollInVh > 99 && scrollInVh < 200 ? "yellow" : "white",
            }}
          >
            <AutoAwesomeIcon />
            <div className="icon-under-heading">Skills</div>
          </div>

          <div
            className="menu-item"
            onClick={() => handleScrollButton(201)}
            style={{
              color: scrollInVh > 200 && scrollInVh < 300 ? "yellow" : "white",
            }}
          >
            <BusinessCenterIcon />
            <div className="icon-under-heading">Experience</div>
          </div>
          <div
            className="menu-item"
            onClick={() => handleScrollButton(301)}
            style={{
              color: scrollInVh > 300 && scrollInVh < 400 ? "yellow" : "white",
            }}
          >
            <ChecklistIcon />
            <div className="icon-under-heading">Projects</div>
          </div>
          <div
            className="menu-item"
            onClick={() => handleScrollButton(400)}
            style={{
              color: scrollInVh > 399 && scrollInVh < 500 ? "yellow" : "white",
            }}
          >
            <HistoryEduIcon />
            <div className="icon-under-heading">Education</div>
          </div>

          <div className="menu-item" onClick={toggleContactForm}>
            <ConnectWithoutContactIcon />
            <div className="icon-under-heading">Contact</div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isContactFormOpened && (
          <motion.div
            key="modal"
            initial={{width: 0,  opacity: 0 ,zIndex: 0,position: "relative"}}
            animate={{width: "100vw",  opacity: 1 ,zIndex: 500,position: "fixed"}}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <Contact />
            <IoClose
              onClick={toggleContactForm}
              style={{
                position: "fixed",
                zIndex: 500,
                fontSize: "100px",
                right: "0",
                bottom: "0",
                color: "white",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

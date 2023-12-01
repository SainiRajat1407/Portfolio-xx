import React, { useContext } from "react";
import "./header.style.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import BrushIcon from "@mui/icons-material/Brush";
import ThemeContext from "../../context/theme/themeContext";
import { Link } from "react-scroll";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ScrollContext from "../../context/scroll/scrollContext";


const Header = () => {
  const theme = useContext(ThemeContext);
  const scrollTracker = React.useContext(ScrollContext);
  const scrollInVh = scrollTracker[2];

  const modeChange = () => {
    theme.setLightMode(!theme.lightMode);
    theme.setDarkMode(!theme.darkMode);
  };
  const themeChange = () => {
    theme.setThemeOne(!theme.themeOne);
    theme.setThemeTwo(!theme.themeTwo);
  };
  const handleScrollButton = (viewHeightPercentage) => {
    const scrollPosition = (viewHeightPercentage / 100) * window.innerHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth", 
      duration: 1500,
    });
  }


  return (
    <div className="navigation-container">
      
      <div className="nav-functions">
        {theme.lightMode ? (
          <div className="theme" onClick={modeChange}>
            <LightModeIcon />
            <div className="under-heading">Light</div>
          </div>
        ) : (
          ""
        )}
        {theme.darkMode ? (
          <div className="theme" onClick={modeChange}>
            <NightlightRoundIcon />
            <div className="under-heading">Dark</div>
          </div>
        ) : (
          ""
        )}
        {!theme.themeOne ? (
          <div className="theme" onClick={themeChange}>
            <ColorLensIcon />
            <div className="under-heading">theme 1</div>
          </div>
        ) : (
          ""
        )}
        {theme.themeTwo ? (
          <div className="theme" onClick={themeChange}>
            <BrushIcon />
            <div className="under-heading">theme 2</div>
          </div>
        ) : (
          ""
        )}
        <div
          className="menu-item"
          onClick={() => handleScrollButton(100)}
          style={{color : scrollInVh > 99 && scrollInVh < 151 ? "yellow" : "white"}}
        >
          <AutoAwesomeIcon />
          <div className="icon-under-heading" >Skills</div>
        </div>

        < div
          className="menu-item"
          onClick={() => handleScrollButton(151)}
          style={{color : scrollInVh > 150 && scrollInVh < 251 ? "yellow" : "white"}}
        >
          <BusinessCenterIcon />
          <div className="icon-under-heading">Experience</div>
        </div>
        <div
          className="menu-item"
          onClick={() => handleScrollButton(251)}
          style={{color : scrollInVh > 250 && scrollInVh < 351 ? "yellow" : "white"}}
          
        >
          <ChecklistIcon />
          <div className="icon-under-heading">Projects</div>
        </div>
        <div
          className="menu-item"
          onClick={() => handleScrollButton(351)}
          style={{color : scrollInVh > 350 && scrollInVh < 451 ? "yellow" : "white"}}
        >
          <HistoryEduIcon />
          <div className="icon-under-heading">Education</div>
        </div>
        <div
          className="menu-item"
          onClick={() => handleScrollButton(450)}
        >
          <ConnectWithoutContactIcon />
          <div className="icon-under-heading">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

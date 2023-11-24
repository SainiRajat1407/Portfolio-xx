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

const Header = () => {
  const theme = useContext(ThemeContext);
  const modeChange = () => {
    theme.setLightMode(!theme.lightMode);
    theme.setDarkMode(!theme.darkMode);
  };
  const themeChange = () => {
    theme.setThemeOne(!theme.themeOne);
    theme.setThemeTwo(!theme.themeTwo);
  };

  return (
    <div className="navigation-container">
      <div className="logo-container">
        <Link
          to="Summary"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <span>Rajat Saini</span>
        </Link>
      </div>
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
        <Link
          className="menu-item"
          activeClass="active-link"
          to="Technical"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
        >
          <AutoAwesomeIcon />
          <div className="icon-under-heading">Technical Skills</div>
        </Link>
        <Link
          className="menu-item"
          activeClass="active-link"
          to="Experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <BusinessCenterIcon />
          <div className="icon-under-heading">Experience</div>
        </Link>
        <Link
          className="menu-item"
          activeClass="active-link"
          to="Project"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <ChecklistIcon />
          <div className="icon-under-heading">Projects</div>
        </Link>
        <Link
          className="menu-item"
          activeClass="active-link"
          to="Education"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <HistoryEduIcon />
          <div className="icon-under-heading">Education</div>
        </Link>
        <Link
          className="menu-item"
          activeClass="active-link"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <ConnectWithoutContactIcon />
          <div className="icon-under-heading">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

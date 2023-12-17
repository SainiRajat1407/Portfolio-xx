import React from 'react'
import ColorLensIcon from "@mui/icons-material/ColorLens";
import BrushIcon from "@mui/icons-material/Brush";
import ThemeContext from '../../context/theme/themeContext';
import './themechange.styles.scss'
import DeviceContext from '../../context/deviceTracker/deviceContext';


const ThemeToggle = () => {
    const themeContext = React.useContext(ThemeContext);
  
    const themeChange = () => {
      themeContext.setThemeOne(!themeContext.themeOne);
      themeContext.setThemeTwo(!themeContext.themeTwo);
    }
  return (
    <>
    {themeContext.themeOne ? (
            <div className="theme-toggle-buttons" onClick={themeChange}>
              <ColorLensIcon />
              <div className="under-heading">theme 1</div>
            </div>
          ) : (
            ""
          )}
          {themeContext.themeTwo ? (
            <div className="theme-toggle-buttons" onClick={themeChange}>
              <BrushIcon />
              <div className="under-heading">theme 2</div>
            </div>
          ) : (
            ""
          )}
    </>
  )
}

export default ThemeToggle
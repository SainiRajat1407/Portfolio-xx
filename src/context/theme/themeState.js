import React from "react";
import ThemeContext from "./themeContext";

const ThemeState = (props) => {
    const [lightMode , setLightMode] = React.useState(true);
  const [darkMode , setDarkMode] = React.useState(false);
  const [themeOne , setThemeOne]  = React.useState(false);
  const [themeTwo , setThemeTwo]  = React.useState(false);
   return (
    <ThemeContext.Provider value={{lightMode, setLightMode , darkMode,setDarkMode, themeOne,setThemeOne, themeTwo , setThemeTwo}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;

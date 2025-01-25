import React from "react";
import ThemeContext from "./themeContext";

const ThemeState = (props) => {
  const [lightMode, setLightMode] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true);
  const [themeOne, setThemeOne] = React.useState(true);
  const [themeTwo, setThemeTwo] = React.useState(false);
  return (
    <ThemeContext.Provider
      value={{
        lightMode,
        setLightMode,
        darkMode,
        setDarkMode,
        themeOne,
        setThemeOne,
        themeTwo,
        setThemeTwo,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;

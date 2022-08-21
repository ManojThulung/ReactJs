import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ToggleContext = createContext();

// custome hooks
export const useThemeUpdate = function () {
  return useContext(ThemeContext);
};

export const useToggleUpdate = function () {
  return useContext(ToggleContext);
};

function ThemeProvider(props) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = function () {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ToggleContext.Provider value={toggleTheme}>
        {props.children}
      </ToggleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

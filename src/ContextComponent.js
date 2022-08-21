import React from "react";
// importing custome Hooks
import { useThemeUpdate, useToggleUpdate } from "./ThemeContext";
// import { ToggleContext, ThemeContext } from "./ThemeContext";

function ContextComponent() {
  //   const darkTheme = useContext(ThemeContext);
  //   const ToggleButton = useContext(ToggleContext);

  const darkTheme = useThemeUpdate();
  const ToggleButton = useToggleUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={ToggleButton}>Change Theme</button>
      <div style={themeStyles}>Context Component</div>
    </>
  );
}

export default ContextComponent;

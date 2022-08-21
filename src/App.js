import React from "react";
import ContextComponent from "./ContextComponent";
import ThemeProvider from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
    </>
  );
}

export default App;

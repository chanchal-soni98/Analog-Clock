import React from "react";

const ToggleMode = ({ toggleDarkMode, darkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ToggleMode;

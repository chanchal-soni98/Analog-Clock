import React, { useState, useEffect } from "react";
import "./App.css";
import BackgroundColorPicker from "./BackgroundColorPicker";
import FontStylePicker from "./FontStylePicker";
import ClockSizePicker from "./ClockSizePicker";
import TimezonePicker from "./TimezonePicker";
import Clock, { getTimeForTimezone } from "./Clock";
import TicklingPick from "./TicklingPick";
import ToggleMode from "./ToggleMode";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [backgroundColor, setBackgroundColor] = useState("#808080");
  const [fontStyle, setFontStyle] = useState("Times New Roman");
  const [darkMode, setDarkMode] = useState(false);
  const [clockSize, setClockSize] = useState(400);

  const [timezone, setTimezone] = useState("GMT+5:30");
  const [tickingMovement, setTickingMovement] = useState("distinct");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  // const getRotation = (handType) => {
  //   const targetTime = getTimeForTimezone(timezone);

  //   const degrees = {
  //     hour: (targetTime.getHours() % 12) * 30 + targetTime.getMinutes() * 0.5,
  //     minute: targetTime.getMinutes() * 6,
  //     second: targetTime.getSeconds() * 6,
  //   };
  //   return `rotate(${degrees[handType]}deg)`;
  // };

  const handleBackgroundColorChange = (e) => {
    const newColor = e.target.value;
    setBackgroundColor(newColor);
    const isDarkColor = isDark(newColor);
    setDarkMode(isDarkColor);
  };

  const isDark = (color) => {
    const hex = color.substring(1);
    const r = parseInt(hex.substring(0, 2), 16);

    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  const handleFontStyleChange = (e) => {
    setFontStyle(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.querySelector("body").style.backgroundColor = "antiquewhite";
    } else {
      document.querySelector("body").style.backgroundColor = "black";
    }
  };

  const handleSizeChange = (e) => {
    setClockSize(parseInt(e.target.value));
  };

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  const handleTickingMovementChange = (movementType) => {
    setTickingMovement(movementType);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <div className="options">
        <BackgroundColorPicker
          backgroundColor={backgroundColor}
          handleBackgroundColorChange={handleBackgroundColorChange}
        />
        <FontStylePicker
          fontStyle={fontStyle}
          handleFontStyleChange={handleFontStyleChange}
        />
        <ToggleMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <ClockSizePicker
          clockSize={clockSize}
          handleSizeChange={handleSizeChange}
        />
        <TimezonePicker
          timezone={timezone}
          handleTimezoneChange={handleTimezoneChange}
        />
        <TicklingPick
          tickingMovement={tickingMovement}
          handleTickingMovementChange={handleTickingMovementChange}
        />
      </div>

      <Clock
        time={time}
        darkMode={darkMode}
        fontStyle={fontStyle}
        backgroundColor={backgroundColor}
        clockSize={clockSize}
        tickingMovement={tickingMovement}
        timezone={timezone}
      />
    </div>
  );
};

export default App;

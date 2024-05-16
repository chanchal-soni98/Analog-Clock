// ClockSizePicker.js
import React from "react";

const ClockSizePicker = ({ clockSize, handleSizeChange }) => {
  return (
    <div className="sizePicker">
      <label htmlFor="clockSize">Clock Size:</label>
      <input
        type="range"
        id="clockSize"
        min="300"
        max="500"
        value={clockSize}
        onChange={handleSizeChange}
      />
    </div>
  );
};

export default ClockSizePicker;

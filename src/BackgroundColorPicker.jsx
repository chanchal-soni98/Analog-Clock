import React from "react";

const BackgroundColorPicker = ({
  backgroundColor,
  handleBackgroundColorChange,
}) => {
  return (
    <div className="colorPicker">
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="color"
        id="backgroundColor"
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
      />
    </div>
  );
};

export default BackgroundColorPicker;

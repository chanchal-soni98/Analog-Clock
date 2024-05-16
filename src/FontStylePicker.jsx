// // FontStylePicker.js
import React from 'react';

const FontStylePicker = ({ fontStyle, handleFontStyleChange }) => {
  return (
    <div className="fontStylePicker">
          <label htmlFor="fontStyle">Font Style:</label>
          <select
            id="fontStyle"
            value={fontStyle}
            onChange={handleFontStyleChange}
          >
            <option value="Times New Roman">Times New Roman</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
  );
};

export default FontStylePicker;

// TimezonePicker.js
import React from "react";


const TimezonePicker = ({ timezone, handleTimezoneChange }) => {
  return (
    <div className="timezonePicker">
      <label htmlFor="timezone">Timezone:</label>
      <select id="timezone" value={timezone} onChange={handleTimezoneChange}>
        <option value="GMT+5:30">India (GMT+5:30)</option>
        <option value="GMT-8:00">Los Angeles (GMT-8:00)</option>
        <option value="GMT-5:00">New York (GMT-5:00)</option>
        <option value="GMT+1:00">London (GMT+1:00)</option>
        <option value="GMT+9:00">Tokyo (GMT+9:00)</option>
      </select>
    </div>
  );
};

export default TimezonePicker;

import React from "react";

const TicklingPick = ({ tickingMovement, handleTickingMovementChange }) => {
  return (
    <div className="tickingMovement">
      <div>
        <input
          type="radio"
          id="tickingMovementDistinct"
          name="tickingMovement"
          value="distinct"
          onChange={() => handleTickingMovementChange("distinct")}
          checked={tickingMovement === "distinct"}
        />
        <label htmlFor="tickingMovementDistinct">Distinct</label>
      </div>
      <div>
        <input
          type="radio"
          id="tickingMovementSmooth"
          name="tickingMovement"
          value="smooth"
          onChange={() => handleTickingMovementChange("smooth")}
          checked={tickingMovement === "smooth"}
        />
        <label htmlFor="tickingMovementSmooth">Smooth</label>
      </div>
    </div>
  );
};

export default TicklingPick;

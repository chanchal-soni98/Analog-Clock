import React, { useEffect } from "react";
 // timezone mapping
const map = {
  "GMT+5:30": 5 * 60 * 60 * 1000 + 30 * 60 * 1000,
  "GMT-8:00": -7 * 60 * 60 * 1000,
  "GMT-5:00": -5 * 60 * 60 * 1000,
  "GMT+1:00": 60 * 60 * 1000,
  "GMT+9:00": 9 * 60 * 60 * 1000,
};

export const getTimeForTimezone = (timezone) => {
  const newDate = new Date();
  const gmt = newDate.getTime() - (5 * 60 * 60 * 1000 + 30 * 60 * 1000);
  const targetTime = new Date(gmt + map[timezone]);
  return targetTime;
};

// const getRotation = (handType) => {
//   const targetTime = getTimeForTimezone(timezone);

//   let degrees;
//   if (handType === "second") {
//     const totalMilliseconds = targetTime.getSeconds() * 1000 + targetTime.getMilliseconds();
//     degrees = (totalMilliseconds / 60000) * 360; // 60 seconds * 1000 milliseconds per second
//   } else {
//     degrees = {
//       hour: (targetTime.getHours() % 12) * 30 + targetTime.getMinutes() * 0.5,
//       minute: targetTime.getMinutes() * 6,
//     }[handType];
//   }
//   return `rotate(${degrees}deg)`;
// };

let initial = true;
let secondsDegree = 0;

const Clock = ({
  time,
  darkMode,
  fontStyle,
  backgroundColor,
  clockSize,
  tickingMovement,
  timezone,
}) => {
  //   const getRotation = (handType) => {
  //     const targetTime = getTimeForTimezone(timezone);

  //     let degrees;
  //     if (handType === "second") {
  //       const totalMilliseconds = targetTime.getSeconds() * 1000 + targetTime.getMilliseconds();
  //       degrees = (totalMilliseconds / 60000) * 360; // 60 seconds * 1000 milliseconds per second
  //     } else {
  //       degrees = {
  //         hour: (targetTime.getHours() % 12) * 30 + targetTime.getMinutes() * 0.5,
  //         minute: targetTime.getMinutes() * 6,
  //       }[handType];
  //     }
  //     return `rotate(${degrees}deg)`;
  //   };
  useEffect(() => {
    const id = setInterval(() => {
      if (initial) {
        secondsDegree = getTimeForTimezone(timezone).getSeconds() * 6;
        initial = false;
      } else {
        secondsDegree += 6;  // to fix bug ==> at 12 second hand is moving 12 to 6 to 1 and then starting from 12.1
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const getRotation = (handType) => {
    const targetTime = getTimeForTimezone(timezone);
    // console.log("targetTime", targetTime.getSeconds());

    const degrees = {
      hour: (targetTime.getHours() % 12) * 30 + targetTime.getMinutes() * 0.5,
      minute: targetTime.getMinutes() * 6,
      second: secondsDegree, //
    };
    return `rotate(${degrees[handType]}deg)`;
  };

  const getSecondsData = () => {
    const targetTime = getTimeForTimezone(timezone);
    return targetTime.getSeconds() * 6;
  };

  // Calculate hand sizes relative to clock size
  const hourHandSize = clockSize * 0.2;
  const minuteHandSize = clockSize * 0.3;
  const secondHandSize = clockSize * 0.35;
  const rad = clockSize * 0.5;
  return (
    <div className="clockContainer">
      <div
        className="main"
        style={{
          background: backgroundColor,
          height: `${clockSize}px`,
          width: `${clockSize}px`,
          borderRadius: `${rad}px`,
        }}
      >
        <div className="mainDiv">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
            <label
              key={index}
              style={{
                "--i": index + 1,
                color: darkMode ? "white" : "black",
                fontFamily: fontStyle,
              }}
            >
              {index + 1}
            </label>
          ))}
          <div className="hands">
            <div
              className="hand hour"
              style={{
                transform: getRotation("hour"),
                height: `${hourHandSize}px`,
              }}
            ></div>
            <div
              className="hand minute"
              style={{
                transform: getRotation("minute"),
                height: `${minuteHandSize}px`,
              }}
            ></div>
            <div
              className="hand second"
              style={{
                transform: getRotation("second"),
                height: `${secondHandSize}px`,
                transition:
                  tickingMovement === "smooth" ? "transform 1s ease" : "none",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;

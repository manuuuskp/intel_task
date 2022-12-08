import React from "react";

import { calculateStyle } from "./CircleProgress.helpers";
import styles from "./circle.module.css";

const CircleProgress = ({ range, circleWidth, strokeWidth, maxRange }) => {
  const [dashArray, dashOffset, radius] = calculateStyle(
    circleWidth,
    strokeWidth,
    range,
    maxRange
  );
  return (
    <div className={styles.circle__container}>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth - 2}
          r={circleWidth / 2 - 5}
          stroke="#819da8"
          fill="none"
          strokeDasharray={10}
        ></circle>

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={radius}
          className={styles.circle__background}
        ></circle>

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={radius}
          className={styles.circle__progress}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            transition: ".3s linear",
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          data-testid="circle_progress"
        ></circle>
        {/* <defs>
          <clipPath id="imgCircle"> */}
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius / 1.5}
          fill="#819da8"
        />
        {/* </clipPath>
        </defs> */}
        {/* <image
          width="200"
          height="200"
          xlinkHref="https://img.freepik.com/premium-vector/abstract-blue-wave-background_212889-1488.jpg?w=2000"
          clipPath="url(#imgCircle)"
        /> */}
        <text
          x="50%"
          y="50%"
          dy="8px"
          textAnchor="middle"
          className={styles.circle__text}
          type="true"
        >
          {range}
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;

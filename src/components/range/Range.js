import React, { useRef, useState } from "react";
import CircleProgress from "../circleProgress/CircleProgress";
import WidgetWrapper from "../utils/widgetwrapper/WidgetWrapper";

import styles from "./range.module.css";

const Range = () => {
  const [range, setRange] = useState(0);

  const setTrackColor = (e) => {
    setRange(e.target.value);

    const gradientValue =
      ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
    e.target.style.background = `linear-gradient(to right, #6ddbe6 0%, #6ddbe6 ${gradientValue}%, #fff ${gradientValue}%, #fff 100%)`;
  };

  return (
    <WidgetWrapper>
      <CircleProgress
        range={range}
        circleWidth={200}
        strokeWidth={5}
        maxRange={10}
      />
      <div className={styles.range__container}>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={range}
          onChange={setTrackColor}
          data-testid="range-input"
        />
      </div>
    </WidgetWrapper>
  );
};

export default Range;

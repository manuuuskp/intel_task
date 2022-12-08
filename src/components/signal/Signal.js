import React, { useState } from "react";
import WidgetWrapper from "../utils/widgetwrapper/WidgetWrapper";

import classes from "./signal.module.css";

const Signal = () => {
  const [strength, setStrength] = useState(1);

  const setSignalLevel = (lvl) => {
    setStrength(lvl);
  };

  const signalList = [
    {
      id: 1,
      path: "M141.259 288C136.823 288 133.921 292.647 135.867 296.633L151.811 329.281C154.735 335.266 163.265 335.266 166.189 329.281L182.133 296.633C184.079 292.647 181.177 288 176.741 288H141.259Z",
    },
    {
      id: 2,
      path: "M121.097 266.388C122.774 269.822 126.261 272 130.082 272H187.918C191.739 272 195.226 269.822 196.903 266.388L216.593 226.072C218.864 221.422 215.478 216 210.303 216H107.697C102.522 216 99.1362 221.422 101.407 226.072L121.097 266.388Z",
    },
    {
      id: 3,
      path: "M85.3857 193.266C87.3981 197.387 91.5829 200 96.1686 200H221.831C226.417 200 230.602 197.387 232.614 193.266L246.837 164.144C251.379 154.843 244.607 144 234.257 144H83.7432C73.3929 144 66.6212 154.843 71.1632 164.144L85.3857 193.266Z",
    },
    {
      id: 4,
      path: "M48.0305 116.777C51.3844 123.644 58.359 128 66.0018 128H251.998C259.641 128 266.616 123.644 269.969 116.777L280.594 95.0214C285.785 84.3924 278.046 72 266.217 72H51.7829C39.954 72 32.2149 84.3923 37.4058 95.0214L48.0305 116.777Z",
    },
    {
      id: 5,
      path: "M12.8677 44.7767C16.2217 51.6443 23.1962 56 30.839 56H287.161C294.804 56 301.778 51.6443 305.132 44.7767L315.757 23.0214C320.948 12.3924 313.209 2.6938e-05 301.38 2.58636e-05L16.6201 0C4.79123 -1.07437e-06 -2.94791 12.3923 2.24301 23.0214L12.8677 44.7767Z",
    },
  ];

  return (
    <WidgetWrapper>
      <div className={classes.signal__container}>
        <div className={classes.signal__strength}>
          <span data-testid="signal_value">
            {strength > 3 ? "High" : strength === 3 ? "Average" : "Low"}
          </span>
        </div>

        <div className={classes.signal__level}>
          <svg
            width="200"
            height="250"
            viewBox="0 0 318 334"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {signalList.map((item) => {
              return (
                <path
                  key={item.id}
                  d={item.path}
                  className={
                    strength >= item.id
                      ? classes.signal__filled
                      : classes.signal__unfilled
                  }
                  onClick={() => setSignalLevel(item.id)}
                  data-testid={`signal_bar_${item.id}`}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default Signal;

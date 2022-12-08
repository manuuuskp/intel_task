import React from "react";

import styles from "./widgetwrapper.module.css";

const WidgetWrapper = ({ children }) => {
  return <div className={styles.widgetwrapper}>{children}</div>;
};

export default WidgetWrapper;

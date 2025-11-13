import React from "react";
import styles from "./LeftAside.module.css";

const LeftAside = () => {
  return (
    <aside className={`${styles.aside} ${styles.left}`} aria-hidden="true" />
  );
};

export default LeftAside;

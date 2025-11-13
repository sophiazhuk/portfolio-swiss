import React from "react";
import styles from "./RightAside.module.css";

const RightAside = () => {
  return (
    <aside className={`${styles.aside} ${styles.right}`} aria-hidden="true" />
  );
};

export default RightAside;

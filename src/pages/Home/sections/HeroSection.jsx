import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => (
  <div className={styles.hero}>
    <div className={styles.name}>
      S<span className={styles.rainbow}>o</span>phia <br />
      Zhuk
    </div>
    <div className={styles.subtext}>
      <p>
        Hello, I'm Sophia, a computer science student at Western Washington
        University focusing on UX design and engineering.
      </p>
    </div>
  </div>
);

export default HeroSection;

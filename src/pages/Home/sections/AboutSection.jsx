import React from "react";
import styles from "./AboutSection.module.css";

const AboutSection = () => (
  <div className={styles.twoColumn}>
    <div className={styles.colOne}>
      <h1 className="sectionTitle">About Me</h1>
      <div className={`${styles.aboutSection} scrollbar`} id="scrollbar1">
        <p>Hi, I'm Sophia Zhuk.</p>
        <br />
        <p>
          I'm a Computer Science student at Western Washington University, where
          I also work as a Web Developer and conduct research with NEAT Lab, the
          Human-Computer Interaction research lab.
        </p>
        <br />
        <p>
          I enjoy exploring the intersection of psychology, computer science,
          and design. These experiences have sharpened my focus on accessible
          technology. My career interests lie in designing and building frontend
          experiences.
        </p>
        <br />
      </div>
      <br />
    </div>
    <div className={styles.colTwo}>
      <div className={styles.portrait}>
        <img
          src="/images/image 2.png"
          alt="Portrait of Sophia"
          decoding="async"
          fetchpriority="high"
        />
      </div>
    </div>
  </div>
);

export default AboutSection;

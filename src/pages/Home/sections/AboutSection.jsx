import React from "react";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={styles.twoColumn}>
      <div className={styles.colOne}>
        <h1 className="sectionTitle">About Me</h1>
        <div className={`${styles.aboutSection} scrollbar`} id="scrollbar1">
          <p>
            Hi, I'm <span className={styles.rainbow}>Sophia Zhuk</span>.
          </p>
          <p>
            I'm a Computer Science student at Western Washington University and
            work as a Web Developer maintaining and developing the university's
            website.
          </p>
          <p>
            I have experience in Front-End work from my UX Engineering
            internship at MCG Health, where I developed UI features and fixed
            UI bugs for health care software.
          </p>
          <p>
            I have also gained experience with NEAT Lab, where I would build
            front-ends with accessibility as the main focus and using
            human-centered design principles.
          </p>
          <br />
        </div>
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
};

export default AboutSection;

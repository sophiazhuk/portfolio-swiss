import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const navigate = useNavigate();

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
        <button
          onClick={() => navigate("/blog")}
          className={styles.blogButton}
          aria-label="Visit my blog"
        >
          Blog
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M12 17V11M9 14H15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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
};

export default AboutSection;

import React from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => (
  <div className={styles.twoColumn}>
    <div className={styles.colOne}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contact}>
        <p>Reach me at...</p>
        <span className={styles.email}>zhuksophia@gmail.com</span>
        <a
          href="/images/Sophia_Zhuk_3-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resume}
          aria-label="Open resume PDF in a new tab"
        >
          Resume
          <svg
            width="25"
            height="25"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M27 18.9583V27.7083C27 28.4819 26.6839 29.2237 26.1213 29.7707C25.5587 30.3177 24.7956 30.625 24 30.625H7.5C6.70435 30.625 5.94129 30.3177 5.37868 29.7707C4.81607 29.2237 4.5 28.4819 4.5 27.7083V11.6667C4.5 10.8931 4.81607 10.1513 5.37868 9.60427C5.94129 9.05729 6.70435 8.75 7.5 8.75H16.5M22.5 4.375H31.5M31.5 4.375V13.125M31.5 4.375L15 20.4167"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default ContactSection;

import React from "react";
import styles from "./ProjectLayout.module.css";

/**
 * Generic layout shell for a project detail page.
 * Provides header, left gutter, grid background, and body container.
 * Future: move styles to a dedicated CSS Module.
 */
const ProjectLayout = ({ title, children, onBack }) => {
  return (
    <div className={styles.projectPage}>
      <div className={styles.projectHeader}>
        <div className={styles.projectHeaderLeft}>
          {onBack && (
            <button
              className="back-button"
              onClick={onBack}
              aria-label="Back to Projects"
            >
              {/* Icon can be injected; simple arrow text for minimal dependency */}
              ←
            </button>
          )}
        </div>
        <h1 className={styles.projectTitle}>{title}</h1>
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectLeft} />
        <div className={styles.projectBody}>{children}</div>
      </div>
    </div>
  );
};

export default ProjectLayout;

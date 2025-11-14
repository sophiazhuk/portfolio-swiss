import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogLayout.module.css";
import "../../styles/blog.css";

/**
 * Generic layout shell for blog pages (home and individual posts).
 * Provides header, left gutter, grid background, and body container.
 * Matches the blueprint aesthetic of project pages.
 */
const BlogLayout = ({ title, children, onBack, showBackButton = true }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/blog");
    }
  };

  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="blog-header-left">
          {showBackButton && (
            <button
              className={styles.backButton}
              onClick={handleBack}
              aria-label="Back to Blog Home"
            >
              ←
            </button>
          )}
        </div>
        <h1 className="blog-title">{title}</h1>
      </div>
      <div className="blog-content">
        <div className="blog-left" />
        <div className="blog-body">{children}</div>
      </div>
    </div>
  );
};

export default BlogLayout;

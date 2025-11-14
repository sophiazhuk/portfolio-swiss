import React from "react";
import styles from "./BlogTags.module.css";

/**
 * Tag filtering component for blog posts
 * Displays all available tags and "All" option
 */
const BlogTags = ({ tags, activeTag, onTagClick }) => {
  return (
    <div className={styles.tagContainer}>
      <button
        className={`${styles.tagButton} ${activeTag === "all" ? styles.active : ""}`}
        onClick={() => onTagClick("all")}
        aria-pressed={activeTag === "all"}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`${styles.tagButton} ${activeTag === tag ? styles.active : ""}`}
          onClick={() => onTagClick(tag)}
          aria-pressed={activeTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default BlogTags;

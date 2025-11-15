import React from "react";
import styles from "./BlogSearch.module.css";

/**
 * Search component for filtering blog posts
 * Searches across title, excerpt, and tags
 */
const BlogSearch = ({ searchQuery, onSearchChange, resultCount }) => {
  const handleClear = () => {
    onSearchChange("");
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <svg
          className={styles.searchIcon}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search blog posts"
        />
        {searchQuery && (
          <button
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      {searchQuery && (
        <div className={styles.resultCount}>
          {resultCount === 0
            ? "No posts found"
            : `${resultCount} ${resultCount === 1 ? "post" : "posts"} found`}
        </div>
      )}
    </div>
  );
};

export default BlogSearch;

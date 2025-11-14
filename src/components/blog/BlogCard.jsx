import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogCard.module.css";

/**
 * Blog preview card component for displaying on the blog home page
 * Shows title, date, tags, excerpt, and read time
 */
const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(`/blog/${post.slug}`);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Read blog post: ${post.title}`}
    >
      <div className={styles.cardHeader}>
        <h2 className={styles.title}>{post.title}</h2>
        <span className={styles.readTime}>{post.readTime}</span>
      </div>
      <div className={styles.meta}>
        <span className={styles.date}>{formatDate(post.date)}</span>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className={styles.excerpt}>{post.excerpt}</p>
    </div>
  );
};

export default BlogCard;

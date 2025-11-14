import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogLayout from "../../components/blog/BlogLayout";
import BlogCard from "../../components/blog/BlogCard";
import BlogTags from "../../components/blog/BlogTags";
import { blogPosts, getAllTags, getPostsByTag } from "../../data/blogPosts";
import styles from "./BlogHome.module.css";
import Meta from "../../components/seo/Meta";

/**
 * Blog home page - displays all blog post previews with tag filtering
 */
const BlogHome = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const allTags = getAllTags();

  useEffect(() => {
    const posts = getPostsByTag(activeTag);
    // Sort by date (newest first)
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    setFilteredPosts(sortedPosts);
  }, [activeTag]);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Meta
        title="Blog - Sophia Zhuk"
        description="Thoughts, projects, and ideas from Sophia Zhuk"
        ogImage="/images/og/home.jpg"
        path="/blog"
      />
      <BlogLayout
        title="Blog"
        onBack={handleBackToHome}
        showBackButton={true}
      >
        {allTags.length > 0 && (
          <BlogTags
            tags={allTags}
            activeTag={activeTag}
            onTagClick={handleTagClick}
          />
        )}

        {filteredPosts.length > 0 ? (
          <div className={styles.blogGrid}>
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No blog posts yet. Check back soon!</p>
          </div>
        )}
      </BlogLayout>
    </>
  );
};

export default BlogHome;

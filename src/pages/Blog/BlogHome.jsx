import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogLayout from "../../components/blog/BlogLayout";
import BlogCard from "../../components/blog/BlogCard";
import BlogTags from "../../components/blog/BlogTags";
import BlogSearch from "../../components/blog/BlogSearch";
import { blogPosts, getAllTags, getPostsByTag } from "../../data/blogPosts";
import styles from "./BlogHome.module.css";
import Meta from "../../components/seo/Meta";

/**
 * Blog home page - displays all blog post previews with tag filtering and search
 */
const BlogHome = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const allTags = getAllTags();

  useEffect(() => {
    // First filter by tag
    let posts = getPostsByTag(activeTag);

    // Then filter by search query if present
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    // Sort by date (newest first)
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    setFilteredPosts(sortedPosts);
  }, [activeTag, searchQuery]);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
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
      <BlogLayout title="Blog" onBack={handleBackToHome} showBackButton={true}>
        <BlogSearch
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          resultCount={filteredPosts.length}
        />

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
            <p>
              {searchQuery
                ? `No posts found matching "${searchQuery}"`
                : "No blog posts yet. Check back soon!"}
            </p>
          </div>
        )}
      </BlogLayout>
    </>
  );
};

export default BlogHome;

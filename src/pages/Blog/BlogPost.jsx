import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import BlogLayout from "../../components/blog/BlogLayout";
import { getPostBySlug } from "../../data/blogPosts";
import styles from "./BlogPost.module.css";
import Meta from "../../components/seo/Meta";

/**
 * Individual blog post page - renders markdown content
 */
const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const post = getPostBySlug(slug);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        // Dynamically import the markdown file
        const response = await fetch(`/content/blog/${slug}.md`);
        if (!response.ok) {
          throw new Error("Blog post not found");
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (post) {
      loadMarkdown();
    } else {
      setError("Blog post not found");
      setLoading(false);
    }
  }, [slug, post]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <BlogLayout title="Loading...">
        <div className={styles.loading}>Loading blog post...</div>
      </BlogLayout>
    );
  }

  if (error || !post) {
    return (
      <BlogLayout title="Error">
        <div className={styles.error}>
          <p>{error || "Blog post not found"}</p>
          <button onClick={() => navigate("/blog")} className={styles.backBtn}>
            Return to Blog
          </button>
        </div>
      </BlogLayout>
    );
  }

  return (
    <>
      <Meta
        title={`${post.title} - Sophia Zhuk`}
        description={post.excerpt}
        ogImage="/images/og/home.jpg"
        path={`/blog/${slug}`}
      />
      <BlogLayout title={post.title}>
        <div className={styles.postMeta}>
          <span className={styles.date}>{formatDate(post.date)}</span>
          <span className={styles.readTime}>{post.readTime} read</span>
        </div>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogPost;

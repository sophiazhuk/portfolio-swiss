// Central blog data model for Blog page and blog routes
// Add new blog posts here to automatically show on the Blog home page

/**
 * @typedef {Object} BlogPost
 * @property {string} slug - URL-friendly id used in route e.g., /blog/{slug}
 * @property {string} title - Display title
 * @property {string} date - ISO date string (YYYY-MM-DD)
 * @property {string[]} tags - Array of tags for filtering (e.g., ["project", "music", "ideas", "vacation"])
 * @property {string} excerpt - Brief preview text for the blog card
 * @property {string} readTime - Estimated read time (e.g., "5 min")
 */

/** @type {BlogPost[]} */
export const blogPosts = [
  {
    slug: "building-this-blog",
    title: "Building a Blog System for My Portfolio",
    date: "2025-11-14",
    tags: ["project", "ideas"],
    excerpt:
      "How I built a custom blog system with markdown support, tag filtering, and a blueprint aesthetic that matches my portfolio design.",
    readTime: "6 min",
  },
  {
    slug: "example-post",
    title: "Welcome to My Blog",
    date: "2025-11-14",
    tags: ["ideas"],
    excerpt:
      "This is an example blog post to demonstrate how the blog system works. Learn about markdown formatting and blog features.",
    readTime: "3 min",
  },
  // Add your own blog posts below
  // {
  //   slug: "my-first-post",
  //   title: "My First Blog Post",
  //   date: "2025-11-14",
  //   tags: ["ideas", "project"],
  //   excerpt: "This is a brief preview of what the blog post is about. It gives readers a taste of the content.",
  //   readTime: "5 min"
  // },
  // {
  //   slug: "building-this-portfolio",
  //   title: "Building This Portfolio",
  //   date: "2025-11-10",
  //   tags: ["project", "ideas"],
  //   excerpt: "Thoughts and lessons learned while building my portfolio website with React and Swiss design principles.",
  //   readTime: "8 min"
  // }
];

/**
 * Get all unique tags from blog posts
 * @returns {string[]} Array of unique tags
 */
export const getAllTags = () => {
  const tagSet = new Set();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

/**
 * Filter blog posts by tag
 * @param {string} tag - Tag to filter by
 * @returns {BlogPost[]} Filtered blog posts
 */
export const getPostsByTag = (tag) => {
  if (!tag || tag === "all") return blogPosts;
  return blogPosts.filter(post => post.tags.includes(tag));
};

/**
 * Get a single blog post by slug
 * @param {string} slug - Blog post slug
 * @returns {BlogPost | undefined} Blog post or undefined if not found
 */
export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

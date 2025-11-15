# Blog Content

This directory contains all blog post markdown files.

## How to Add a New Blog Post

### Step 1: Create the Markdown File

Create a new `.md` file in this directory with your post slug as the filename.

**Example:** `my-awesome-post.md`

Add **frontmatter** at the top with all required metadata:

```markdown
---
slug: my-awesome-post
title: My Awesome Post
date: 2025-11-14
tags: [project, ideas]
excerpt: A brief summary of what this post is about. Keep it concise and engaging!
---

# Your Post Title

Your introduction paragraph goes here...

## Section Heading

Your content with **bold**, *italic*, and [links](https://example.com).

### Subsection

- Bullet points
- More points

\`\`\`javascript
// Code blocks work too
const example = "Hello world";
\`\`\`

> Blockquotes for important notes

![Image alt text](/images/blog/your-image.jpg)
```

### Step 2: Build the Blog Index

After creating your markdown file with frontmatter, run:

```bash
npm run blog:build
```

This scans all markdown files, extracts the frontmatter, and generates `src/data/blogPosts.js`.

### Step 3: Preview Locally

Start the dev server to see your post:

```bash
npm run dev
```

Navigate to `/blog` to see your post listed, or `/blog/my-awesome-post` to view it directly.

## Frontmatter Fields

All fields are **required** in the frontmatter:

- **slug**: URL-friendly identifier (must match filename, used in `/blog/{slug}`)
- **title**: Display title for the post
- **date**: Publication date in YYYY-MM-DD format
- **tags**: Array of tags for filtering (e.g., `[project, music, ideas]`)
- **excerpt**: Brief preview text shown on blog cards (keep under 200 characters)

### Add Images (Optional)

1. Place images in `/public/images/blog/`
2. Reference them in markdown: `![Alt text](/images/blog/your-image.jpg)`

### Available Tags

Use any tags you want! Common ones:
- `project` - Work projects and case studies
- `music` - Music-related posts
- `ideas` - Thoughts and concepts
- `vacation` - Travel and experiences
- `tutorial` - How-to guides
- `personal` - Personal reflections

### Markdown Features Supported

- Headings (h1-h6)
- **Bold** and *italic* text
- [Links](https://example.com)
- `Inline code` and code blocks
- Lists (ordered and unordered)
- > Blockquotes
- Images
- Horizontal rules

## Post Visibility

Posts are automatically sorted by date (newest first) on the blog home page. 

**Deployment Note**: The build script runs automatically before deployment:

```bash
npm run build  # Runs blog:build first, then vite build
```

This ensures `blogPosts.js` is always up-to-date with your markdown files.

- Display your post on `/blog` home page
- Create a dedicated page at `/blog/your-slug`
- Enable tag filtering
- Add SEO meta tags

## Tips

- **Keep slugs simple**: Use lowercase letters, numbers, and hyphens only
- **Write good excerpts**: They appear on the blog home page
- **Use descriptive titles**: They help with SEO and navigation
- **Tag thoughtfully**: Tags help readers find related content
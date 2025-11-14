# Blog Content

This directory contains all blog post markdown files.

## How to Add a New Blog Post

### Step 1: Create the Markdown File

Create a new `.md` file in this directory with your post slug as the filename.

**Example:** `my-awesome-post.md`

```markdown
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

### Step 2: Add Metadata

Open `/src/data/blogPosts.js` and add your post metadata to the `blogPosts` array:

```javascript
{
  slug: "my-awesome-post",           // Must match your .md filename
  title: "My Awesome Post",          // Display title
  date: "2025-11-14",                // ISO format (YYYY-MM-DD)
  tags: ["project", "ideas"],        // Array of tags for filtering
  excerpt: "A brief summary...",     // Preview text for blog cards
  readTime: "5 min"                  // Estimated reading time
}
```

### Step 3: Add Images (Optional)

If you want to include images:

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

Posts are automatically sorted by date (newest first) on the blog home page. The blog system will automatically:

- Display your post on `/blog` home page
- Create a dedicated page at `/blog/your-slug`
- Enable tag filtering
- Add SEO meta tags

## Tips

- **Keep slugs simple**: Use lowercase letters, numbers, and hyphens only
- **Write good excerpts**: They appear on the blog home page
- **Use descriptive titles**: They help with SEO and navigation
- **Tag thoughtfully**: Tags help readers find related content
- **Estimate read time**: Use ~200 words per minute as a guideline
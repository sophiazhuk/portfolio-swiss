---
slug: building-this-blog
title: Building a Blog
date: 2025-11-14
tags: [project, ideas]
excerpt: How I built a custom blog system with markdown support.
readTime: 6 min
---

# Building a Blog

The reason why I got into web dev in highschool was because I wanted to make a blog for myself. I wanted to make one to talk about music, projects, photography, and all my interests at the time.

Being new to web development at the time, instead of watching and reading tutorials, I would end up reverse engineering ancient blogs that I liked. This lead to the unfortunate reality that my first website was a table based layout.

Now, on my third iteration of my portfolio website, I wanted to add a blog!

## My goal:

- blog entries with markdown
- tag based filtering
- fully responsive across devices
- maintain accessibility

## Implementation

### Markdown

Rather than dealing with CMS, I opted for markdown files. This means I can write posts in my code editor, version control them, and deploy them alongside my code. Simple.

### Dynamic Content Loading

The posts are loaded using React Router and the Fetch API. Each markdown file lives in `/content/blog/` with frontmatter metadata at the top:

```markdown
---
slug: my-awesome-post
title: My Awesome Post
date: 2025-11-14
tags: [project, ideas]
excerpt: A brief summary of what this post is about. Keep it concise and engaging!
---

# Post Title

Content starts here...
```

A build script (`scripts/build-blog.js`) scans all markdown files, extracts the frontmatter using gray-matter, and generates `src/data/blogPosts.js`. All metadata lives directly in the markdown file.

The build script runs before every deployment.

# Building a Blog System for My Portfolio

The reason why I got into web dev in highschool was because I wanted to make a blog for myself. I wanted to make one to talk about music, projects, photography, and all my interests at the time. 

Being new to web development at the time, instead of watching and reading tutorials, I would end up reverse engineering ancient blogs that I liked. This lead to the unfortunate reality that my first website was a table based layout.

Now, on my third iteration of my portfolio website, I wanted to add a blog!

## My goal:

My goals:

- blog entries with markdown
- tag based filtering
- fully responsive across devices
- maintain accessibility

## Implementation

### Markdown

Rather than dealing with CMS, I opted for markdown files. This means I can write posts in my code editor, version control them, and deploy them alongside my code. Simple.


### Dynamic Content Loading

Blog posts are loaded dynamically using React Router and the Fetch API. Each markdown file lives in `/content/blog/`, and metadata is managed in a central `blogPosts.js` file:

```javascript
{
  slug: "building-this-blog",
  title: "Building a Blog System for My Portfolio",
  date: "2025-11-14",
  tags: ["project", "ideas"],
  excerpt: "How I built a custom blog system...",
  readTime: "5 min"
}
```
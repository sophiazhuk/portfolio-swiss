// Central project data model for Projects page and project routes
// Add new projects here to automatically show on the Projects list

/**
 * @typedef {Object} Project
 * @property {string} slug - URL-friendly id used in route e.g., /project/{slug}
 * @property {string} title - Display name
 * @property {string} date - Display date label
 * @property {string} description - Short summary for meta tags and cards
 * @property {string} ogImage - Path to Open Graph share image (relative to /public)
 * @property {boolean} [comingSoon] - If true, show as disabled/"coming soon"
 * @property {{ site?: string, repo?: string }} [links] - Optional external links
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "llm-intuitive-interfaces",
    title: "AI Curator",
    date: "04/2025",
    description:
      "AI-powered platform for exploring and curating civil rights oral history interviews from the Library of Congress.",
    ogImage: "/images/og/llm.jpg",
    links: {
      repo: "https://github.com/dustinmichels/lc-video-app",
    },
  },
  {
    slug: "buzz",
    title: "Bellingham Buzz",
    date: "02/2025",
    description:
      "A WordPress app helping Bellingham locals discover nightlife based on mood, location, and time of day.",
    ogImage: "/images/og/buzz.jpg",
    links: {
      site: "https://thebellinghambuzz.com",
      repo: "https://github.com/sophiazhuk/bellinghambuzz",
    },
  },
  {
    slug: "portfolio",
    title: "My Portfolio",
    date: "03/2025",
    description:
      "A modern portfolio showcasing my projects with Swiss-inspired design and motion elements.",
    ogImage: "/images/og/portfolio.jpg",
    links: { site: "https://sophiazhuk.com" },
  },
  // {
  //   slug: 'schedulator',
  //   title: 'Schedulator',
  //   date: '11/2024',
  // },
  {
    slug: "mitra",
    title: "Mitra",
    date: "05/2024",
    description:
      "A mentorship platform for autistic and neurodiverse college students, built with accessibility and inclusion at its core.",
    ogImage: "/images/og/mitra.jpg",
  },
  {
    slug: "vrnw",
    title: "Virtual Realty NW",
    date: "02/2021",
    description:
      "A professional real estate website featuring responsive design and custom photo galleries.",
    ogImage: "/images/og/vrnw.jpg",
  },
];

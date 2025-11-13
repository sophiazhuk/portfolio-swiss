import React from "react";

const LLMContent = () => (
  <>
    <p>
      This curator project is a React based web application powered
      by gpt 4o API for analyzing, exploring, and creating playlists from civil
      rights oral history interviews from the Library of Congress collection:
      <br />
      <a
        href="https://www.loc.gov/collections/civil-rights-history-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.loc.gov/collections/civil-rights-history-project
      </a> <br />
      The goal is to use the API to create a more intuitive interface for navigating large data sets.
    </p>
    <br />
    <p>
      The platform leverages the AI to automatically process interview
      transcripts, extracting structured metadata including summaries,
      timestamps, and keywords. These AI generated insights power the
      application's features for keyword-based searching, playlist creation,
      transcript summarization, and visualizations that help users explore
      connections between different interviews and topics.
    </p>
    <h2>My Role</h2>
    <p>
      My role this quarter was to assist Jack and Dustin, the creators of the
      project, with building some new tools for the project. This included a
      playlist generator, vector search, library, and glossary page.
    </p>
    <h2>Features</h2>
    <ul>
      <li>
        <h3>Playlist Curation</h3>
        Using the API, I worked on a playlist curator that parses through the
        large set of video interviews and retrieves clips relevant to the user's
        prompt.
        <div className="image-container">
          <div className="project-img ar-16x9">
            <img
              src="/images/llm/curate.gif"
              alt="Curation walkthrough animation"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </li>
      <li>
        <h3>Video Player</h3>
        Built a video player to display generated playlists in a streamlined
        way.
        <div className="image-container">
          <div className="project-img ar-16x9">
            <img
              src="/images/llm/playlists.gif"
              alt="Curation walkthrough animation"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </li>
      <li>
        <h3>Library</h3>
        Built a library to organize and search through large sets of playlists
        and clips with sorting functionality.
        <div className="image-container">
          <div className="project-img ar-16x9">
            <img
              src="/images/llm/library.gif"
              alt="Library walkthrough animation"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </li>
      <li>
        <h3>Glossary</h3>
        We also used the OpenAI API to extract glossary terms. This feature is
        useful because when you search a term, all results that contain
        reference to that term will show up.
        <div className="image-container">
          <div className="project-img ar-16x9">
            <img
              src="/images/llm/glossary.gif"
              alt="Library walkthrough animation"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </li>
    </ul>
    <br />
    <h2>Technologies</h2>
    <p>OpenAI API, React, Vite, Tailwind, Express.js</p>
  </>
);

export default LLMContent;

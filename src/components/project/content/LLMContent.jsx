import React from "react";

const LLMContent = () => (
  <>
    <p>
      <strong>My Role: </strong> Assisting in development.
    </p>
    <br />
    <p>
      The Civil Rights History Project is a React-based web application powered
      by Large Language Models (LLMs) for analyzing, exploring, and creating
      playlists from civil rights oral history interviews from the Library of
      Congress collection:
      <br />
      <a
        href="https://www.loc.gov/collections/civil-rights-history-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.loc.gov/collections/civil-rights-history-project
      </a>
    </p>
    <br />
    <p>
      The platform leverages LLMs to automatically process interview
      transcripts, extracting structured metadata including summaries,
      timestamps, and keywords. These AI-generated insights power the
      application's features for keyword-based searching, playlist creation,
      transcript summarization, and visualizations that help users explore
      connections between different interviews and topics.
    </p>
    <h2>My Role</h2>
    <p>
      My role this quarter was to assist Jack and Dustin, the creators of the
      project, with building some new tools for the project. This included a
      playlist generator.
    </p>
    <h2>Features</h2>
    <ul>
      <li>
        <h3>Playlist Curation</h3>
        Using the API, I worked on a playlist curator that parses through the
        large set of video interviews and retrieves clips relevant to the user's
        prompt.
      </li>
      <li>
        <h3>Video Player</h3>
        Built a video player to display generated playlists in a streamlined
        way.
      </li>
    </ul>
    <br />
    <h2>Technologies</h2>
    <p>OpenAI API, React, Vite, Tailwind, Express.js</p>
  </>
);

export default LLMContent;

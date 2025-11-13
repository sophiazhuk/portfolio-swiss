import React from "react";

const MitraContent = () => (
  <>
    <p>
      <strong>My Role: </strong> Student Researcher
    </p>
    <br />
    <p>
      Mitra is a social web platform for autistic and neurodiverse college
      students to connect with others, both autistic and non-autistic, in a
      mentor/mentee dynamic. I developed this project as part of the NEAT Lab’s
      Human-Computer Interaction research.
    </p>
    <br />
    <h2>My Role</h2>
    <p>
      I focused on frontend development and UI design, working closely with
      researchers to ensure the site was inclusive, accessible, and easy to use.
      I also worked on user flows and component systems to improve interaction
      design.
    </p>
    <br />
    <h2>Technology</h2>
    <p>Discourse, JavaScript, CSS, HTML</p>
    <br />
    <h2>Features</h2>
    <ul>
      <li>
        <h3>Profile System</h3> Each user can build a customizable profile that
        helps them find and connect with others on the platform.
      </li>
      <li>
        <h3>Accessibility</h3> Designed with WCAG guidelines in mind and tested
        with neurodiverse users to ensure comfort and usability.
      </li>
      <li>
        <h3>Onboarding & Matching</h3> Onboarding flows and questionnaire logic
        to match mentors and mentees based on interest and support preferences.
      </li>
    </ul>
    <br />
    <div className="image-container">
      <div className="project-img ar-16x9">
        <img
          src="/images/mitra/mitra1.png"
          alt="Mitra interface screenshot 1"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-img ar-16x9">
        <img
          src="/images/mitra/mitra2.png"
          alt="Mitra interface screenshot 2"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </>
);

export default MitraContent;

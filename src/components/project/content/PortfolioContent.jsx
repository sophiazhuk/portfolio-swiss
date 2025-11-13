import React from "react";

const PortfolioContent = () => (
  <>
    <div className="project-two-col">
      <div className="project-col-one">
        <p>
          <a
            href="https://sophiazhuk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            sophiazhuk.com
          </a>
        </p>
        <br />
        <p>
          This is my newest version of my portfolio website, where I showcase my
          projects and skills in my own personal style.
        </p>
        <br />
        <h2>Planning Phase</h2>
        <p>
          I refreshed my earlier portfolio to better match my current aesthetic.
          Inspired by the NYC subway design system—clear lines and motion cues—I
          created a modern, cohesive design that aligns with my style.
        </p>
        <br />
        <h2>Technology</h2>
        <p>Figma, React, CSS, JavaScript</p>
        <br />
        <h2>Features</h2>
        <ul>
          <li>
            <h3>Tracks</h3> Motion design inspired by transit lines; the navbar
            references line icons.
          </li>
          <li>
            <h3>Project Pages</h3> Blueprint-like pages to showcase planning and
            process.
          </li>
        </ul>
      </div>
      <div className="project-col-two">
        <div className="image-container">
          <div className="project-img ar-16x9">
            <img
              className="big-width"
              src="/images/portfolio/figma.png"
              alt="Figma design for portfolio"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PortfolioContent;

import React from "react";
import "../../styles/mainContent.css";
import Meta from "../../components/seo/Meta";
import { SITE_DESCRIPTION } from "../../config";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const HomePage = ({ activeSection }) => {
  const contentMap = {
    Sophia: <HeroSection />,
    About: <AboutSection />,
    Projects: <ProjectsSection />,
    Contact: <ContactSection />,
  };
  return (
    <>
      <Meta
        description={SITE_DESCRIPTION}
        ogImage="/images/og/home.jpg"
        path="/"
      />
      <main className="main-content">
        {contentMap[activeSection] || <h2>Content Not Found</h2>}
      </main>
    </>
  );
};

export default HomePage;

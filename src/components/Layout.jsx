import React from "react";
import Header from "./Header";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
// import MainContent from "./MainContent";
import HomePage from "../pages/Home/HomePage";
import ThemeToggle from "./ThemeToggle";
import GrainyBackground from "./GrainyBackground";
import Footer from "./Footer";
import "../styles/layout.css";
import "../styles/stars.css";
import TrackLines from "./ui/TrackLines";
import { useActiveSection } from "../hooks/useActiveSection";

const Layout = () => {
  const { activeSection, setActiveSection } = useActiveSection("Sophia");

  // Track line animation moved to <TrackLines /> for encapsulation.

  return (
    <div className="layout" data-active-section={activeSection.toLowerCase()}>
      {/* <GrainyBackground /> */}
      <ThemeToggle />
      <TrackLines activeSection={activeSection} />
      <Header
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      <div className="content">
        <LeftAside activeSection={activeSection} />
        <HomePage activeSection={activeSection} />
        <RightAside />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

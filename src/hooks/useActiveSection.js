import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Centralizes activeSection state plus URL state handoff.
export function useActiveSection(initial = "Sophia") {
  const [activeSection, setActiveSection] = useState(initial);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      setActiveSection(location.state.section);
      // Clean up location state to avoid repeated triggers.
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return { activeSection, setActiveSection };
}

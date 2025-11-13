import React, { useEffect } from "react";

// Renders the animated track lines background and re-triggers animation when activeSection changes.
const TrackLines = ({ activeSection }) => {
  useEffect(() => {
    const cPath = document.getElementById("cPath");
    if (cPath) {
      const animation = cPath.animate(
        [{ strokeDashoffset: 270 }, { strokeDashoffset: 0 }],
        { duration: 1200, easing: "ease", fill: "forwards" },
      );
      animation.cancel();
      animation.play();
    }
    const bPath = document.getElementById("bPath");
    if (bPath) {
      const animation = bPath.animate(
        [{ strokeDashoffset: 270 }, { strokeDashoffset: 0 }],
        { duration: 1500, easing: "ease", fill: "forwards" },
      );
      animation.cancel();
      animation.play();
    }
  }, [activeSection]);

  return (
    <div className="l-shape">
      <svg viewBox="0 0 200 100" preserveAspectRatio="none">
        <path id="cPath" d="M19.5,2.6v72.2c0,2.7,2.2,4.9,4.9,4.9h174.1" />
        <path id="bPath" d="M15.5,4.6v70.1c0,5,4,9,9,9h172" />
      </svg>
    </div>
  );
};

export default TrackLines;

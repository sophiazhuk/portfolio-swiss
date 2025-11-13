import React from "react";
import "./GrainyBackground.css";

const GrainyBackground = () => {
  return (
    <div className="grainy-background">
      <svg width="0" height="0">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="10"
            numOctaves="20"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </div>
  );
};

export default GrainyBackground;

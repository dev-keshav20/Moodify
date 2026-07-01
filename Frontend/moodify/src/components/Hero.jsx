import React, { useState } from "react";
import MoodDetector from "./MoodDetector";
import MoodSongs from "./MoodSongs";
import "../Styles/Hero.css";

const Hero = () => {
  const [mood, setMood] = useState("");

  return (
    <div className="hero-container">
      <MoodDetector setMood={setMood} />
      <MoodSongs mood={mood} />
    </div>
  );
};

export default Hero;
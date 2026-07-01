import React, { useEffect, useRef, useState } from "react";
import "../Styles/MoodSongs.css";
import { FaMusic } from "react-icons/fa";
import Songs from "./Songs";

const MoodSongs = ({ mood }) => {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!mood) return;

    const fetchSongs = async () => {
      try {
        const res = await fetch(
          `https://moodify-hajl.onrender.com/songs?mood=${mood}`,
        );
        const data = await res.json();

        setSongs(data.songs || []);
        setCurrentIndex(0);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSongs();
  }, [mood]);

  useEffect(() => {
    if (!audioRef.current || !songs.length) return;

    audioRef.current.src = songs[currentIndex].audio;
    audioRef.current.play().catch(() => {});
  }, [songs, currentIndex]);

  useEffect(() => {
    if (!audioRef.current) return;

    const handleEnded = () => {
      if (currentIndex < songs.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    };

    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      audioRef.current?.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex, songs]);

  return (
    <div className="moodSongs-container">
      <h1>
        <FaMusic /> Suggested Songs
      </h1>

      <Songs
        songs={songs}
        audioRef={audioRef}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default MoodSongs;

import React, { useEffect, useRef, useState } from "react";
import "../Styles/MoodSongs.css";
import { FaMusic } from "react-icons/fa";
import Songs from "./Songs";

const MoodSongs = ({ mood }) => {
  console.log(mood)
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const audioRef = useRef(new Audio());

  // Fetch songs according to mood
  useEffect(() => {
    if (!mood) return;

    const fetchSongs = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/songs?mood=${mood}`
        );

        const data = await res.json();

        setSongs(data.songs || []);
        setCurrentIndex(0);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSongs();
      console.log("Mood Received:", mood);
  }, [mood]);

  // Change song whenever currentIndex changes
  useEffect(() => {
    if (!songs.length) return;

    audioRef.current.src = songs[currentIndex].audio;

    audioRef.current.play().catch(() => {});
  }, [songs, currentIndex]);

  // Auto play next song
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      if (currentIndex < songs.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex, songs]);

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.src = "";
    };
  }, []);

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
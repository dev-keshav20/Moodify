import React from "react";
import "../Styles/Songs.css";
import SongsCard from "./SongsCard";

const Songs = ({
  songs,
  audioRef,
  currentIndex,
  setCurrentIndex,
}) => {
  if (!songs.length) {
    return (
      <div className="songs-container">
        <h2 >No Songs Found 😔</h2>
      </div>
    );
  }

  return (
    <div className="songs-container">
      {songs.map((song, index) => (
        <SongsCard
          key={song._id}
          song={song}
          index={index}
          songs={songs}
          audioRef={audioRef}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ))}
    </div>
  );
};

export default Songs;
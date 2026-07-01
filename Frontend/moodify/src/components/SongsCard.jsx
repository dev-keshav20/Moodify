import React from "react";
import "../Styles/SongsCard.css";

const SongsCard = ({ song, index, audioRef, currentIndex, setCurrentIndex }) => {
  return (
    <div className="song-card">
      <div className="info">
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>

      {currentIndex === index ? (
        <audio
          ref={audioRef}
          controls
          autoPlay
          style={{ width: "100%", marginTop: "15px" }}
        />
      ) : (
        <button
          onClick={() => setCurrentIndex(index)}
          className="play-btn"
        >
          Play
        </button>
      )}
    </div>
  );
};

export default SongsCard;
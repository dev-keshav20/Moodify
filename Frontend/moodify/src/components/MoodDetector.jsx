import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "../Styles/MoodDetector.css";

export default function MoodDetector({ setMood }) {
  const videoRef = useRef(null);
  const [currentMood, setCurrentMood] = useState("Click Button 🤔");

  const MODEL_URL = `${import.meta.env.BASE_URL}models`;

  const detectMood = async () => {
    if (!videoRef.current) return;

    const result = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (result) {
      const expressions = result.expressions;

      const detectedMood = Object.keys(expressions).reduce((a, b) =>
        expressions[a] > expressions[b] ? a : b,
      );

      setCurrentMood(detectedMood);

      setMood(detectedMood);
  
      
    } else {
      setCurrentMood("Face Not Found");
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.log(err);
        setCurrentMood("Error");
      }
    };

    init();
  }, []);

  return (
    <div className="main-container">
      <div className="vid-container text-center text-2xl font-serif">
        <video ref={videoRef} autoPlay muted playsInline />

        <h2>Current Mood : {currentMood}</h2>

        <div className="vid-btn" onClick={detectMood}>
          Start Listening
        </div>
      </div>
    </div>
  );
}

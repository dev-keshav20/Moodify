# 🎧 Moodify – Mood Based Music Player

Moodify is an intelligent music streaming web application that detects user mood and plays music accordingly. It provides a personalized listening experience based on emotions using AI-based mood detection.

---

🚀 Features

- 🎭 Mood detection (Happy, Sad, Calm, Energetic, etc.)
- 🎵 Smart music recommendation based on mood
- 🔊 Built-in audio player controls
- 🌙 Clean and responsive UI
- ⚡ Fast performance with Vite + React
- 🗄️ Backend integration with Node.js + MongoDB

---

🧠 How It Works

- Camera detects facial expression
- AI model predicts mood (Happy, Sad, Angry, Calm etc.)
- Backend fetches matching songs
- User gets personalized playlist instantly 🎶

---

🛠️ Tech Stack

🎨 Frontend

React.js ⚛️
Vite ⚡
CSS3 / Custom Styles
Face-api.js (for mood detection)

⚙️ Backend

Node.js
Express.js
REST API

🗄️ Database

MongoDB

---

## 📂 Project Structure
MOODIFY/
│
├── Backend/
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── db/
│       │   └── db.js
│       ├── models/
│       │   └── songs.model.js
│       ├── routes/
│       │   └── song.routes.js
│       └── services/
│           └── storage.service.js
│
├── Frontend/
│   └── moodify/
│       ├── node_modules/
│       ├── public/
│       │   ├── favicon.svg
│       │   ├── icons.svg
│       │   └── models/
│       │       ├── face_expression_model-shard1
│       │       ├── face_expression_model-weights_manifest.json
│       │       ├── tiny_face_detector_model-shard1
│       │       └── tiny_face_detector_model-weights_manifest.json
│       │
│       ├── src/
│       │   ├── assets/
│       │   │   ├── Logo.png
│       │   │   ├── hero.png
│       │   │   ├── react.svg
│       │   │   └── vite.svg
│       │   │
│       │   ├── components/
│       │   │   ├── Footer.jsx
│       │   │   ├── Hero.jsx
│       │   │   ├── Logo.jsx
│       │   │   ├── MoodDetector.jsx
│       │   │   ├── MoodSongs.jsx
│       │   │   ├── Navbar.jsx
│       │   │   ├── Songs.jsx
│       │   │   └── SongsCard.jsx
│       │   │
│       │   ├── pages/
│       │   │   └── Home.jsx
│       │   │
│       │   ├── Styles/
│       │   │   ├── App.css
│       │   │   ├── Footer.css
│       │   │   ├── Hero.css
│       │   │   ├── Logo.css
│       │   │   ├── MoodDetector.css
│       │   │   ├── MoodSongs.css
│       │   │   ├── Songs.css
│       │   │   ├── SongsCard.css
│       │   │   └── navbar.css
│       │   │
│       │   ├── App.jsx
│       │   ├── index.css
│       │   ├── main.jsx
│       │   └── App.css
│       │
│       ├── index.html
│       ├── vite.config.js
│       ├── package.json
│       ├── package-lock.json
│       ├── eslint.config.js
│       ├── .gitignore
│       └── README.md
│
└── README.md (optional root level)





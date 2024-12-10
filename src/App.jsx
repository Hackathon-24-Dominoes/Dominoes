import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StoryPage from "./pages/StoryPage";

import "./App.css";
<<<<<<< HEAD
=======
import Anthropic from "@anthropic-ai/sdk";
import Modal from "./Components/modal";
import React from 'react';
import Game from "./Components/Game";

const client = new Anthropic({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateStoryPrompt() {
  const themes = [
    "Global Diplomacy Prevention",
    "Quantum Probability Meditation",
    "Squirrel Communication Training",
    "Apocalypse Preparedness Drill",
    "Reverse Psychology Therapy",
    "Supernatural Summoning Technique",
    "Interpretive Dance Choreography Inspiration",
    "Computational Chaos Theory Experiment",
    "Alien First Contact Protocol",
    "Retirement Planning through Randomness",
    "Quantum Entanglement Visualization",
    "Your Dad thighs",
    "Time Travel Rehearsal",
    "Your Mom",
    "Gangster rapper",
    "Dog ate my homework",
    "Raccoon overlords",
  ];
  const subjects = ["The world", "Your family", "Yourself"];
  return `Ludicrous reason that I should play dominoes involving ${choose(
    themes
  )} with subject ${choose(
    subjects
  )}.3 sentences maximum and in an story format.`;
}
>>>>>>> 5d496bb (game logic, ken)

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </Router>
  )
};
=======
    <>
    <Game></Game>
      <Modal isOpen={isModalOpen} onClose={closeModal} msg={msg} getGreetingStory={getGreetingStory} >
      </Modal>
    </>
  );
}
>>>>>>> 5d496bb (game logic, ken)

export default App;

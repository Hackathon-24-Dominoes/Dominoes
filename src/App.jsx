import { useState, useEffect } from "react";
import "./App.css";
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

function App() {
  const [inputValue, setInputValue] = useState("");
  const [msg, setMsg] = useState("");

  const [isModalOpen, setModalOpen] = useState(true);
  // const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  async function getGreetingStory() {
    console.log("hi")
    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      temperature: 0,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: generateStoryPrompt(),
            },
          ],
        },
      ],
    });
    setMsg(message.content[0].text);
  }

  return (
    <>
    <Game></Game>
      <Modal isOpen={isModalOpen} onClose={closeModal} msg={msg} getGreetingStory={getGreetingStory} >
      </Modal>
    </>
  );
}

export default App;

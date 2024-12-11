import { useEffect, useState } from "react";
import Anthropic from "@anthropic-ai/sdk";
import "./Story.css";

// Initialize Anthropic client
const client = new Anthropic({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a random story prompt
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
  )}.3 sentences maximum and in a story format.`;
}

const Story = () => {
  const [story, setStory] = useState("");

  // Fetch story using Anthropic API
  const fetchStory = async () => {
    try {
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
      setStory(message.content[0].text); // Set the fetched story
    } catch (error) {
      console.error("Failed to fetch story:", error);
      setStory("Oops! Something went wrong while generating the story.");
    }
  };

  // Fetch story on component mount
  useEffect(() => {
    fetchStory();
  }, []);

  return (
    <div className="story-container">
      <h2>Your Deadly Story</h2>
      <div className="story-card">
        <p>{story}</p>
      </div>
    </div>
  );
};

export default Story;

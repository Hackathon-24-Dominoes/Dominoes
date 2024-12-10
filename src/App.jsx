import { useEffect, useState } from "react";
import "./App.css";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

const modifiers = [
  "Global Diplomacy Prevention",
  "Quantum Probability Meditation",
  "Squirrel Communication Training",
  "Apocalypse Preparedness Drill",
  "Reverse Psychology Therapy",
  "Supernatural Summoning Technique",
  "Your Dad thighs",
  "Interpretive Dance Choreography Inspiration",
  "Computational Chaos Theory Experiment",
  "Alien First Contact Protocol",
  "Retirement Planning through Randomness",
  "Quantum Entanglement Visualization",
  "Time Travel Rehearsal",
  "Your Mom",
  "Gangster rapper",
  "Dog ate my homework",
];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [msg, setMsg] = useState("");

  async function getGreetingStory() {
    const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
    console.log(modifier);
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
              text: `Ludicrous reason to play dominoes involving ${modifier}. 3 sentences maximum and in an story format.`,
            },
          ],
        },
      ],
    });
    setMsg(message.content[0].text);
  }

  async function getClaudeResponse(event) {
    event.preventDefault();
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
              text: inputValue,
            },
          ],
        },
      ],
    });
    setMsg(message.content[0].text);
    console.log(message.content[0].text);
  }

  useEffect(() => {
    getGreetingStory();
  }, []);

  return (
    <>
      <form onSubmit={getClaudeResponse}>
        <input
          type="text"
          placeholder="Type something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update state with input value
        />
        <button type="submit">Submit</button>
      </form>
      {msg.length > 0 ? <p>{msg}</p> : <p>nothing sof</p>}
    </>
  );
}

export default App;

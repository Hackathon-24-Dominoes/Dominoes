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
    "the price of immortality",
    "the haunting of memories",
    "the shadow in the mirror",
    "the last broadcast",
    "the collector of regrets",
    "voices of the forgotten",
    "the dark horizon",
    "the marionette syndrome",
    "the silence agreement",
    "the clockmakers curse",
    "the whispering plague",
    "the forgotten heirloom",
    "the endless night",
    "the ghost writer",
    "the sins of the machine",
    "the pact of shadows",
    "the thunderous dad thighs",
    "the vanishing year",
    "the smiling town",
    "the last dream",
    "the hunger below",
  ];
  const subjects = [
    "The world",
    "Your family",
    "My self",
    "Your mom",
    "Your dad thighs",
    "My Homework",
  ];
  const basePrompt =
    "3 line ludicrous story that gives me reasons to play dominoes in order to save";
  return `${basePrompt} ${choose(subjects)} with ${choose(
    themes
  )} as main theme`;
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
      <div className="story-card">
        <p>{story}</p>
      </div>
    </div>
  );
};

export default Story;

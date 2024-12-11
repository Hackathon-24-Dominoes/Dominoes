import { useNavigate } from "react-router-dom";
import Story from "../components/Story";
import "./StoryPage.css";

function StoryPage() {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game"); // Replace "/game" with your actual game route
  };

  return (
    <div className="story-page">
      <Story />
      <button className="game-button" onClick={goToGame}>
        Play Dominoes With Death
      </button>
    </div>
  );
}

export default StoryPage;

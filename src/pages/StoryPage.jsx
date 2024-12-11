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
      <div className="buy-game-box">
        <img src="/BuyGame.png" alt="Buy Our Game" className="buy-game-image" />
        <p className="buy-game-text">
          🎁 <strong>Our physical game is finally here for Christmas!</strong>{" "}
          🎄 <br />
          <br />
          📦{" "}
          <span>
            Now available on <strong>Amazon</strong>!
          </span>{" "}
          🚀 <br />
          <br />
          💀 <em>Get it first before Death does!</em> 😱 <br />
        </p>
      </div>
      <Story />
      <button className="game-button" onClick={goToGame}>
        Play Dominoes With Death
      </button>
    </div>
  );
}

export default StoryPage;

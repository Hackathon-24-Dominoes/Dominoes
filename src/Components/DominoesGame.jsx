import { useState } from "react";
import "./DominoesGame.css";

function DominoesGame() {
  const [gameState, setGameState] = useState("Game in progress...");

  const playDominoes = () => {
    setGameState("You won the game of dominoes!");
  };

  return (
    <div className="dominoes-game">
      <h2>Game of Dominoes</h2>
      <p>{gameState}</p>
      <button onClick={playDominoes}>Play Dominoes</button>
    </div>
  );
}

export default DominoesGame;

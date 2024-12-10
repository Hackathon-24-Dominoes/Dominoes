// Player.js
import React from 'react';

const Player = ({ playerNumber, playerDominoes, currentPlayer, placeDomino }) => {
    return (
        <div className={`player player-${playerNumber}`}>
            <h2>Player {playerNumber}</h2>
            <div className="dominoes">
                {playerDominoes.map((domino, index) => (
                    <div
                        key={index}
                        className="domino"
                        onClick={() => placeDomino(domino, index)}
                        style={{ cursor: 'pointer', padding: '10px', margin: '5px', border: '1px solid #000' }}
                    >
                        {domino[0]}|{domino[1]}
                    </div>
                ))}
            </div>
            {currentPlayer === playerNumber && <p>It's your turn!</p>}
        </div>
    );
};

export default Player;

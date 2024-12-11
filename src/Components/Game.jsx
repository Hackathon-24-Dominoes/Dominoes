// Game.js
import React, { useState } from 'react';
import styled from 'styled-components';

import Player from './player';
import Domino from '../Domino';

const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [player1, setPlayer1] = useState([
        [1, 1], [5, 0], [3, 3], [4, 4], [4, 5], [1, 0],
        [1, 4], [4, 5], [2, 1], [4, 5], [1, 10], [1, 4],
        [4, 5], [1, 4], [3, 0], [6, 0], [4, 0], [6, 0]
    ]);
    const [player2, setPlayer2] = useState([
        [6, 6], [2, 0], [2, 4], [3, 4], [6, 1], [6, 2],
        [3, 2], [3, 6], [5, 2], [2, 2], [0, 0], [5, 3],
        [3, 1], [6, 4]
    ]);

    const [board, setBoard] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState('');

    // Handle placing a domino
    const placeDomino = (domino, index) => {
        if (gameOver || !domino) return;

        if (
            (currentPlayer === 1 && player1.includes(domino)) ||
            (currentPlayer === 2 && player2.includes(domino))
        ) {
            const newBoard = [...board];

            if (newBoard.length === 0) {
                newBoard.push(domino);
            } else {
                const lastDomino = newBoard[newBoard.length - 1];
                if (lastDomino[1] === domino[0]) {
                    newBoard.push(domino);
                } else if (lastDomino[0] === domino[1]) {
                    newBoard.push([domino[1], domino[0]]);
                } else {
                    setMessage('Invalid move!');
                    return;
                }
            }

            if (currentPlayer === 1) {
                setPlayer1(player1.filter((_, i) => i !== index));
            } else {
                setPlayer2(player2.filter((_, i) => i !== index));
            }

            setBoard(newBoard);

            if (player1.length === 0) {
                setGameOver(true);
                setMessage('Game Over! Player 1 wins.');
            } else if (player2.length === 0) {
                setGameOver(true);
                setMessage('Game Over! Player 2 wins.');
            } else {
                setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
                setMessage('');
            }
        }
    };

    return (
        <div>
            <h1>Dominoes Game</h1>
            <p>{message}</p>
            <Board>
                {board.length === 0 ? (
                    <p>The board is empty, waiting for the first move.</p>
                ) : (
                    <BoardContent>
                        {board.map((domino, index) => (
<<<<<<< HEAD
                            <Domino domino={domino} key={index} />
=======
                            <div key={index} className="domino-on-board">
                                <Domino domino={domino} />
                            </div>
>>>>>>> c0e8afb (Adds router for sandbox page, Implements Domino, Adds ability to render doubles sideways)
                        ))}
                    </BoardContent>
                )}
            </Board>
            <Player
                playerNumber={1}
                playerDominoes={player1}
                currentPlayer={currentPlayer}
                placeDomino={placeDomino}
            />
            <Player
                playerNumber={2}
                playerDominoes={player2}
                currentPlayer={currentPlayer}
                placeDomino={placeDomino}
            />
        </div>
    );
};

const Board = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BoardContent = styled.div`
    transform: rotate(90deg);
`;

export default Game;

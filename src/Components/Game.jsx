import React, { useState, useEffect } from 'react';
import Player from './player';
import Domino from '../Domino';

// The original set of all dominoes (28 total in a standard double-six set)
const originalDominoes = [
    [1, 1], [5, 0], [3, 3], [4, 4], [4, 5], [1, 0],
    [1, 4], [4, 5], [2, 1], [4, 5], [1, 0], [1, 4],
    [4, 5], [1, 4], [3, 0], [6, 0], [4, 0], [6, 0],
    [6, 6], [2, 0], [2, 4], [3, 4], [6, 1], [6, 2],
    [3, 2], [3, 6], [5, 2], [2, 2], [0, 0], [5, 3],
    [3, 1], [6, 4]
];

// Function to shuffle an array
const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const [board, setBoard] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState('');

    // State to track if a player has passed
    const [player1Passed, setPlayer1Passed] = useState(false);
    const [player2Passed, setPlayer2Passed] = useState(false);

    // Function to shuffle and assign 7 dominoes to each player
    const shuffleDominoes = () => {
        // Shuffle the full set of 28 dominoes
        const shuffledDominoes = shuffleArray(originalDominoes);

        // The first 7 dominoes go to Player 1, and the next 7 go to Player 2
        const player1Dominoes = shuffledDominoes.slice(0, 7);
        const player2Dominoes = shuffledDominoes.slice(7, 14);

        // Update player states
        setPlayer1(player1Dominoes);
        setPlayer2(player2Dominoes);
    };

    useEffect(() => {
        // Initial shuffle when the game first loads
        shuffleDominoes();
    }, []); // Empty dependency array to run once when the component mounts

    // Function to check if a player has a valid move (one side must match)
    const hasValidMove = (playerDominoes) => {
        if (board.length === 0) return true; // First move always valid

        const lastDomino = board[board.length - 1];
        const firstDomino = board[0]; // Get the first domino on the board

        // Check if any domino from the player's hand matches either side of the first or last domino on the board
        return playerDominoes.some(domino =>
            domino[0] === lastDomino[1] || domino[1] === lastDomino[1] ||  // Matching last domino
            domino[0] === firstDomino[0] || domino[1] === firstDomino[0]    // Matching first domino
        );
    };

    // Handle placing a domino
    const placeDomino = (domino, index) => {
        if (gameOver || !domino) return;

        if (
            (currentPlayer === 1 && player1.includes(domino)) ||
            (currentPlayer === 2 && player2.includes(domino))
        ) {
            const newBoard = [...board];

            if (newBoard.length === 0) {
                newBoard.push(domino); // First move always valid
            } else {
                const lastDomino = newBoard[newBoard.length - 1];
                // Ensure one side matches (either side of the domino)
                if (lastDomino[1] === domino[0] || lastDomino[0] === domino[1]) {
                    newBoard.push(domino);
                } else {
                    setMessage('Invalid move! One side must match.');
                    return;
                }
            }

            // Remove the domino from the current player's hand
            if (currentPlayer === 1) {
                setPlayer1(player1.filter((_, i) => i !== index));
            } else {
                setPlayer2(player2.filter((_, i) => i !== index));
            }

            setBoard(newBoard);
            setPlayer1Passed(false);  // Reset pass flag when making a move
            setPlayer2Passed(false);  // Reset pass flag when making a move

            // Check if the game is over
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

    // Handle player pass
    const passTurn = () => {
        if (currentPlayer === 1) {
            setPlayer1Passed(true);
        } else {
            setPlayer2Passed(true);
        }

        // Check if both players passed (draw situation)
        if (player1Passed && player2Passed) {
            setGameOver(true);
            setMessage('Game Over! It\'s a draw. Both players passed.');
        } else {
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
            setMessage(`${currentPlayer === 1 ? 'Player 1' : 'Player 2'} has passed.`);
        }
    };

    // Determine whether a player can pass
    const canPass = currentPlayer === 1 ? !hasValidMove(player1) : !hasValidMove(player2);

    return (
        <div>
            <h1>Dominoes Game</h1>
            <p>{message}</p>
            <div className="board">
                {board.length === 0 ? (
                    <p>The board is empty, waiting for the first move.</p>
                ) : (
                    <div className="board-container">
                        {board.map((domino, index) => (
                            <div key={index} className="domino-on-board">
                                <Domino domino={domino} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
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
            
            {/* The Pass button is always visible */}
            <div>
                <button onClick={passTurn}>Pass</button> {/* Always visible */}
                <button onClick={shuffleDominoes}>Shuffle</button> {/* Shuffle button */}
            </div>
        </div>
    );
};

//It works now.  An additional modification I'd like to make.  "doubles" refer to a dominoes that has the same number on both sides.  such as 6 and 6 or 3 and 3
//I want the player with the highest double to get the first turn.  If example, if player 2's highest double is 6 and

export default Game;

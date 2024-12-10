// fezz dmonios compent, [1,2] 1 is top and 2 is bottom.
// the left is always the top of the domnio, right is alaways the bottom of the domino

const placeDomino = (domino, index) => {
    // Step 1: Exit early if the game is over or if no domino is selected
    if (gameOver || !domino) return;
    // Step 2: Check if it's the current player's turn and if they have the domino in their hand
    if ((currentPlayer === 1 && player1.includes(domino)) || (currentPlayer === 2 && player2.includes(domino))) {
      // Step 3: Create a copy of the board so we don't modify the original state directly
      const newBoard = [...board];
      // Step 4: Check if the board is empty, meaning this is the first move
      if (newBoard.length === 0) {
        // If the board is empty, place the domino in the center (first move)
        newBoard.push(domino);
      } else {
        // Step 5: Check the domino at the end of the current board to validate placement
        const lastDomino = newBoard[newBoard.length - 1]; // Get the last domino on the board
        // Step 6: Check if the last number on the board matches the first number of the domino
        if (lastDomino[1] === domino[0]) {
          // If the last number on the board matches the first number of the current domino, place it normally
          newBoard.push(domino);
        } else if (lastDomino[0] === domino[1]) {
          // If the last number on the board matches the second number of the current domino, flip it and place
          newBoard.push([domino[1], domino[0]]);
        } else {
          // Step 7: Invalid move if no match is found
          setMessage('Invalid move!'); // Notify the player that the move is invalid
          return; // Exit the function early if the move is invalid
        }
      }
      // Step 8: Remove the domino from the current player's hand
      if (currentPlayer === 1) {
        // If Player 1 is playing, remove the selected domino from Player 1's hand
        setPlayer1(player1.filter((d, i) => i !== index)); // `index` is the position of the domino in Player 1's hand
      } else {
        // If Player 2 is playing, remove the selected domino from Player 2's hand
        setPlayer2(player2.filter((d, i) => i !== index)); // `index` is the position of the domino in Player 2's hand
      }
      // Step 9: Update the board state with the new configuration
      setBoard(newBoard);
      // Step 10: Check for game over conditions
      if (player1.length === 0 || player2.length === 0) {
        // If either player runs out of dominoes, the game ends
        setGameOver(true); // Set game state to "Game Over"
        setMessage(`Game Over! Player ${currentPlayer} wins.`); // Notify the winner
      } else if (dominoes.length === 0) {
        // If no more dominoes are left in the pile, it's a draw
        setMessage("Game Over! It's a draw.");
        setGameOver(true); // Set game state to "Game Over"
      } else {
        // Step 11: If the game is not over, switch turns
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1); // Switch to the other player
        setMessage(''); // Clear any existing messages
      }
    }
};
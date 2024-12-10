// Player.js
import React from 'react';
import styled from 'styled-components';

import Domino from '../Domino';

const Player = ({ playerNumber, playerDominoes, currentPlayer, placeDomino }) => {
    return (
        <div className={`player player-${playerNumber}`}>
            <h2>Player {playerNumber}</h2>
            <DominoWrapper>
                {playerDominoes.map((domino, index) => (
                    <div key={index} onClick={() => placeDomino(domino, index)}>
                        <Domino domino={domino} override_double/>
                    </div>
                ))}
            </DominoWrapper>
            {currentPlayer === playerNumber && <p>It's your turn!</p>}
        </div>
    );
};

const DominoWrapper = styled.div`
    display: flex;
`;

export default Player;

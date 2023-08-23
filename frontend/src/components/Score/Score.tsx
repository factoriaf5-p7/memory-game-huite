import React from 'react';
import './Score.css';

interface ScoreProps {
    moves: number;
}

const Score: React.FC<ScoreProps> = ({ moves }) => {
    return (
        <div id="score" className="score-container">
            <p>Moves: {moves}</p>
            <p>Match: 00</p>
        </div>
    );
}

export default Score;
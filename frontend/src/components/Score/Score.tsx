import './Score.css';

interface ScoreProps {
    moves: number;
    matches: number;
}

function Score({ moves, matches }: ScoreProps) {
    return (
        <div id="score" className="score-container">
            <p>Moves: {moves}</p>
            <p>Matches: {matches}</p>
        </div>
    );
}

export default Score;
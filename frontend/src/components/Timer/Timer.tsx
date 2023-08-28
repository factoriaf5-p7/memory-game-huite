import React, { useState, useEffect } from 'react';
import './Timer.css';
import Alert from '../LostGameAlert/LostGameAlert';

interface TimerProps {
  selectedDifficulty: string;
  shouldStartTimer: boolean;
}

const Timer: React.FC<TimerProps> = ({ selectedDifficulty, shouldStartTimer }) => {
  const initialTime = selectedDifficulty === 'Hard' ? 45 : 60;

  const [seconds, setSeconds] = useState(initialTime);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Agrega initialTime como dependencia
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (shouldStartTimer && seconds > 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsTimeUp(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [shouldStartTimer, seconds, initialTime]); // Agrega initialTime aquí

  useEffect(() => {
    if (shouldStartTimer) {
      setSeconds(initialTime);
      setIsTimeUp(false);
    }
  }, [shouldStartTimer, initialTime]); // Agrega initialTime aquí

  if (selectedDifficulty === 'Easy') {
    return null;
  }

  return (
    <div className="timer">
      <p>Time Left: <br />
        {seconds} seconds</p>
      {isTimeUp && <Alert message={''} onClose={() => {}} />} 
    </div>
  );
}

export default Timer;

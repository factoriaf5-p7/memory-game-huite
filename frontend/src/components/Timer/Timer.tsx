import { useState, useEffect } from 'react';
import './Timer.css';

function Timer({ selectedDifficulty }) {
  // Define el tiempo inicial según la dificultad seleccionada
  const initialTime = selectedDifficulty === 'Medium' ? 60 : 45;

  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    let timer;

    if (seconds > 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [seconds, selectedDifficulty]);

  // Reiniciar el contador cuando cambie la dificultad
  useEffect(() => {
    setSeconds(initialTime);
  }, [selectedDifficulty]);

  return (
    <div className="timer">
      <p>Time Left: {seconds} seconds</p>
    </div>
  );
}

export default Timer;

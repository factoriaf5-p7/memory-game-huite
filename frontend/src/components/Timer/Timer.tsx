import { useState, useEffect } from 'react';
import './Timer.css';
import Alert from '..//LostGameAlert/LostGameAlert';

function Timer({ selectedDifficulty }) {
  const initialTime = selectedDifficulty === 'Medium' ? 60 : 45;

  const [seconds, setSeconds] = useState(initialTime);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    let timer;

    if (seconds > 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      // Cuando el tiempo llega a 0, establece isTimeUp en true
      setIsTimeUp(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [seconds, selectedDifficulty]);

  // Reiniciar el contador cuando cambie la dificultad
  useEffect(() => {
    setSeconds(initialTime); 
    setIsTimeUp(false); 
  }, [selectedDifficulty]);

  return (
    <div className="timer">
      <p>Time Left: {seconds} seconds</p>
      {isTimeUp && <Alert message="You lost!" />} {/* Mostrar el componente Alert cuando isTimeUp es true */}
    </div>
  );
}

export default Timer;

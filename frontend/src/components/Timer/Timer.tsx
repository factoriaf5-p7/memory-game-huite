import  { useState, useEffect } from 'react';
import './Timer.css';
import Alert from '../LostGameAlert/LostGameAlert';
import { useTimerContext } from '../../contexts/TimerContext.tsx'; 

function Timer({ selectedDifficulty }) {
  const initialTime = selectedDifficulty === 'Medium' ? 60 : 45;
  const { startTimer, setStartTimer } = useTimerContext();

  const [seconds, setSeconds] = useState(initialTime);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Actualiza el temporizador solo cuando startTimer sea verdadero
  useEffect(() => {
    let timer;

    if (startTimer && seconds > 0) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsTimeUp(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [seconds, startTimer]);

  useEffect(() => {
    setSeconds(initialTime);
    setIsTimeUp(false);
  }, [selectedDifficulty]);

  return (
    <div className="timer">
      <p>Time Left: <br />
        {seconds} seconds</p>
      {isTimeUp && <Alert message={''} />}
    </div>
  );
}

export default Timer;

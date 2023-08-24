import React, { useState, useEffect } from 'react';
import './LostGameAlert.css';
import NoButton from './NoButton/NoButton';
import YesButton from './YesButton/YesButton';

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  const [showPlayAgain, setShowPlayAgain] = useState(false);

  useEffect(() => {
    // Configura un temporizador para mostrar 'playAgain' después de 4 segundos
    const timer = setTimeout(() => {
      setShowPlayAgain(true);
    }, 1000);

    return () => {
      // Limpia el temporizador si el componente se desmonta antes de que expire
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="alert">
      <h1 className={`fade-in ${showPlayAgain ? 'active' : ''}`}>
        Oh no... You lost!
      </h1>
      {showPlayAgain && (
        <div className={`play-again-container ${showPlayAgain ? 'active' : ''}`}>
          <p className={`fade-in ${showPlayAgain ? 'active' : ''}`}>
            Do you want to play again?
          </p>
          <div className={`yesNoButtons ${showPlayAgain ? 'active' : ''}`}>
            <YesButton onClick={undefined} />
            <NoButton onClick={undefined} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;

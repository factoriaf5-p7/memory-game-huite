import React, { useState, useEffect } from 'react';
import './LostGameAlert.css';
import NoButton from './NoButton/NoButton';
import YesButton from './YesButton/YesButton';

interface AlertProps {
  message: string;
  onClose: () => void; // Agrega una función onClose prop
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  const [showPlayAgain, setShowPlayAgain] = useState(false);

  // Función para reiniciar el juego (recargar la página)
  const restartGame = () => {
    window.location.reload();
  };

  // Función para manejar el clic en el botón "No"
  const handleNoClick = () => {
    setShowPlayAgain(false); // Oculta el componente
    onClose(); // Llama a la función onClose para cerrar el Alert
  };

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
    <div className={`alert ${showPlayAgain ? 'active' : ''}`}>
      <h1 className={`fade-in ${showPlayAgain ? 'active' : ''}`}>
        Oh no... You lost!
      </h1>
      {showPlayAgain && (
        <div className={`play-again-container ${showPlayAgain ? 'active' : ''}`}>
          <p className={`fade-in ${showPlayAgain ? 'active' : ''}`}>
            Do you want to play again?
          </p>
          <div className={`yesNoButtons ${showPlayAgain ? 'active' : ''}`}>
            <YesButton onClick={restartGame} />
            <NoButton onClick={handleNoClick} /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;

import { useState } from 'react';
import './Card.css';

interface CardProps {
  // Si tienes propiedades, defínelas aquí
}

function Card(props: CardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">F</div>
        <div className="card-back">B</div>
      </div>
    </div>
  );
}

export default Card;

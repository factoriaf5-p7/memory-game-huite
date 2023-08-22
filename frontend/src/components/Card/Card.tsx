import { useState } from 'react';
import './Card.css';

/* definimos el componente Card que representa una carta individual. Al hacer clic en la carta, cambia su estado para mostrar la imagen del detras.El componente recibe la URL de la imagen como prop img. */

interface CardProps {
  img: string;
}

function Card({ img }: CardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back" style={{ backgroundImage: `url('/img/${img}')` }}></div>
      </div>
    </div>
  );
}

export default Card;

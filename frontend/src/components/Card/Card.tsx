import './Card.css';

export interface CardProps {
  onClick: () => void; // Define explícitamente onClick como una función que no toma argumentos y no devuelve nada.
  isFlipped: boolean;
  name: string;
  img: string;
}

function Card({ onClick, isFlipped, name, img }: CardProps) {
  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className={`front ${isFlipped ? 'hidden' : ''}`}></div>
      <div className={`back ${isFlipped ? '' : 'hidden'}`}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
}

export default Card;
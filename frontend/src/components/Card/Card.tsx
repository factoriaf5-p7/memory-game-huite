import './Card.css';

interface CardProps {
  cardData: {
    card_id: string;
    name: string;
    img_url: string;
  };
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

function Card({ cardData, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <div
      className={`card ${isFlipped || isMatched ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front"></div>
        <div
          className="card-back"
          style={{ backgroundImage: `url('${cardData.img_url}')` }}
        ></div>
      </div>
    </div>
  );
}

export default Card;
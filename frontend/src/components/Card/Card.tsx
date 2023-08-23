import React, { useState } from 'react';
import './Card.css';

interface CardProps {
  img: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

function Card({ img, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <div
      className={`card ${isFlipped || isMatched ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back" style={{ backgroundImage: `url('/img/${img}')` }}></div>
      </div>
    </div>
  );
}

export default Card;

import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Board.css';
import data from '../../data/data.json'; 

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
function Board() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  useEffect(() => {
    const duplicatedData = [...data, ...data];
    const shuffledData = shuffleArray(duplicatedData);
    setCards(shuffledData);
  }, []);
  function handleCardClick(index) {
    if (flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }
    setFlippedCards([...flippedCards, index]);
    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const secondIndex = index;
      if (cards[firstIndex].name === cards[secondIndex].name) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
    } else if (flippedCards.length === 2) {
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }
  return (
    <div id="memory_board" className="grid-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          onClick={() => handleCardClick(index)}
          isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
          name={card.name}
          img={card.img}
        />
      ))}
    </div>
  );
}
export default Board;
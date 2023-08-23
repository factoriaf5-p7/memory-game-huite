import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Board.css';
import data from './../../data/data.json';

interface CardData {
  img: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function shuffleArray(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Board() {
  const numRows = 6;
  const numCols = 4;

  const initialCards: CardData[] = data.map((card) => ({
    ...card,
    isFlipped: false,
    isMatched: false,
  }));

  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardClick = (cardIndex: number) => {
    if (flippedCards.length < 2 && !cards[cardIndex].isMatched) {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        newCards[cardIndex].isFlipped = true;
        return newCards;
      });
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, cardIndex]);

      if (flippedCards.length === 1) {
        const firstCardIndex = flippedCards[0];
        if (cards[firstCardIndex].img === cards[cardIndex].img) {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[firstCardIndex].isMatched = true;
            newCards[cardIndex].isMatched = true;
            return newCards;
          });
        }

        setTimeout(() => {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[firstCardIndex].isFlipped = false;
            newCards[cardIndex].isFlipped = false;
            return newCards;
          });
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    setCards(shuffleArray(initialCards));
  }, []);

  return (
    <>
    <div className="board-container">
      <div id="memory_board">
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Board;

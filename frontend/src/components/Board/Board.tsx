import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Board.css';
import data from './../../data/data.json';
import Score from '../Score/Score';
// import SettingsButton from '../SettingsButton/SettingsButton';

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
  const [clickCount, setClickCount] = useState<number>(0); //estado para contar los clics
  const [matchCount, setMatchCount] = useState<number>(0); //estado para contar los aciertos

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
          setMatchCount((prevMatchCount) => prevMatchCount + 1); // Incrementar el contador de matches
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
    // Incrementar el contador de clics cuando se hace click
    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  useEffect(() => {
    setCards(shuffleArray(initialCards));
    setClickCount(0); // Reiniciar el contador de clics cuando se reinicia
  }, []);

  return (
    <>
    <div className="board-container">
    <div className="board-container2">

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
      <div className='board-right'>
      <Score moves={clickCount} matches={matchCount} />
      </div>
      </div>
      </div>
    </>
  );
}

export default Board;

import { useState, useEffect } from 'react';
import Card from '../Card/Card'; 
import './Board.css';
import Score from '../Score/Score'; 
import { getGameInfo } from '../../service/cardService'; 
import Settings from '../Settings/Settings';
import CompletionModal from '../WinGame/WinGame'; // Importa el componente WinGame
import { TimerProvider } from '../../contexts/TimerContext';

interface CardData {
  img_url: string;
  card_id: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function duplicateCards(cards: CardData[]): CardData[] {
  return cards.flatMap(card => [card, { ...card }]);
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
  const [cards, setCards] = useState<CardData[]>([]); 
  const [flippedCards, setFlippedCards] = useState<number[]>([]); 
  const [clickCount, setClickCount] = useState<number>(0); 
  const [matchCount, setMatchCount] = useState<number>(0); 
  const [isGameWon, setIsGameWon] = useState<boolean>(false); // Nuevo estado

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
        if (cards[firstCardIndex].img_url === cards[cardIndex].img_url) {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[firstCardIndex].isMatched = true;
            newCards[cardIndex].isMatched = true;
            return newCards;
          });
          setMatchCount((prevMatchCount) => prevMatchCount + 1);
        }

        setTimeout(() => {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards[firstCardIndex].isFlipped = false;
            newCards[cardIndex].isFlipped = false;
            return newCards;
          });
          setFlippedCards([]);
          
          if (matchCount + 1 === cards.length / 2) {
            setIsGameWon(true);
          }
        }, 1000);
      }
    }
    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  useEffect(() => {
    getGameInfo()
      .then(data => {
        const duplicatedData = duplicateCards(data);
        const shuffledDuplicatedData = shuffleArray(duplicatedData);
        setCards(shuffledDuplicatedData);
        setClickCount(0);
      })
      .catch(error => console.error('Error fetching game info:', error));
  }, []);

  const loadGame = () => {
    getGameInfo()
      .then(data => {
        const duplicatedData = duplicateCards(data);
        const shuffledDuplicatedData = shuffleArray(duplicatedData);
        setCards(shuffledDuplicatedData);
        setClickCount(0);
        setMatchCount(0);
      })
      .catch(error => console.error('Error fetching game info:', error));
  };
  
  return (
    <TimerProvider> 
    <>
      <div className="board-container">
        <div className="board-container2">
          <div id="memory_board">
            {cards.map((card, index) => (
              <Card
                key={index}
                cardData={card}
                isFlipped={card.isFlipped}
                isMatched={card.isMatched}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
          <div className="board-right">
            <Settings />
            <Score moves={clickCount} matches={matchCount} />
          </div>
        </div>
      </div>

      {isGameWon && (
  <CompletionModal
    onClose={() => {
      setIsGameWon(false);
      setCards([]);
      loadGame(); // Vuelve a cargar el juego
    }}
  />
)}
    </>
    
    </TimerProvider>
  );
}

export default Board;

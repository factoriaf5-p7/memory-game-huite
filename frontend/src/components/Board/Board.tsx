import { useState, useEffect } from 'react';
import Card from '../Card/Card'; 
import './Board.css';
import Score from '../Score/Score'; 
import { getGameInfo } from '../../service/cardService'; 
import Settings from '../Settings/Settings';

// Definimos la forma de los datos de la tarjeta.
interface CardData {
  img_url: string;
  card_id: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}

//Función para duplicar las tarjetas
function duplicateCards(cards: CardData[]): CardData[] {
  return cards.flatMap(card => [card, { ...card }]);
}

// Función para barajar las tarjetas
function shuffleArray(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}


function Board() {
  const [cards, setCards] = useState<CardData[]>([]); // State to hold the card data
  const [flippedCards, setFlippedCards] = useState<number[]>([]); // State to track flipped cards
  const [clickCount, setClickCount] = useState<number>(0); // State to count the number of clicks
  const [matchCount, setMatchCount] = useState<number>(0); // State to count the number of matches

  // Funcion handle click para voltear las tarjetas
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
          setMatchCount((prevMatchCount) => prevMatchCount + 1); // Increment the match count
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
    setClickCount((prevClickCount) => prevClickCount + 1); // Increment the click count
  };

  // Funcion para obtener la informacion del juego
  useEffect(() => {
    getGameInfo()
      .then(data => {
        const duplicatedData = duplicateCards(data); // Duplicar las cartas
        const shuffledDuplicatedData = shuffleArray(duplicatedData); // Barajar las cartas duplicadas
        setCards(shuffledDuplicatedData); // Asignar las cartas barajadas directamente
        setClickCount(0);
      })
      .catch(error => console.error('Error fetching game info:', error));
  }, []);

  // Rendering del componente
  return (
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
    </>
  );
}

export default Board;

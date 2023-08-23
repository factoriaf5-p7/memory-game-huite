import Card from '../Card/Card';
import './Board.css';
import data from './../../data/data.json';

/* aca creamos un tablero de cartas utilizando datos aleatorios del archivo data.json. y se usa el componente Card para renderizar cada carta en la cuadrícula. */

function Board() {
  const numRows = 6; 
  const numCols = 4;

  const shuffledData = [...data].sort(() => Math.random() - 0.5); //// Se barajan los datos de las cartas aleatoriamente

  const grid = [];
  // Hacemos una cuadrícula de cartas con un bucle anidado para repetir las cards una y otra vez
  for (let row = 0; row < numRows; row++) {
    const rowItems = [];
    for (let col = 0; col < numCols; col++) {
      const cardData = shuffledData[row * numCols + col];
      rowItems.push(<Card key={`${row}-${col}`} img={cardData.img} />);
    }
    grid.push(<div key={row}>{rowItems}</div>);
  }

  return (
    <>
  <h1>Superhero Memory Game</h1>
    <div className="board-container"> 
      <div id="memory_board">{grid}</div> {/*Se crea el tablero con las cartas*/}
    </div>
    </>
  );
}

export default Board;

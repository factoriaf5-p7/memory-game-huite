import Card from '../Card/Card'
import './Board.css'

function Board() {

    const numRows = 6;
    const numCols = 4;

    // Crea una matriz bidimensional para representar la cuadrícula
    const grid = [];

    for (let row = 0; row < numRows; row++) {
      const rowItems = [];
      for (let col = 0; col < numCols; col++) {
        // Renderiza el componente Card en cada celda
        rowItems.push(<Card key={`${row}-${col}`} />);
      }
      // Agrega la fila completa a la cuadrícula
      grid.push(<div key={row}>{rowItems}</div>);
    }
  
  return (
    <div id="memory_board" >
      {grid}
    </div>
  )
}

export default Board
import { useState } from 'react';
import './Card.css';

/* definimos el componente Card que representa una carta individual. Al hacer clic en la carta, cambia su estado para mostrar la imagen del detras.El componente recibe la URL de la imagen como prop img. */

interface CardProps {  // definimos la interfaz de las props
  img: string;
}

function Card({ img }: CardProps) { 
  const [isFlipped, setIsFlipped] = useState<boolean>(false); // definimos el estado de la carta, si esta girada o no

  const handleClick = () => { // definimos la funcion que cambia el estado de la carta al hacer clic
    setIsFlipped(!isFlipped); // cambiamos el estado de la carta
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}> {/*usamos la clase flipped para girar la carta*/}
      <div className="card-inner"> {/*// usamos la clase card-inner para girar la carta*/}
        <div className="card-front"></div> {/*usamos la clase card-front para girar la carta */}
        <div className="card-back" style={{ backgroundImage: `url('/img/${img}')` }}></div> {/*usamos la clase card-back para girar la carta */}
      </div>
    </div>
  );
}

export default Card;

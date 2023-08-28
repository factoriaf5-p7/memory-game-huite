import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link en lugar de useHistory
import bang from '../../../public/img/hero.png';
import './Hero.css';

function Hero() {
  const [showImage, setShowImage] = useState(true);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='hero-container'>
      {showImage ? (
        <img src={bang} className='hero-image' alt='bang' />
      ) : (
        <Link to='/game' className='start-game'>
          Start game
        </Link>
      )}
    </div>
  );
}

export default Hero;

import { useState } from 'react';
import './Hero.css'

function Hero() {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="settings">
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h3>Settings</h3>
              <button onClick={closeModal} className="close-button">&times;</button>
            </header>
            <main className="modal__main">
              <p>Content</p>
            </main>
          </div>
        </>
      )}

      <button className="button" onClick={openModal}>Settings</button>
    </div>
  );
}

export default Hero;
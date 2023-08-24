import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Superheroes');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Easy');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  const handleDifficultyClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  return (
    <div className="settings">
      {isOpen && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal">
            <header className="modal__header">
              <h3>Settings</h3>
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </header>
            <main className="modal__main">
              <section>
                <h3>Choose a theme</h3>
                <div className="theme-buttons">
                  <div
                    className={`theme-button ${
                      selectedTheme === 'Superheroes' ? 'selected' : ''
                    }`}
                    onClick={() => handleThemeClick('Superheroes')}
                  >
                    <button className="round-button"></button>
                    <span>Superheroes</span>
                  </div>
                  <div
                    className={`theme-button ${
                      selectedTheme === 'Animals' ? 'selected' : ''
                    }`}
                    onClick={() => handleThemeClick('Animals')}
                  >
                    <button className="round-button"></button>
                    <span>Animals</span>
                  </div>
                </div>
              </section>
              <section>
                <h3>Choose a level of difficulty</h3>
                <div className="difficulty-buttons">
                  <div
                    className={`difficulty-button ${
                      selectedDifficulty === 'Easy' ? 'selected' : ''
                    }`}
                    onClick={() => handleDifficultyClick('Easy')}
                  >
                    <button className="round-button"></button>
                    <span>Easy</span>
                  </div>
                  <div
                    className={`difficulty-button ${
                      selectedDifficulty === 'Medium' ? 'selected' : ''
                    }`}
                    onClick={() => handleDifficultyClick('Medium')}
                  >
                    <button className="round-button"></button>
                    <span>Medium</span>
                  </div>
                  <div
                    className={`difficulty-button ${
                      selectedDifficulty === 'Hard' ? 'selected' : ''
                    }`}
                    onClick={() => handleDifficultyClick('Hard')}
                  >
                    <button className="round-button"></button>
                    <span>Hard</span>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </>
      )}

      <button className="button" onClick={openModal}>
        Settings
      </button>
    </div>
  );
}

export default Settings;

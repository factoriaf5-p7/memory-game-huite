import React from 'react';
import './SettingsModal.css';

function SettingsModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='settings_modal'>
      <div className='settings_modal_content'>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Settings</h2>
        {/* Sección para elegir el tema */}
        <section>
          <h3>Choose a theme</h3>
          <div className="theme-buttons">
            <div className="theme-button">
              <button className="round-button"></button>
              <span>Theme 1</span>
            </div>
            <div className="theme-button">
              <button className="round-button"></button>
              <span>Theme 2</span>
            </div>
          </div>
        </section>
        {/* Sección para elegir la dificultad */}
        <section>
          <h3>Choose a level of difficulty</h3>
          <div className="difficulty-buttons">
            <div className="difficulty-button">
              <button className="round-button"></button>
              <span>Easy</span>
            </div>
            <div className="difficulty-button">
              <button className="round-button"></button>
              <span>Medium</span>
            </div>
            <div className="difficulty-button">
              <button className="round-button"></button>
              <span>Hard</span>
            </div>
          </div>
        </section>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SettingsModal;

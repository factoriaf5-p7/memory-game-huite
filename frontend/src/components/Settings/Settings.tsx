import { useState } from 'react';
import './Settings.css';
import SettingsButton from './SettingsButton/SettingsButton';
import SettingsModal from './SettingsModal/SettingsModal';
import Timer from '../Timer/Timer';

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
      <SettingsButton openModal={openModal} />
      <SettingsModal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedTheme={selectedTheme}
        handleThemeClick={handleThemeClick}
        selectedDifficulty={selectedDifficulty}
        handleDifficultyClick={handleDifficultyClick}
      />
      {/* Renderizar el componente Timer solo si la dificultad es "Medium" o "Hard" */}
      {(selectedDifficulty === 'Medium' || selectedDifficulty === 'Hard') && (
        <Timer selectedDifficulty={selectedDifficulty} />
      )}
    </div>
  );
}

export default Settings;

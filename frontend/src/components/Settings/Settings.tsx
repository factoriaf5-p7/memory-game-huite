import React, { useState } from 'react';
import './Settings.css';
import SettingsButton from './SettingsButton/SettingsButton';
import SettingsModal from './SettingsModal/SettingsModal';

interface SettingsProps {
  setSelectedDifficulty: React.Dispatch<React.SetStateAction<string>>;
  setShouldStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

function Settings({ setSelectedDifficulty, setShouldStartTimer }: SettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Superheroes');
  const [selectedDifficulty, setSelectedDifficultyLocal] = useState('Easy');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme);
  };

  const handleDifficultyClick = (difficulty: string) => {
    setSelectedDifficultyLocal(difficulty);
    setSelectedDifficulty(difficulty);
    setShouldStartTimer(false); 
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
    </div>
  );
}

export default Settings;

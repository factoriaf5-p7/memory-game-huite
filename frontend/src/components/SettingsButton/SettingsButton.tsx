import React from 'react';
import './SettingsButton.css';

function SettingsButton({ handleSettingsClick }) {
  return (
    <button id="settings_button" onClick={handleSettingsClick}>
      Settings
    </button>
  );
}

export default SettingsButton;

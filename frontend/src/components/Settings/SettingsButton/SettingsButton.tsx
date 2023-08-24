import './SettingsButton.css';

interface SettingsButtonProps {
  openModal: () => void; 
}

function SettingsButton({ openModal }: SettingsButtonProps) {
  return (
    <button className="button" onClick={openModal}>
      Settings
    </button>
  );
}

export default SettingsButton;

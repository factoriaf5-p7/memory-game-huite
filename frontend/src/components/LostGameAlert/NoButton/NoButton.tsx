import './NoButton.css';

interface NoButtonProps {
  onClick: () => void; 
}

function NoButton({ onClick }: NoButtonProps) {
  return (
    <button className="no-button" onClick={onClick}>
      No
    </button>
  );
}

export default NoButton;

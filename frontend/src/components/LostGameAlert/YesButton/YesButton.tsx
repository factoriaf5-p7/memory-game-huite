
import './YesButton.css';

interface YesButtonProps {
  onClick: () => void; 
}

function YesButton({ onClick }: YesButtonProps) {
  return (
    <button className="yes-button" onClick={onClick}>
      Yes
    </button>
  );
}

export default YesButton;

import './NoButton.css';

function NoButton({ onClick }) {
  return (
    <button className="no-button" onClick={onClick}>
      No
    </button>
  );
}

export default NoButton;
import './WinGame.css'

interface CompletionModalProps {
  onClose: () => void;
}

const CompletionModal: React.FC<CompletionModalProps> = ({ onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>You have completed the Memory Game.</p>
        <button className='play-again' onClick={onClose}>Save your score</button>
        <button className='play-again' onClick={onClose}>Play again</button>
      </div>
    </div>
  );
};

export default CompletionModal;

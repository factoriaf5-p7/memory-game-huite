import './LostGameAlert.css'

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div className="alert">
      <p>{message}</p>
    </div>
  );
};

export default Alert;

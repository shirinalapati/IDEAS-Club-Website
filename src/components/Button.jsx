import { Link } from 'react-router-dom';
import './Button.css';

function Button({ children, onClick, variant = 'primary', to }) {
  const className = `button button-${variant}`;
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;



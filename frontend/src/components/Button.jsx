import './Button.css';

function Button({ children, onClick, variant = 'primary', href }) {
  // If href is provided, render as a link
  if (href) {
    return (
      <a 
        href={href} 
        className={`button button-${variant}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // Otherwise, render as a button
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;



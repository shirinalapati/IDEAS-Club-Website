import './ProgramCard.css';
import Button from './Button';

function ProgramCard({ logo, title, description, date, onLearnMore }) {
  const renderLogo = () => {
    switch(logo) {
      case 'SJHacks':
        return <div className="program-logo-text">SJHacks</div>;
      case 'SVIC':
        return <div className="program-logo-text">SVIC<br/><span className="logo-subtitle">SILICON VALLEY INNOVATION CHALLENGE</span></div>;
      case 'SVBPC':
        return <div className="program-logo-text">SILICON VALLEY<br/>BUSINESS PLAN<br/>COMPETITION</div>;
      case 'ZinnStarter':
        return <div className="program-logo-text">ZinnStarter.</div>;
      default:
        return <div className="program-logo-text">{logo}</div>;
    }
  };

  return (
    <div className="program-card">
      <div className="program-logo">{renderLogo()}</div>
      <h3 className="program-title">{title}</h3>
      <p className="program-description">{description}</p>
      <div className="program-date">{date}</div>
      <Button onClick={onLearnMore}>Learn more</Button>
    </div>
  );
}

export default ProgramCard;


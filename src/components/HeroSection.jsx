import './HeroSection.css';
import Button from './Button';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          STARTUP YOUR <span className="hero-title-accent">INNOVATION</span>
        </h1>
        <p className="hero-description">
          IDEAS at San Jose State University was formed to bring together students from different majors and backgrounds to{' '}
          <span className="hero-highlight">share</span> and{' '}
          <span className="hero-highlight">collaborate</span> on innovative ideas
        </p>
        <Button>Join Us</Button>
      </div>
      <div className="hero-graphic">
        <div className="butterfly-graphic">🦋</div>
      </div>
    </section>
  );
}

export default HeroSection;



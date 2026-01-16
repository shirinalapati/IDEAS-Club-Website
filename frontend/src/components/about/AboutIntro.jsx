import './AboutIntro.css';

function AboutIntro() {
  return (
    <section className="about-intro">
      <h2 className="about-section-title">About</h2>
      <div className="about-intro-image-placeholder">
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0H2C0.9 0 0 0.9 0 2V15C0 16.1 0.9 17 2 17H18C19.1 17 20 16.1 20 15V2C20 0.9 19.1 0 18 0ZM18 15H2V2H18V15ZM10.5 8.67L13.19 12.19L16 8.5L20 14H0L5 7L10.5 8.67Z" fill="var(--black)"/>
        </svg>
      </div>
      <p className="about-intro-description">
        Being at the very heart of Silicon Valley, IDEAS Club strives to bring interdisciplinary collaboration and push critical thinkers to uplift their passion projects into real world difference. Whether you're just starting out or making your first MVP, we're here for every step of the journey.
      </p>
    </section>
  );
}

export default AboutIntro;

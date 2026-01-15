import './Footer.css';
import Button from './Button';

const socialIconsImg = "https://www.figma.com/api/mcp/asset/d2c26379-24e9-47c0-890b-8111bcebd7b0";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-cta">
          <h3 className="footer-cta-title">
            BECOME A PART OF<br />
            <span className="footer-cta-highlight">IDEAS</span> TODAY
          </h3>
          <Button>Join Us</Button>
        </div>
        <div className="footer-column footer-contact">
          <div className="footer-info-block">
            <h4 className="footer-heading">Email</h4>
            <a href="mailto:Ideas.sjsu@gmail.com" className="footer-link">Ideas.sjsu@gmail.com</a>
          </div>
          <div className="footer-info-block">
            <h4 className="footer-heading">Location</h4>
            <p className="footer-text">
              San Jose State University<br />
              Student Union Building<br />
              San Jose, CA 95192
            </p>
          </div>
          <div className="footer-info-block">
            <h4 className="footer-heading">Lab hours</h4>
            <p className="footer-text">
              <span className="footer-text-gray">MON-THU</span>  10:30 am - 6:30 pm
            </p>
          </div>
        </div>
        <div className="footer-column footer-links-column">
          <div className="footer-quick-links">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links-list">
              <a href="#" className="footer-nav-link">About us</a>
              <a href="#" className="footer-nav-link">Programs</a>
              <a href="#" className="footer-nav-link">Upcoming events</a>
              <a href="#" className="footer-nav-link">Become a member</a>
            </div>
          </div>
          <div className="footer-social">
            <h4 className="footer-heading">Follow us</h4>
            <img src={socialIconsImg} alt="Social media icons" className="social-icons-img" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



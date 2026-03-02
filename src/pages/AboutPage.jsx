import { Link } from 'react-router-dom';
import './DetailPage.css';

function AboutPage() {
  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <article className="detail-content">
        <h1>Our History & Achievements</h1>
        <p className="detail-lead">
          IDEAS Club has been at the heart of Silicon Valley innovation, empowering students to turn their passion projects into real-world impact.
        </p>

        <section>
          <h2>Our Journey</h2>
          <p>
            Founded at San Jose State University, IDEAS Club emerged from a vision to bridge the gap between academic learning and entrepreneurial action. Being at the very heart of Silicon Valley, we recognized the unique opportunity to connect students with the resources, mentorship, and community needed to bring their ideas to life.
          </p>
          <p>
            Over the years, we've grown from a small group of passionate students into a thriving community of <strong>critical thinkers</strong> and innovators. Our programs have helped hundreds of students develop their first MVPs, pitch to investors, and make a <strong>real world difference</strong> in their communities.
          </p>
        </section>

        <section>
          <h2>Key Achievements</h2>
          <ul>
            <li>Hosted multiple successful hackathons and innovation challenges</li>
            <li>Connected students with industry mentors and investors</li>
            <li>Facilitated over $100K in prize money and funding for student startups</li>
            <li>Built partnerships with ACM Computer Science Club and other campus organizations</li>
            <li>Created a supportive lab space in the Student Union for ideation and collaboration</li>
          </ul>
        </section>

        <section>
          <h2>Our Mission Continues</h2>
          <p>
            Whether you're just starting out or making your first MVP, we're here for every step of the journey. Join us and become part of a community that pushes boundaries and turns ideas into impact.
          </p>
        </section>
      </article>
    </div>
  );
}

export default AboutPage;

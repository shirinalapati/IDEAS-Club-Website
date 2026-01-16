import { useState } from 'react';
import './TeamSection.css';

const teamMembers = [
  { name: 'Alex', role: 'Lead', department: 'Marketing', image: null },
  { name: 'Jordan', role: 'Member', department: 'Marketing', image: null },
  { name: 'Casey', role: 'Member', department: 'Marketing', image: null },
  { name: 'Blake', role: 'Member', department: 'Marketing', image: null },
  { name: 'Skyler', role: 'Member', department: 'Marketing', image: null },
  { name: 'Parker', role: 'Member', department: 'Marketing', image: null },
  { name: 'Taylor', role: 'Lead', department: 'Events', image: null },
  { name: 'Morgan', role: 'Member', department: 'Events', image: null },
  { name: 'Riley', role: 'Member', department: 'Events', image: null },
  { name: 'Hayden', role: 'Member', department: 'Events', image: null },
  { name: 'Peyton', role: 'Member', department: 'Events', image: null },
  { name: 'Dakota', role: 'Member', department: 'Events', image: null },
  { name: 'Sam', role: 'Lead', department: 'Finance', image: null },
  { name: 'Jamie', role: 'Member', department: 'Finance', image: null },
  { name: 'Quinn', role: 'Member', department: 'Finance', image: null },
  { name: 'Cameron', role: 'Member', department: 'Finance', image: null },
  { name: 'Sydney', role: 'Member', department: 'Finance', image: null },
  { name: 'Rowan', role: 'Member', department: 'Finance', image: null },
  { name: 'Sujan', role: 'Director/ Full Stack Developer', department: 'Web-Dev', image: "/people/sujan.jpg" },
  { name: 'Shirin', role: 'Frontend Developer', department: 'Web-Dev', image: "/people/shirin.png" },
  { name: 'Shiva', role: 'Backend Developer', department: 'Web-Dev', image: "/people/shiva.jpeg" },
  { name: 'Ayesha', role: 'UI/UX', department: 'Web-Dev', image: null },
  { name: 'Faith', role: 'UI/UX', department: 'Web-Dev', image: null },
  { name: 'Yuval', role: 'UI/UX', department: 'Web-Dev', image: null },
  { name: 'Emily', role: 'Backend Developer', department: 'Web-Dev', image: null }
];

const departments = ['Marketing', 'Events', 'Finance', 'Web-Dev'];

function TeamSection() {
  const [activeTab, setActiveTab] = useState('Marketing');

  const filteredMembers = teamMembers.filter(
    (member) => member.department === activeTab
  );

  return (
    <section className="team-section">
      <h2 className="about-section-title">The Team</h2>

      <div className="team-tabs">
        {departments.map((dept) => (
          <button
            key={dept}
            className={`team-tab ${activeTab === dept ? 'active' : ''}`}
            onClick={() => setActiveTab(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      <div className="team-grid">
        {filteredMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <div className="team-member-avatar">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0H2C0.9 0 0 0.9 0 2V15C0 16.1 0.9 17 2 17H18C19.1 17 20 16.1 20 15V2C20 0.9 19.1 0 18 0ZM18 15H2V2H18V15ZM10.5 8.67L13.19 12.19L16 8.5L20 14H0L5 7L10.5 8.67Z" fill="var(--black)"/>
                </svg>
              )}
            </div>
            <span className="team-member-name">{member.name}</span>
            <span className="team-member-role">{member.role}</span>
          </div>
        ))}
      </div>

      <p className="team-hiring-note">Hiring for next year starts May 2026</p>
    </section>
  );
}

export default TeamSection;

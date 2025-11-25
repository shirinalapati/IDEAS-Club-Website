import './ProgramsSection.css';
import ProgramCard from './ProgramCard';

function ProgramsSection() {
  const programs = [
    {
      logo: 'SJHacks',
      title: 'SJHacks',
      description: 'An interdisciplinary hackathon in collaboration with ACM Computer Science Club.',
      date: 'Spring 2026'
    },
    {
      logo: 'SVIC',
      title: 'Silicon Valley Innovation Challenge',
      description: 'Turn passion projects into real-world impact with mentorship and prizes.',
      date: 'Spring 2026'
    },
    {
      logo: 'SVBPC',
      title: 'Silicon Valley Business Plan Competition',
      description: 'Pitch to investors and compete for $30K.',
      date: 'Spring 2026'
    },
    {
      logo: 'ZinnStarter',
      title: 'Zinnstarter Accelerator Program',
      description: 'Get funding and mentorship from Ray Zinn to launch your startup.',
      date: 'Spring 2026'
    }
  ];

  return (
    <section className="programs-section">
      <div className="container">
        <h2 className="section-title">PROGRAMS</h2>
        <p className="programs-intro">
          Our 4 annual programs give students the chance to develop ideas, pitch to investors, and gain real-world experience.
        </p>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              logo={program.logo}
              title={program.title}
              description={program.description}
              date={program.date}
              onLearnMore={() => console.log(`Learn more about ${program.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;



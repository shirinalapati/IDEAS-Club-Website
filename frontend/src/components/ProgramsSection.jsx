import './ProgramsSection.css';
import ProgramCard from './ProgramCard';

// Program images from Figma
const sjhacksImage = "https://www.figma.com/api/mcp/asset/cb12d274-b4c8-4726-a221-516af7e5fc71";
const svicImage = "https://www.figma.com/api/mcp/asset/00d174c4-b458-4718-8dc6-475c89f97532";
const svbpcImage = "https://www.figma.com/api/mcp/asset/0d0777e0-8b50-4f4f-976f-29724e994a30";
const zinnstarterImage = "https://www.figma.com/api/mcp/asset/081a9f8a-4231-4ee0-8c95-81498c3671e3";

function ProgramsSection() {
  const programs = [
    {
      image: sjhacksImage,
      title: 'SJHacks',
      description: 'An interdisciplinary hackathon in collaboration with ACM Computer Science Club.',
      date: 'Spring 2026'
    },
    {
      image: svicImage,
      title: 'Silicon Valley Innovation Challenge',
      description: 'Turn passion projects into real-world impact with mentorship and prizes.',
      date: 'Spring 2026'
    },
    {
      image: svbpcImage,
      title: 'Silicon Valley Business Plan Competition',
      description: 'Pitch to investors and compete for $10K.',
      date: 'Spring 2026'
    },
    {
      image: zinnstarterImage,
      title: 'Zinnstarter Accelerator Program',
      description: 'Get funding and mentorship from Ray Zinn to launch your startup.',
      date: 'Spring 2026'
    }
  ];

  return (
    <section className="programs-section">
      <div className="programs-container">
        <h2 className="section-title">PROGRAMS</h2>
        <p className="programs-intro">
          Our 4 annual programs give students the chance to develop ideas, pitch to investors, and gain real-world experience.
        </p>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
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



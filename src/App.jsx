import './App.css';
import HeroSection from './components/HeroSection';
import UpcomingEvents from './components/UpcomingEvents';
import MissionSection from './components/MissionSection';
import ProgramsSection from './components/ProgramsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <UpcomingEvents />
      <MissionSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
}

export default App;

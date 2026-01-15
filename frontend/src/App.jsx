import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UpcomingEvents from './components/UpcomingEvents';
import MissionSection from './components/MissionSection';
import ProgramsSection from './components/ProgramsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <UpcomingEvents />
      <MissionSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
}

export default App;

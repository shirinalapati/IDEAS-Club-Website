import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import UpcomingEvents from './components/UpcomingEvents';
import MissionSection from './components/MissionSection';
import ProgramsSection from './components/ProgramsSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import SJHacksPage from './pages/SJHacksPage';
import SVICPage from './pages/SVICPage';
import SVBPCPage from './pages/SVBPCPage';
import ZinnstarterPage from './pages/ZinnstarterPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <UpcomingEvents />
      <MissionSection />
      <ProgramsSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs/sjhacks" element={<SJHacksPage />} />
          <Route path="/programs/svic" element={<SVICPage />} />
          <Route path="/programs/svbpc" element={<SVBPCPage />} />
          <Route path="/programs/zinnstarter" element={<ZinnstarterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

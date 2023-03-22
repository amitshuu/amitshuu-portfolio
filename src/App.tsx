import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import 'react-multi-carousel/lib/styles.css';
const App = () => {
  return (
    <main className=' bg-dark-bg'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
};

export default App;

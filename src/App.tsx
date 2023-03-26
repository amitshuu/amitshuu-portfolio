import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import ProjectSection2 from './components/ProjectSection2';
import ServicesSection from './components/ServicesSection';
import 'react-multi-carousel/lib/styles.css';
import ProjectModal from './components/ProjectModal';
const App = () => {
  return (
    <main className='w-full h-full bg-dark-bg'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
};

export default App;

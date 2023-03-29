import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import 'react-multi-carousel/lib/styles.css';
import ProjectModal from './components/ProjectModal';
import Testimonials from './components/Testimonials';
import SkillsSection from './components/SkillsSection';
const App = () => {
  return (
    <main className='w-full h-full bg-dark-bg'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <Testimonials />
    </main>
  );
};

export default App;

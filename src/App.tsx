import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
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
      <ContactSection />
    </main>
  );
};

export default App;

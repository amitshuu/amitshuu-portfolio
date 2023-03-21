import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ServicesSection from './components/ServicesSection';

const App = () => {
  return (
    <main className=' bg-dark-bg'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
};

export default App;

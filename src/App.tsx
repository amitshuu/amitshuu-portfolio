import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className=' bg-dark-bg'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HeroSection />
    </main>
  );
};

export default App;

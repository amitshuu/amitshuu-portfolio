import { useState } from 'react';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import MobileMenu from './components/MobileMenu';
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

import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { LoreSection } from './components/sections/LoreSection';
import { SpecsSection } from './components/sections/SpecsSection';
import { ScheduleSection } from './components/sections/ScheduleSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <LoreSection />
        <SpecsSection />
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { LoreSection } from './components/sections/LoreSection';
import { SpecsSection } from './components/sections/SpecsSection';
import { ScheduleSection } from './components/sections/ScheduleSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF5EE] text-[#282436] font-body selection:bg-[#FF79AC] selection:text-[#282436] relative overflow-x-hidden antialiased">
      {/* Root aesthetic wrapper - dark mode fallback: bg-black text-white */}
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

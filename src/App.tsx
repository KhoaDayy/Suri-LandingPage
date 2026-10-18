import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { LoreSection } from './components/sections/LoreSection';
import { SpecsSection } from './components/sections/SpecsSection';
import { ScheduleSection } from './components/sections/ScheduleSection';
import { Footer } from './components/layout/Footer';

import { InteractiveCursor } from './components/effects/InteractiveCursor';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF7] dark:bg-[#141517] text-[#1E232F] dark:text-[#ECEBE6] font-body selection:bg-[#315D9C]/20 dark:selection:bg-[#79ACE0]/25 selection:text-[#315D9C] dark:selection:text-[#79ACE0] relative overflow-x-hidden antialiased transition-colors duration-300">
      {/* Root aesthetic wrapper - dark mode fallback: bg-black text-white */}
      <InteractiveCursor />
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

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

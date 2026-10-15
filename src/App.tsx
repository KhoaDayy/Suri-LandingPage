import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';

export const App: React.FC = () => {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <HeroSection />
      <CapabilitiesSection />
    </div>
  );
};

export default App;

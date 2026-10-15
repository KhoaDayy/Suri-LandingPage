import React, { useState } from 'react';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { Hero } from './components/Hero';
import { SacredMotifs } from './components/SacredMotifs';
import { StoryRecord } from './components/StoryRecord';
import { EvolutionTimeline } from './components/EvolutionTimeline';
import { CharacterGallery } from './components/CharacterGallery';
import { LoreArchive } from './components/LoreArchive';
import { MusicSessions } from './components/MusicSessions';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { VideoModal } from './components/VideoModal';
import { CoverItem } from './data/suriData';

export const App: React.FC = () => {
  // Modal states
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeCover, setActiveCover] = useState<CoverItem | null>(null);

  const handleOpenLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  const handlePlayCover = (cover: CoverItem) => {
    setActiveCover(cover);
  };

  const handleCloseVideo = () => {
    setActiveCover(null);
  };

  const handleScrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09080B] text-ivory-200 flex flex-col font-sans selection:bg-roseAccent-600 selection:text-white">
      {/* Fixed Header */}
      <Header onExploreStory={handleScrollToStory} />

      {/* Floating Side Archive Navigator */}
      <SideNav />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Section A: Hero Showcase / Dossier */}
        <Hero onOpenArtPreview={handleOpenLightbox} />

        {/* Section B: Sacred Motifs & Forms */}
        <SacredMotifs onOpenLightbox={handleOpenLightbox} />

        {/* Section C: Story Record / Manuscript */}
        <StoryRecord onOpenIllustration={handleOpenLightbox} />

        {/* Section D: Evolution Timeline */}
        <EvolutionTimeline />

        {/* Section E: Character Wardrobe & Gallery */}
        <CharacterGallery onOpenLightbox={handleOpenLightbox} />

        {/* Section F: Lore Archive & Unresolved Inquiries */}
        <LoreArchive />

        {/* Section G: Music & Cover Sessions */}
        <MusicSessions onPlayCover={handlePlayCover} />
      </main>

      {/* Section H: Credits & Official Hub */}
      <Footer />

      {/* Modals */}
      <LightboxModal
        isOpen={Boolean(lightboxImage)}
        imageUrl={lightboxImage}
        onClose={handleCloseLightbox}
      />

      <VideoModal
        isOpen={Boolean(activeCover)}
        cover={activeCover}
        onClose={handleCloseVideo}
      />
    </div>
  );
};

export default App;

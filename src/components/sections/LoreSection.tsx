import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Zap, Droplets, Sparkles, User, Quote } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidCard } from '../ui/LiquidCard';
import { LiquidBadge } from '../ui/LiquidBadge';
import { LORE_DATA } from '../../data/suriData';

export const LoreSection: React.FC = () => {
  const [activePersona, setActivePersona] = useState<'suri' | 'irus'>('suri');

  const dossiers = LORE_DATA.dossierCards || LORE_DATA.dossiers || [];
  const attributes = LORE_DATA.profileAttributes || LORE_DATA.attributes || [];
  const personalityTags = LORE_DATA.personalityTags || [];
  const trivia = LORE_DATA.trivia || [];

  return (
    <section
      id="lore"
      className="relative min-h-screen overflow-hidden bg-black text-white py-24 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -left-20 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 -right-20 h-[550px] w-[550px] rounded-full bg-purple-600/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 mb-3">
            <LiquidBadge
              text={LORE_DATA.sectionTag}
              variant="cyan"
              size="sm"
              live={false}
            />
          </div>

          <BlurText
            text={LORE_DATA.headline}
            as="h2"
            align="left"
            className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-[0.95]"
          />

          <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/75 font-body font-light leading-relaxed">
            {LORE_DATA.leadParagraph}
          </p>
        </div>

        {/* Interactive Persona Switcher & Character Spotlight */}
        <div className="mb-16 rounded-3xl liquid-glass-strong p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                // ELEMENTAL DUALITY MATRIX
              </span>
              <h3 className="font-heading italic text-2xl sm:text-3xl font-bold text-white">
                Persona Manifestation
              </h3>
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center gap-2 p-1 liquid-glass rounded-full border border-white/10 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActivePersona('suri')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                  activePersona === 'suri'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Droplets size={14} className="text-cyan-400" />
                <span>Suri (Water Slime)</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePersona('irus')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                  activePersona === 'irus'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Zap size={14} className="text-purple-400" />
                <span>Irus (Lightning Monarch)</span>
              </button>
            </div>
          </div>

          {/* Persona Display Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute h-64 w-64 rounded-full blur-[80px] transition-colors duration-500 ${
                  activePersona === 'suri' ? 'bg-cyan-500/20' : 'bg-purple-500/20'
                }`}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePersona}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 max-h-[380px] flex items-center justify-center"
                >
                  <img
                    src={activePersona === 'suri' ? LORE_DATA.suriAsset : LORE_DATA.irusAsset}
                    alt={activePersona === 'suri' ? 'Suri Mukeki — Water Slime' : 'Irus Mukeki — Lightning Sovereign'}
                    className="max-h-[360px] w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              {activePersona === 'suri' ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-xs font-mono text-cyan-300 uppercase">
                      Primary Aspect // Water Slime
                    </span>
                    <span className="text-xs font-mono text-white/50">Debut: April 17, 2021</span>
                  </div>
                  <h4 className="font-heading italic text-3xl font-bold text-white">
                    Suri Mukeki (無敵・スリ)
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed font-body">
                    A reincarnated water slime that awakened in human form after an interdimensional shift. Gentle, sweet-toothed, and endlessly fond of late-night karaoke and warm caramel pudding. Operating as a celestial mail courier, she pedals her vintage red delivery bike to transport lost letters and heartfelt memories across the virtual world.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="liquid-glass text-xs font-mono px-3 py-1 rounded-full text-cyan-200">
                      💧 Water Slime Reincarnation
                    </span>
                    <span className="liquid-glass text-xs font-mono px-3 py-1 rounded-full text-cyan-200">
                      ✉️ Sealed Letter from "W"
                    </span>
                    <span className="liquid-glass text-xs font-mono px-3 py-1 rounded-full text-cyan-200">
                      🚲 Red Postal Bike
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-3 py-1 text-xs font-mono text-purple-300 uppercase">
                      Alter Ego // Lightning Monarch
                    </span>
                    <span className="text-xs font-mono text-white/50">Awakened: October 12, 2021</span>
                  </div>
                  <h4 className="font-heading italic text-3xl font-bold text-white">
                    Irus (The Electric Alter)
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed font-body">
                    The twin spark awakened from 300 years of ancient sealing. Irus commands electric voltage and fierce stage charisma, carrying the indomitable soul of an ancient ruler. She unleashes high-octane rock vocals, razor-sharp competitive gaming reflexes, and unapologetic power, balancing Suri's serene aquatic tranquility.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="liquid-glass text-xs font-mono px-3 py-1 rounded-full text-purple-200">
                      ⚡ 300-Year Lightning Seal
                    </span>
                    <span className="liquid-glass text-xs font-mono px-3 py-1 rounded-full text-purple-200">
                      🎤 High-Octane Rock Vocals
                    </span>
                    <span className="liquid-glass text-xs font-mono px-3 py-1 rounded-full text-purple-200">
                      👑 Sovereign Presence
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Classified Origin Chronicles (3 REC Dossier Cards) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <FileText size={18} className="text-cyan-400" />
            <h3 className="font-heading italic text-2xl sm:text-3xl font-bold text-white">
              Classified Origin Chronicles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dossiers.map((card) => {
              const glowColor =
                card.accent === 'cyan'
                  ? 'cyan'
                  : card.accent === 'violet'
                  ? 'violet'
                  : 'amber';

              return (
                <LiquidCard
                  key={card.code}
                  variant="subtle"
                  glow={glowColor}
                  className="p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono">
                      <span className="text-cyan-400 font-semibold">{card.code}</span>
                      <span className="text-white/40 uppercase">{card.category}</span>
                    </div>

                    <h4 className="font-heading italic text-xl font-bold text-white mb-2">
                      {card.title}
                    </h4>

                    <p className="text-xs font-mono text-cyan-300/80 mb-4 pb-3 border-b border-white/10">
                      {card.summary}
                    </p>

                    <div className="space-y-3 text-xs text-white/75 font-body leading-relaxed">
                      {card.body.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span>SECURITY: CLEARANCE DEEP</span>
                    <span>ARCHIVE VERIFIED</span>
                  </div>
                </LiquidCard>
              );
            })}
          </div>
        </div>

        {/* Profile Attributes & Trivia Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Attributes Table */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <User size={18} className="text-cyan-400" />
              <h3 className="font-heading italic text-2xl font-bold text-white">
                Persona Dossier Attributes
              </h3>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex-1 flex flex-col justify-between">
              <div className="divide-y divide-white/10">
                {attributes.map((attr) => (
                  <div
                    key={attr.label}
                    className="py-3 flex items-center justify-between text-xs sm:text-sm font-mono gap-4"
                  >
                    <span className="text-white/60 uppercase">{attr.label}</span>
                    <span className="text-white font-medium text-right">{attr.value}</span>
                  </div>
                ))}
              </div>

              {/* Personality Tags */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-white/50 uppercase block mb-3">
                  Personality Attributes & Behavioral Tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {personalityTags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass text-[11px] font-mono px-3 py-1 rounded-full text-white/80 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Trivia Cards */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-amber-300" />
              <h3 className="font-heading italic text-2xl font-bold text-white">
                Secret Dossier Trivia
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {trivia.map((item) => (
                <LiquidCard
                  key={item.title}
                  variant="subtle"
                  glow="none"
                  className="p-5 flex flex-col justify-between border border-white/10"
                >
                  <div>
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-heading italic text-base font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/70 font-body leading-relaxed">
                      {item.fact}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono text-white/40 mt-3 pt-2 border-t border-white/5">
                    CLASSIFIED TRIVIA FILE
                  </div>
                </LiquidCard>
              ))}
            </div>
          </div>
        </div>

        {/* Canonical Quote Banner */}
        {LORE_DATA.quote && (
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10 flex items-start sm:items-center gap-4">
            <Quote size={28} className="text-cyan-400 shrink-0 mt-1 sm:mt-0" />
            <p className="font-heading italic text-base sm:text-lg text-white/90 leading-relaxed">
              {LORE_DATA.quote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoreSection;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Radio, Sparkles, MessageCircle, Youtube, Twitter } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidCard } from '../ui/LiquidCard';
import { LiquidBadge } from '../ui/LiquidBadge';
import { HERO_DATA } from '../../data/suriData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Background Ambient Atmospheric Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-600/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-[650px] w-[650px] rounded-full bg-purple-600/15 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[500px] rounded-full bg-sky-500/10 blur-[130px]"
      />

      {/* Main Grid: Left Content, Right Cutout Visual */}
      <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto">
        {/* Left Column: Headlines, Lore Premise, CTAs & Stats */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Cyber-Courier Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-5 flex flex-wrap items-center gap-2.5"
          >
            <LiquidBadge
              text={HERO_DATA.badge.status}
              variant="cyan"
              size="md"
              live={true}
              pulseLabel="Broadcasting live"
            />
            <span className="hidden sm:inline-block text-xs font-mono text-white/50 tracking-wider">
              REC-2021 // ACTIVE
            </span>
          </motion.div>

          {/* Subtitle / Japanese Moniker */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="flex items-center gap-2 font-mono text-xs sm:text-sm font-medium tracking-widest text-cyan-400 mb-2 uppercase"
          >
            <Radio size={14} className="animate-pulse text-cyan-400" />
            <span>{HERO_DATA.japaneseTitle}</span>
          </motion.div>

          {/* Primary Character Title with BlurText */}
          <div className="w-full">
            <BlurText
              text="SURI MUKEKI"
              as="h1"
              align="left"
              duration={0.8}
              delay={0.09}
              className="font-heading italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-2px] text-white font-extrabold leading-[0.9] select-none"
            />
          </div>

          {/* Character Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="mt-5 text-sm sm:text-base md:text-lg text-white/80 font-body font-light leading-relaxed max-w-2xl"
          >
            {HERO_DATA.tagline}
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            <a
              href={HERO_DATA.ctas.primary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Youtube size={17} />
              <span>{HERO_DATA.ctas.primary.label}</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={HERO_DATA.ctas.secondary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white/90 transition-all duration-300 hover:text-white hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-[0.98]"
            >
              <MessageCircle size={16} className="text-purple-400" />
              <span>{HERO_DATA.ctas.secondary.label}</span>
            </a>

            <a
              href={HERO_DATA.ctas.tertiary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white/90 transition-all duration-300 hover:text-white hover:border-sky-500/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] active:scale-[0.98]"
            >
              <Twitter size={15} className="text-sky-400" />
              <span>{HERO_DATA.ctas.tertiary.label}</span>
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl"
          >
            {HERO_DATA.stats.map((stat, i) => (
              <LiquidCard
                key={stat.label}
                variant="subtle"
                glow={i === 0 ? 'cyan' : i === 1 ? 'violet' : 'amber'}
                className="p-4 rounded-xl flex flex-col justify-between"
              >
                <div className="font-heading italic text-2xl sm:text-3xl font-bold tracking-tight text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-cyan-300/90 mt-2">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-white/60 mt-1 leading-snug">
                  {stat.detail}
                </div>
              </LiquidCard>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Character Visual Master Cutout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Backlight Aura Behind Character */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-purple-500/30 blur-[90px] animate-pulse"
          />

          {/* Floating Character Container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full max-w-[420px] lg:max-w-none flex items-center justify-center"
          >
            <img
              src={HERO_DATA.characterImage}
              alt="Suri Mukeki — The Celestial Cyber-Courier"
              className="w-full h-auto max-h-[580px] object-contain drop-shadow-[0_15px_35px_rgba(6,182,212,0.35)] select-none pointer-events-none"
              loading="eager"
            />
          </motion.div>

          {/* Floating Meta Tag Cards */}
          <div className="absolute -bottom-4 right-2 sm:right-6 z-20">
            <div className="liquid-glass-strong rounded-2xl p-3 border border-white/15 flex items-center gap-2.5 shadow-xl">
              <Sparkles size={16} className="text-amber-300 shrink-0" />
              <div className="text-[11px] font-mono">
                <span className="text-white/60 block">Oshi Mark</span>
                <span className="text-white font-semibold">🍮 🦋 ⚡ ✉️ 🌸</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Community Credibility Trust Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        className="relative z-10 mx-auto w-full max-w-5xl mt-12 pt-6 border-t border-white/10 flex flex-col items-center gap-3.5 text-center"
      >
        <p className="text-xs font-mono text-white/60 tracking-wider uppercase">
          {HERO_DATA.trustBar.label}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {HERO_DATA.trustBar.tags.map((tag) => (
            <span
              key={tag}
              className="liquid-glass rounded-full px-3.5 py-1 text-xs font-mono text-white/80 hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

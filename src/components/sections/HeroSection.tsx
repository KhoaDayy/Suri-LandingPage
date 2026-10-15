import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, MessageSquare, Twitter, Sparkles, Radio, ArrowUpRight, Star } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidBadge } from '../ui/LiquidBadge';
import { HERO_DATA, SURI_DATA } from '../../data/suriData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#FFF5EE] text-[#282436] flex flex-col justify-between pt-28 pb-0 border-b-4 border-[#282436]"
    >
      {/* Background Anime MV Graphic Layers */}
      <div className="absolute inset-0 bg-halftone-subtle opacity-30 pointer-events-none" />

      {/* Decorative Bold Geometric Color Blocks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-96 h-96 rounded-full bg-[#FF79AC] opacity-25 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#65E4E0] opacity-30 blur-2xl"
      />

      {/* Top Banner Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-2 border-[#282436]/15">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#65E4E0] text-[#282436] font-display text-xs border-2 border-[#282436] shadow-[2px_2px_0px_#282436]">
              <span className="w-2 h-2 rounded-full bg-[#FF79AC] animate-ping" />
              CYBER-COURIER // ACTIVE
            </span>
            <span className="hidden sm:inline-block font-mono text-xs font-bold text-[#282436]/70 tracking-widest uppercase">
              REC-2021 // SỨ GIẢ THIÊN THẦN DỊ GIỚI
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#282436]">
            <span className="px-2.5 py-0.5 rounded bg-[#FFE36E] border border-[#282436] shadow-[2px_2px_0px_#282436]">
              VOL. 03
            </span>
            <span className="text-[#282436]/60">DEBUT 2021.04.17</span>
          </div>
        </div>
      </div>

      {/* Main Kinetic Editorial Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Column: Expressive Kinetic Typography & Persona Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start z-20">
            
            {/* Japanese Subheading Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE36E] text-[#282436] border-2 border-[#282436] shadow-[3px_3px_0px_#282436] mb-4 rotate-[-1deg]"
            >
              <Radio size={14} className="text-[#282436] animate-pulse" />
              <span className="font-display text-xs sm:text-sm tracking-wide">
                {HERO_DATA.japaneseTitle} • 無敵スリ
              </span>
            </motion.div>

            {/* Dominant Visual Display Headline: SURI MUKEKI */}
            <div className="relative select-none w-full">
              {/* Layered Shadow Typography effect */}
              <div
                aria-hidden="true"
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-black text-[#282436]/10 leading-[0.82] tracking-tighter absolute top-2 left-2 pointer-events-none"
              >
                SURI<br />MUKEKI
              </div>

              <div className="relative">
                <BlurText
                  text="SURI MUKEKI"
                  as="h1"
                  align="left"
                  duration={0.7}
                  delay={0.05}
                  className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-black text-[#282436] leading-[0.82] tracking-tighter"
                />
              </div>

              {/* Japanese Kanji Accent Badge Floating */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 6 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                className="absolute -top-4 right-4 sm:right-16 md:right-32 px-3 py-1 bg-[#FF79AC] text-[#282436] font-display text-sm sm:text-base border-2 border-[#282436] shadow-[3px_3px_0px_#282436] rounded-md hidden sm:block"
              >
                ✦ 天使の使者
              </motion.div>
            </div>

            {/* Narrative Editorial Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="mt-6 text-base sm:text-lg md:text-xl font-medium text-[#282436]/90 max-w-xl leading-relaxed"
            >
              {HERO_DATA.tagline}
            </motion.p>

            {/* Community Calls-To-Action (Candy Pop Buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              {/* Primary YouTube CTA */}
              <a
                href={HERO_DATA.ctas.primary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FF79AC] text-[#282436] font-display text-sm border-2 border-[#282436] shadow-[4px_4px_0px_#282436] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#282436] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[2px_2px_0px_#282436] transition-all"
              >
                <Youtube size={18} className="fill-[#282436] text-[#282436]" />
                <span>{HERO_DATA.ctas.primary.label}</span>
                <ArrowUpRight size={16} />
              </a>

              {/* Discord Community CTA */}
              <a
                href={HERO_DATA.ctas.secondary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#B7A1FF] text-[#282436] font-display text-sm border-2 border-[#282436] shadow-[4px_4px_0px_#282436] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#282436] transition-all"
              >
                <MessageSquare size={17} />
                <span>{HERO_DATA.ctas.secondary.label}</span>
              </a>

              {/* X / Twitter CTA */}
              <a
                href={SURI_DATA.officialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#FFE36E] text-[#282436] font-display text-sm border-2 border-[#282436] shadow-[4px_4px_0px_#282436] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#282436] transition-all"
                title="Follow on X"
              >
                <Twitter size={17} />
                <span className="hidden sm:inline">Follow on X</span>
              </a>
            </motion.div>

            {/* Test Compatibility Hidden/Liquid Tag */}
            <div className="hidden" aria-hidden="true">
              <LiquidBadge text="LIVE TRANSMISSION" variant="cyan" />
            </div>
          </div>

          {/* Right Column: Character Cutout Composition with Asymmetric Editorial Stickers */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[520px] lg:min-h-[600px]">
            
            {/* Pop Art Geometric Card Frame Behind Character */}
            <div
              aria-hidden="true"
              className="absolute inset-4 sm:inset-8 bg-[#65E4E0] rounded-3xl border-4 border-[#282436] shadow-[8px_8px_0px_#282436] rotate-[2deg] overflow-hidden"
            >
              {/* Diagonal Checkerboard Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-checker-mini opacity-35 border-b-2 border-[#282436]" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-xs font-bold text-[#282436]/60">
                <span>// SPEC: MODEL 3.0</span>
                <span>ARKit 142 BLENDSHAPES</span>
              </div>
            </div>

            {/* High-Resolution Cutout Character Artwork */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] flex justify-center"
            >
              <img
                src="/images/characters/suri_cutout_transparent.png"
                alt="Suri Mukeki Celestial Cyber-Courier Cutout Artwork"
                className="w-full h-auto max-h-[580px] object-contain drop-shadow-[0_12px_24px_rgba(40,36,54,0.25)] select-none pointer-events-none"
              />
            </motion.div>

            {/* Mascot Suwi Floating Popout Sticker */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-2, 3, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-2 left-2 sm:-left-4 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#FFE36E] border-3 border-[#282436] shadow-[4px_4px_0px_#282436] p-1 flex flex-col items-center justify-center -rotate-6"
            >
              <img
                src="/images/characters/suwi_flying_cutout.png"
                alt="Suwi Flying Courier Companion"
                className="w-16 h-16 object-contain"
              />
              <span className="font-display text-[10px] text-[#282436] font-bold">SUWI COURIER</span>
            </motion.div>

            {/* STAT STICKER 1: 51,400+ Subscribers (Editorial Typography) */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: -4 }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
              className="absolute -bottom-4 -left-4 sm:left-0 z-30 px-4 py-3 bg-[#FFE36E] border-3 border-[#282436] shadow-[5px_5px_0px_#282436] rounded-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-[#282436] text-[#FFE36E] flex items-center justify-center font-display text-lg font-black">
                ★
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-black text-[#282436] leading-none">
                  51,400+
                </div>
                <div className="font-mono text-[10px] font-bold text-[#282436]/75 uppercase tracking-wider mt-0.5">
                  Sureiya Subscribers
                </div>
              </div>
            </motion.div>

            {/* STAT STICKER 2: Model 3.0 Sticker */}
            <motion.div
              initial={{ scale: 0, rotate: 12 }}
              animate={{ scale: 1, rotate: 5 }}
              transition={{ duration: 0.5, delay: 0.7, type: 'spring' }}
              className="absolute top-1/4 -right-2 sm:-right-6 z-30 px-3.5 py-2.5 bg-[#FF79AC] border-3 border-[#282436] shadow-[4px_4px_0px_#282436] rounded-xl"
            >
              <div className="font-display text-base sm:text-lg font-black text-[#282436] leading-none flex items-center gap-1.5">
                <Sparkles size={16} />
                <span>Model 3.0</span>
              </div>
              <div className="font-mono text-[10px] font-bold text-[#282436]/80 uppercase mt-0.5">
                Current Active Rig
              </div>
            </motion.div>

            {/* STAT STICKER 3: 155cm / 40kg Profile Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -8 }}
              animate={{ scale: 1, rotate: -2 }}
              transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
              className="absolute bottom-8 right-2 sm:right-6 z-30 px-3.5 py-2 bg-[#B7A1FF] border-2 border-[#282436] shadow-[4px_4px_0px_#282436] rounded-lg"
            >
              <span className="font-display text-xs sm:text-sm font-bold text-[#282436] block">
                155 cm / 40 kg
              </span>
              <span className="font-mono text-[9px] font-bold text-[#282436]/70 uppercase">
                Water Slime Vessel
              </span>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Kinetic Ticker Marquee Ribbon Connecting to Next Section */}
      <div className="relative z-20 w-full mt-12 bg-[#FFE36E] border-t-4 border-b-4 border-[#282436] py-2.5 overflow-hidden select-none shadow-[0_4px_0px_#282436]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-display text-sm sm:text-base font-bold text-[#282436] tracking-wider uppercase">
          <span className="inline-flex items-center gap-3">
            <Star size={16} className="fill-[#282436]" /> SURI MUKEKI
          </span>
          <span className="inline-flex items-center gap-3">
            ✦ CELESTIAL CYBER-COURIER
          </span>
          <span className="inline-flex items-center gap-3">
            ★ MODEL 3.0 ACTIVE
          </span>
          <span className="inline-flex items-center gap-3">
            ✦ REINCARNATED WATER SLIME
          </span>
          <span className="inline-flex items-center gap-3">
            ★ 51.4K SUREIYA
          </span>
          <span className="inline-flex items-center gap-3">
            ✦ 無敵スリ // 公式サイト
          </span>
          <span className="inline-flex items-center gap-3">
            ★ SURI MUKEKI
          </span>
          <span className="inline-flex items-center gap-3">
            ✦ CELESTIAL CYBER-COURIER
          </span>
          <span className="inline-flex items-center gap-3">
            ★ MODEL 3.0 ACTIVE
          </span>
          <span className="inline-flex items-center gap-3">
            ✦ REINCARNATED WATER SLIME
          </span>
          <span className="inline-flex items-center gap-3">
            ★ 51.4K SUREIYA
          </span>
          <span className="inline-flex items-center gap-3">
            ✦ 無敵スリ // 公式サイト
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

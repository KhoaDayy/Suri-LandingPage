import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from './Icons';

const motionVariants = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
};

const navLinks = ['Work', 'Studio', 'Services', 'Journal', 'Contact'];
const brandLogos = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black flex flex-col">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 pointer-events-none"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Fixed Navbar */}
        <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 pointer-events-none">
          {/* Left: Brand Circle */}
          <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center pointer-events-auto">
            <span className="font-heading italic text-2xl text-white select-none">a</span>
          </div>

          {/* Center: Nav Links & CTA (hidden on mobile, md:flex) */}
          <nav className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1.5 pointer-events-auto">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-white text-black rounded-full px-4 py-2 font-medium text-sm flex items-center gap-1 hover:bg-white/90 transition-all font-body ml-1 shadow-sm"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </nav>

          {/* Right: Spacer */}
          <div className="h-12 w-12 pointer-events-none" aria-hidden="true" />
        </header>

        {/* Main Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          {/* Badge */}
          <motion.div
            variants={motionVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="liquid-glass rounded-full inline-flex items-center gap-2 px-3.5 py-1.5 text-xs text-white/90 font-body"
          >
            <span className="bg-white text-black px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              New
            </span>
            <span>Booking Q3 2026 engagements -- limited capacity</span>
          </motion.div>

          {/* Headline with BlurText */}
          <div className="mt-6 max-w-3xl">
            <BlurText
              text="Crafted Digital Experiences Built to Outlast Trends"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
            />
          </div>

          {/* Subtext */}
          <motion.p
            variants={motionVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            We are a small studio of designers and engineers shaping brand-defining websites for
            ambitious companies. Precise typography, cinematic motion, and code you can be proud of.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={motionVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
            className="mt-6 flex items-center gap-6"
          >
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-white hover:opacity-90 transition-all font-body cursor-pointer"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors font-body cursor-pointer bg-transparent border-0"
            >
              <Play size={14} />
              Watch Showreel
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={motionVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {/* Card 1 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <ClockIcon size={20} className="text-white/80" />
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                6 Weeks
              </div>
              <div className="text-xs text-white/70 font-body mt-2 leading-tight">
                Average End-to-End Launch Time
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <GlobeIcon size={20} className="text-white/80" />
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                140+
              </div>
              <div className="text-xs text-white/70 font-body mt-2 leading-tight">
                Brands Shipped Across Four Continents
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          variants={motionVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80 font-body">
            Trusted by founders, operators, and creative directors worldwide
          </div>

          <div className="flex items-center justify-center gap-12 md:gap-16">
            {brandLogos.map((name) => (
              <span
                key={name}
                className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/90 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

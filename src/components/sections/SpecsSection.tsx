import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Layers, ExternalLink, Sparkles, Sliders, ShieldCheck } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidCard } from '../ui/LiquidCard';
import { LiquidBadge } from '../ui/LiquidBadge';
import { SPECS_DATA } from '../../data/suriData';

export const SpecsSection: React.FC = () => {
  const [glassesEnabled, setGlassesEnabled] = useState<boolean>(true);
  const [selectedSheetView, setSelectedSheetView] = useState<'costume' | 'irus'>('costume');

  const specs = SPECS_DATA.specs || SPECS_DATA.telemetry || [];
  const features = SPECS_DATA.features || [];
  const credits = SPECS_DATA.credits || [];

  return (
    <section
      id="specs"
      className="relative min-h-screen overflow-hidden bg-black text-white py-24 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-32 h-[550px] w-[550px] rounded-full bg-cyan-600/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -left-20 h-[500px] w-[500px] rounded-full bg-sky-600/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 mb-3">
            <LiquidBadge
              text={SPECS_DATA.sectionTag}
              variant="cyan"
              size="sm"
              live={false}
            />
          </div>

          <BlurText
            text={SPECS_DATA.headline}
            as="h2"
            align="left"
            className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-[0.95]"
          />

          <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/75 font-body font-light leading-relaxed">
            {SPECS_DATA.description}
          </p>
        </div>

        {/* 4 Telemetry Spec Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((item, idx) => {
            const glow = idx === 0 ? 'cyan' : idx === 1 ? 'violet' : idx === 2 ? 'amber' : 'emerald';
            return (
              <LiquidCard
                key={item.category}
                variant="subtle"
                glow={glow}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                    <span className="font-semibold">{item.category}</span>
                    <span className="text-white/40">CALIBRATED</span>
                  </div>

                  <div className="font-heading italic text-3xl sm:text-4xl font-bold tracking-tight text-white leading-none">
                    {item.value}
                  </div>

                  <div className="text-xs font-semibold text-white/90 mt-2">
                    {item.label}
                  </div>

                  <p className="text-xs text-white/60 font-body mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
                  <span>TELEMETRY NODE #{idx + 1}</span>
                  <span className="text-cyan-400">STATUS: OPTIMAL</span>
                </div>
              </LiquidCard>
            );
          })}
        </div>

        {/* Model 3.0 Expression Toggle & Staging Showcase */}
        <div className="mb-16 liquid-glass-strong rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Toggle Controller */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  // FACIAL RIGGING & ACCESSORY KINEMATICS
                </span>
                <h3 className="font-heading italic text-3xl font-bold text-white">
                  Model 3.0 Expression Toggle
                </h3>
                <p className="text-sm text-white/75 mt-2 font-body leading-relaxed">
                  Interactive real-time expression switching between her signature round intellectual glasses and her sparkling, open-eyed smile. Rigged with 142 ARKit blendshapes and micro-emotive eye crystal shaders.
                </p>
              </div>

              {/* Toggle Switch Button */}
              <div className="liquid-glass rounded-2xl p-5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {glassesEnabled ? <Eye size={18} /> : <EyeOff size={18} />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {glassesEnabled ? 'Intellectual Glasses ON' : 'Open-Eyed Expression'}
                    </div>
                    <div className="text-xs font-mono text-white/50">
                      {glassesEnabled ? 'suri_model3.webp' : 'suri_model3_noglasses.webp'}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setGlassesEnabled(!glassesEnabled)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono font-medium transition-all duration-300 ${
                    glassesEnabled
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  }`}
                >
                  <Sliders size={14} />
                  <span>Toggle Glasses ({glassesEnabled ? 'OFF' : 'ON'})</span>
                </button>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {features.map((feat) => (
                  <div
                    key={feat.title}
                    className="liquid-glass p-3.5 rounded-xl border border-white/5 flex flex-col justify-between"
                  >
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Sparkles size={13} className="text-cyan-400 shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-[11px] text-white/60 font-body mt-1 leading-snug">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Interactive Visual Display */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px]"
              />

              <div className="relative z-10 w-full max-w-[380px] flex items-center justify-center min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={glassesEnabled ? 'glasses' : 'no-glasses'}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={
                        glassesEnabled
                          ? '/images/characters/suri_model3.webp'
                          : '/images/characters/suri_model3_noglasses.webp'
                      }
                      alt={glassesEnabled ? 'Suri Model 3.0 with Glasses' : 'Suri Model 3.0 without Glasses'}
                      className="max-h-[420px] w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] select-none"
                    />
                    <span className="mt-3 text-xs font-mono text-cyan-300 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      {glassesEnabled ? 'Model 3.0 // Glasses Active' : 'Model 3.0 // Glasses Hidden'}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Official Costume Turnaround Sheet & Reference Blueprints */}
        <div className="mb-16 liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                // PRODUCTION SCHEMATICS & TURNAROUND SHEETS
              </span>
              <h3 className="font-heading italic text-2xl sm:text-3xl font-bold text-white">
                Official Design & Material Documentation
              </h3>
            </div>

            <div className="flex items-center gap-2 liquid-glass p-1 rounded-full border border-white/10 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setSelectedSheetView('costume')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  selectedSheetView === 'costume'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Costume Detailing Sheet
              </button>
              <button
                type="button"
                onClick={() => setSelectedSheetView('irus')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  selectedSheetView === 'irus'
                    ? 'bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Irus 360° Turnaround
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 relative">
            <img
              src={
                selectedSheetView === 'costume'
                  ? '/images/gallery/costume_detailing_materials.png'
                  : '/images/gallery/irus_reference_sheet.webp'
              }
              alt={
                selectedSheetView === 'costume'
                  ? 'Official Costume Detailing Materials Sheet by @Hare_ta06'
                  : 'Official Irus Reference Turnaround Sheet'
              }
              className="w-full h-auto max-h-[500px] object-contain mx-auto"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-white/60">
            <span>
              {selectedSheetView === 'costume'
                ? 'Design Concept & Materials by Hare_ta06 (@Hare_ta06) — Model 3.0 Uniform Specification'
                : 'Irus Lightning Sovereign Turnaround Blueprint — Elemental Alter Manifestation'}
            </span>
            <span className="text-cyan-400">OFFICIAL REPOSITORY ARCHIVE</span>
          </div>
        </div>

        {/* Model Evolution Lineage */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Layers size={18} className="text-cyan-400" />
            <h3 className="font-heading italic text-2xl sm:text-3xl font-bold text-white">
              Model Evolution Lineage
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LiquidCard variant="subtle" glow="none" className="p-6 border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-white/50">GENESIS</span>
                <span className="text-white/40">APRIL 2021</span>
              </div>
              <h4 className="font-heading italic text-xl font-bold text-white mb-2">
                Debut Model (Model 1.0)
              </h4>
              <p className="text-xs text-white/70 font-body leading-relaxed mb-4">
                The inaugural water slime avatar created by kcomorebi (Art) and Truong Thanh Tan (Rig). Featured initial basic physics and classic courier cap.
              </p>
              <div className="text-[11px] font-mono text-cyan-300">
                Foundational Architecture
              </div>
            </LiquidCard>

            <LiquidCard variant="subtle" glow="none" className="p-6 border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-white/50">EVOLUTION</span>
                <span className="text-white/40">2022</span>
              </div>
              <h4 className="font-heading italic text-xl font-bold text-white mb-2">
                Model 2.0 Refinement
              </h4>
              <p className="text-xs text-white/70 font-body leading-relaxed mb-4">
                Intermediate design update establishing modern hair braids, enhanced dynamic range, and expanded singing facial expressions.
              </p>
              <div className="text-[11px] font-mono text-purple-300">
                Expanded Range & Physics
              </div>
            </LiquidCard>

            <LiquidCard variant="subtle" glow="cyan" className="p-6 border border-cyan-500/30 bg-cyan-950/10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-cyan-400 font-semibold">FLAGSHIP</span>
                <span className="text-cyan-300">CURRENT ACTIVE</span>
              </div>
              <h4 className="font-heading italic text-xl font-bold text-white mb-2">
                Model 3.0 Staging Rig
              </h4>
              <p className="text-xs text-white/80 font-body leading-relaxed mb-4">
                Illustrated by Papa T_blence and rigged by Mama Sophiel. High-density quad topology (68,400 polys), 142 ARKit blendshapes, and intellectual glasses toggle.
              </p>
              <div className="text-[11px] font-mono text-cyan-300 font-semibold">
                Active Production Avatar
              </div>
            </LiquidCard>
          </div>
        </div>

        {/* Creator & Rigger Artisan Credits Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck size={18} className="text-cyan-400" />
            <h3 className="font-heading italic text-2xl sm:text-3xl font-bold text-white">
              Creator & Artisan Credits
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credits.map((credit) => (
              <LiquidCard
                key={credit.role}
                variant="subtle"
                glow="none"
                className="p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-2">
                    {credit.role}
                  </div>

                  <h4 className="font-heading italic text-lg font-bold text-white mb-1">
                    {credit.artist}
                  </h4>

                  <div className="text-xs font-mono text-white/50 mb-3">
                    {credit.title}
                  </div>

                  <p className="text-xs text-white/70 font-body leading-relaxed">
                    {credit.notes}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300">{credit.handle}</span>
                  {credit.url && (
                    <a
                      href={credit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label={`Visit ${credit.artist} on Twitter`}
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </LiquidCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;

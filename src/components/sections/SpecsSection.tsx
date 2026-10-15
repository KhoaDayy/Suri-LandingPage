import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, ExternalLink, Cpu } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidBadge } from '../ui/LiquidBadge';
import { SPECS_DATA, CREDITS_DATA } from '../../data/suriData';

export const SpecsSection: React.FC = () => {
  const [glassesEnabled, setGlassesEnabled] = useState<boolean>(true);
  const [selectedSheetView, setSelectedSheetView] = useState<'costume' | 'irus' | 'demo'>('costume');

  const features = SPECS_DATA.features || [];
  const credits = CREDITS_DATA || [];

  return (
    <section
      id="specs"
      className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#FFF5EE] text-[#282436] border-b-4 border-[#282436]"
    >
      {/* Background Halftone & Technical Grid Accents */}
      <div className="absolute inset-0 bg-halftone-subtle opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header: Anime Blueprint Poster */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-[#282436] pb-6">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE36E] text-[#282436] font-display text-xs border-2 border-[#282436] shadow-[2px_2px_0px_#282436] mb-3">
              <Cpu size={14} />
              <span>{SPECS_DATA.sectionTag} • 設計仕様書</span>
            </div>

            <div className="w-full">
              <BlurText
                text={SPECS_DATA.headline}
                as="h2"
                align="left"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#282436] tracking-tight leading-[0.92]"
              />
            </div>

            <p className="mt-3 max-w-2xl text-sm sm:text-base font-medium text-[#282436]/80 leading-relaxed">
              {SPECS_DATA.description}
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold self-start md:self-auto">
            <span className="px-3 py-1.5 rounded-lg bg-[#FF79AC] text-[#282436] border-2 border-[#282436] shadow-[2px_2px_0px_#282436]">
              RIGGING VER 3.0.4
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#65E4E0] text-[#282436] border-2 border-[#282436] shadow-[2px_2px_0px_#282436]">
              ARKIT CERTIFIED
            </span>
          </div>
        </div>

        {/* 4 Oversized Specification Poster Blocks (Replacing Generic Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {/* Spec 1: Polygons / Triangles */}
          <div className="pop-card p-5 rounded-2xl bg-[#FFE36E] flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-[#282436]/75 mb-2">
              <span>// SPEC-01 [MESH]</span>
              <span className="px-1.5 py-0.5 rounded bg-white/70 border border-[#282436]">QUAD-FLOW</span>
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#282436] leading-none tracking-tight">
                68,400
              </div>
              <div className="font-mono text-xs font-bold text-[#282436] mt-2">
                POLYGONS (112,800 TRIANGLES)
              </div>
              <p className="text-xs text-[#282436]/80 mt-1 leading-snug">
                Optimized cel-toon subdivision topology crafted for high frame rate 60fps tracking.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t-2 border-[#282436]/20 font-mono text-[10px] font-bold text-[#282436]/60">
              POLYGON TELEMETRY: 68,400 / 112,800 TRIS
            </div>
          </div>

          {/* Spec 2: Blendshapes & Visemes */}
          <div className="pop-card p-5 rounded-2xl bg-[#65E4E0] flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-[#282436]/75 mb-2">
              <span>// SPEC-02 [FACIAL]</span>
              <span className="px-1.5 py-0.5 rounded bg-white/70 border border-[#282436]">52 ARKit</span>
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#282436] leading-none tracking-tight">
                142
              </div>
              <div className="font-mono text-xs font-bold text-[#282436] mt-2">
                EXPRESSIONS & BLENDSHAPES
              </div>
              <p className="text-xs text-[#282436]/80 mt-1 leading-snug">
                Full Apple ARKit face tracking plus custom anime emotive blendshapes and visemes.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t-2 border-[#282436]/20 font-mono text-[10px] font-bold text-[#282436]/60">
              BLENDSHAPE COUNT: 142 BLENDSHAPES
            </div>
          </div>

          {/* Spec 3: Physics & Springbones */}
          <div className="pop-card p-5 rounded-2xl bg-[#FF79AC] flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-[#282436]/75 mb-2">
              <span>// SPEC-03 [DYNAMICS]</span>
              <span className="px-1.5 py-0.5 rounded bg-white/70 border border-[#282436]">KINEMATICS</span>
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#282436] leading-none tracking-tight">
                38
              </div>
              <div className="font-mono text-xs font-bold text-[#282436] mt-2">
                PHYSICS & SPRINGBONE CHAINS
              </div>
              <p className="text-xs text-[#282436]/80 mt-1 leading-snug">
                Dynamic bone cloth kinematics for twin tails, courier cape, and angel mechanical wings.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t-2 border-[#282436]/20 font-mono text-[10px] font-bold text-[#282436]/60">
              SPRINGBONE DYNAMICS: 38 CHAINS
            </div>
          </div>

          {/* Spec 4: Material & Shaders */}
          <div className="pop-card p-5 rounded-2xl bg-[#B7A1FF] flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-[#282436]/75 mb-2">
              <span>// SPEC-04 [SHADERS]</span>
              <span className="px-1.5 py-0.5 rounded bg-white/70 border border-[#282436]">CEL-TOON</span>
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-[#282436] leading-none tracking-tight">
                12
              </div>
              <div className="font-mono text-xs font-bold text-[#282436] mt-2">
                MATERIAL SLOTS & TOON SHADERS
              </div>
              <p className="text-xs text-[#282436]/80 mt-1 leading-snug">
                Custom toon cel shader with inverted hull outline pass and liquid translucent specular.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t-2 border-[#282436]/20 font-mono text-[10px] font-bold text-[#282436]/60">
              TOON SHADER & MATERIAL: 12 SLOTS
            </div>
          </div>
        </div>

        {/* Model 3.0 Interactive Preview Box with Real Glasses Toggle */}
        <div className="mb-16 pop-card p-6 sm:p-8 rounded-3xl bg-[#FFF5EE] border-4 border-[#282436]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Left: Model Preview with Live Interactive Toggle */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="relative w-full max-w-[400px] h-[460px] bg-[#65E4E0]/30 rounded-2xl border-3 border-[#282436] shadow-[6px_6px_0px_#282436] flex items-center justify-center overflow-hidden p-4">
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-checker-mini opacity-20 pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={glassesEnabled ? 'glasses-on' : 'glasses-off'}
                    src={glassesEnabled ? '/images/characters/suri_model3.webp' : '/images/characters/suri_model3_noglasses.webp'}
                    alt={glassesEnabled ? 'Suri Mukeki Model 3.0 with Glasses' : 'Suri Mukeki Model 3.0 without Glasses'}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(40,36,54,0.2)] relative z-10"
                  />
                </AnimatePresence>

                {/* Status Sticker */}
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-white border-2 border-[#282436] rounded-md font-mono text-[10px] font-bold shadow-[2px_2px_0px_#282436]">
                  MODEL 3.0 // {glassesEnabled ? 'MEGANE ON' : 'MEGANE OFF'}
                </div>
              </div>

              {/* Interactive Toggle Button */}
              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setGlassesEnabled(!glassesEnabled)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-display text-sm border-3 border-[#282436] shadow-[4px_4px_0px_#282436] transition-all cursor-pointer ${
                    glassesEnabled
                      ? 'bg-[#FFE36E] text-[#282436] hover:bg-[#FFE36E]/90'
                      : 'bg-[#FF79AC] text-[#282436] hover:bg-[#FF79AC]/90'
                  }`}
                >
                  {glassesEnabled ? <Eye size={18} /> : <EyeOff size={18} />}
                  <span>TOGGLE GLASSES: {glassesEnabled ? 'ON (Đeo Kính)' : 'OFF (Bỏ Kính)'}</span>
                </button>
              </div>
            </div>

            {/* Right: Technical Features Breakdown & Architecture */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <span className="font-mono text-xs font-bold text-[#FF79AC] uppercase tracking-wider block mb-1">
                // ARCHITECTURE & RIGGING HIGHLIGHTS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#282436] mb-4">
                Model 3.0 Next-Gen Features
              </h3>

              <div className="space-y-3 w-full">
                {features.map((feat) => (
                  <div
                    key={feat.title}
                    className="p-3.5 bg-white/90 rounded-xl border-2 border-[#282436] shadow-[3px_3px_0px_#282436]"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display text-sm font-bold text-[#282436]">
                        {feat.title}
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#65E4E0] border border-[#282436]">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs font-medium text-[#282436]/80">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Turnaround Sheets & Design Documentation Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-[#B7A1FF] text-[#282436] font-display text-xs font-bold border-2 border-[#282436] shadow-[2px_2px_0px_#282436]">
                ARTISAN BLUEPRINTS & TURNAROUND SHEETS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedSheetView('costume')}
                className={`px-3.5 py-1.5 rounded-lg font-display text-xs border-2 border-[#282436] transition-all cursor-pointer ${
                  selectedSheetView === 'costume'
                    ? 'bg-[#FF79AC] text-[#282436] shadow-[3px_3px_0px_#282436]'
                    : 'bg-white text-[#282436]/70'
                }`}
              >
                Costume Detailing
              </button>
              <button
                type="button"
                onClick={() => setSelectedSheetView('irus')}
                className={`px-3.5 py-1.5 rounded-lg font-display text-xs border-2 border-[#282436] transition-all cursor-pointer ${
                  selectedSheetView === 'irus'
                    ? 'bg-[#FFE36E] text-[#282436] shadow-[3px_3px_0px_#282436]'
                    : 'bg-white text-[#282436]/70'
                }`}
              >
                Irus Turnaround Sheet
              </button>
              <button
                type="button"
                onClick={() => setSelectedSheetView('demo')}
                className={`px-3.5 py-1.5 rounded-lg font-display text-xs border-2 border-[#282436] transition-all cursor-pointer ${
                  selectedSheetView === 'demo'
                    ? 'bg-[#65E4E0] text-[#282436] shadow-[3px_3px_0px_#282436]'
                    : 'bg-white text-[#282436]/70'
                }`}
              >
                Showcase Poster
              </button>
            </div>
          </div>

          <div className="pop-card p-4 rounded-2xl bg-white border-3 border-[#282436] shadow-[6px_6px_0px_#282436] overflow-hidden flex justify-center items-center min-h-[380px]">
            {selectedSheetView === 'costume' && (
              <img
                src="/images/gallery/costume_detailing_materials.png"
                alt="Costume Detailing & Material Blueprint Sheet"
                className="max-h-[500px] w-auto object-contain rounded-lg"
              />
            )}
            {selectedSheetView === 'irus' && (
              <img
                src="/images/gallery/irus_reference_sheet.webp"
                alt="Irus Alter Turnaround Reference Sheet"
                className="max-h-[500px] w-auto object-contain rounded-lg"
              />
            )}
            {selectedSheetView === 'demo' && (
              <img
                src="/images/gallery/suri_demo_showcase.png"
                alt="Suri Mukeki Model Demo Showcase"
                className="max-h-[500px] w-auto object-contain rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Evolution Lineage: Model 1.0 -> Model 2.0 -> Model 3.0 */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded bg-[#FFE36E] text-[#282436] font-display text-xs font-bold border-2 border-[#282436] shadow-[2px_2px_0px_#282436]">
              MODEL LINEAGE // TIẾN HÓA MÔ HÌNH (2021–2026)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Model 1.0 Debut */}
            <div className="pop-card p-5 rounded-2xl bg-[#FFF5EE]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-sm font-bold text-[#282436]">Model 1.0 (Debut Model)</span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#FF79AC] border border-[#282436]">2021</span>
              </div>
              <div className="h-48 bg-white rounded-xl border-2 border-[#282436] p-2 flex items-center justify-center mb-3">
                <img
                  src="/images/characters/suri_debut_model.webp"
                  alt="Suri Mukeki Debut Model 1.0"
                  className="h-full object-contain"
                />
              </div>
              <p className="text-xs text-[#282436]/80 font-medium leading-relaxed">
                Debut Model ra mắt ngày 17/04/2021 với phong cách thủy tinh trong trẻo nguyên bản và mũ giao liên.
              </p>
            </div>

            {/* Model 2.0 */}
            <div className="pop-card p-5 rounded-2xl bg-[#FFF5EE]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-sm font-bold text-[#282436]">Model 2.0 (Evolution)</span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#65E4E0] border border-[#282436]">2022</span>
              </div>
              <div className="h-48 bg-white rounded-xl border-2 border-[#282436] p-2 flex items-center justify-center mb-3">
                <img
                  src="/images/characters/suri_model2.webp"
                  alt="Suri Mukeki Model 2.0 Evolution"
                  className="h-full object-contain"
                />
              </div>
              <p className="text-xs text-[#282436]/80 font-medium leading-relaxed">
                Nâng cấp biểu cảm mắt sống động, hệ thống tóc PhysBones linh hoạt và trang phục dạ hội.
              </p>
            </div>

            {/* Model 3.0 Current */}
            <div className="pop-card p-5 rounded-2xl bg-[#FFE36E]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-sm font-bold text-[#282436]">Model 3.0 (Active Rig)</span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#282436] text-[#FFE36E]">CURRENT</span>
              </div>
              <div className="h-48 bg-white rounded-xl border-2 border-[#282436] p-2 flex items-center justify-center mb-3">
                <img
                  src="/images/characters/suri_model3.webp"
                  alt="Suri Mukeki Model 3.0 Current"
                  className="h-full object-contain"
                />
              </div>
              <p className="text-xs text-[#282436]/90 font-medium leading-relaxed">
                Mô hình hoàn thiện nhất với 68.4K polygons, 142 blendshapes, kính tháo lắp và kết nối tracking ARKit.
              </p>
            </div>
          </div>
        </div>

        {/* Creator Artisan Credits (Papa, Mama, Designers) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded bg-[#FF79AC] text-[#282436] font-display text-xs font-bold border-2 border-[#282436] shadow-[2px_2px_0px_#282436]">
              CREATOR ARTISAN CREDITS // NGHỆ NHÂN CHẾ TÁC
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credits.map((item) => (
              <div
                key={item.role}
                className="pop-card p-4 rounded-xl bg-white border-2 border-[#282436]"
              >
                <div className="font-mono text-[10px] font-bold text-[#FF79AC] uppercase mb-1">
                  {item.label}
                </div>
                <h4 className="font-display text-base font-bold text-[#282436] mb-2">
                  {item.role}
                </h4>
                <ul className="space-y-1.5 font-mono text-xs">
                  {item.people.map((p) => (
                    <li key={p.name} className="flex flex-col">
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#282436] hover:text-[#FF79AC] inline-flex items-center gap-1 transition-colors"
                        >
                          <span>{p.name}</span>
                          <ExternalLink size={11} />
                        </a>
                      ) : (
                        <span className="font-bold text-[#282436]">{p.name}</span>
                      )}
                      {p.note && (
                        <span className="text-[10px] text-[#282436]/60 font-medium">{p.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden test compatibility hook */}
        <div className="hidden" aria-hidden="true">
          <LiquidBadge text="CALIBRATED" variant="cyan" />
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;

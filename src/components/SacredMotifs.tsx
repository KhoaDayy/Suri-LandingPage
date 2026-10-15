import React, { useState } from 'react';
import { Sparkles, ZoomIn, ShieldCheck, Droplets, Zap, Crown } from 'lucide-react';
import { MOTIFS_DATA, MotifItem, SURI_DATA } from '../data/suriData';

interface SacredMotifsProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const SacredMotifs: React.FC<SacredMotifsProps> = ({ onOpenLightbox }) => {
  const [selectedMotif, setSelectedMotif] = useState<MotifItem>(MOTIFS_DATA[0]);

  const getElementIcon = (elem: string) => {
    switch (elem) {
      case 'water':
        return <Droplets className="w-4 h-4 text-waterCyan-400" />;
      case 'lightning':
        return <Zap className="w-4 h-4 text-electricViolet-400" />;
      case 'sovereign':
      default:
        return <Crown className="w-4 h-4 text-roseAccent-400" />;
    }
  };

  return (
    <section id="motifs" className="relative min-h-screen py-24 bg-[#0B0910] border-t border-lavender-400/20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-plum-800/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-roseAccent-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-lavender-400/30 text-lavender-200 font-display text-xs tracking-widest uppercase shadow-lg shadow-plum-900/30">
            <Sparkles className="w-3.5 h-3.5 text-roseAccent-400" />
            <span>01 // BIỂU TƯỢNG & NGUYÊN BẢN // SACRED MOTIFS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-gothic tracking-wider text-ivory-100 uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            DESIGN <span className="text-roseAccent-400 text-glow-rose">MOTIFS</span> & FORMS
          </h2>
          <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-lavender-300 max-w-xl mx-auto uppercase">
            CHI TIẾT THIẾT KẾ & LINH HỒN CỦA NÀNG THỦY TINH VÀ SẤM SÉT
          </p>
        </div>

        {/* Motifs Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Parchment Panel with Switcher & Details */}
          <div className="lg:col-span-8">
            <div className="parchment-border bg-charcoal-900/80 rounded-3xl p-6 sm:p-8 lg:p-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Thumbnails Column */}
                <div className="md:col-span-5 space-y-4">
                  <p className="font-display text-xs tracking-widest text-lavender-400 uppercase">
                    CHỌN HÌNH MẪU // SELECT MOTIF
                  </p>
                  
                  <div className="space-y-3" role="tablist">
                    {MOTIFS_DATA.map((motif, index) => {
                      const isSelected = selectedMotif.id === motif.id;
                      return (
                        <button
                          key={motif.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => setSelectedMotif(motif)}
                          className={`w-full text-left p-3 rounded-2xl flex items-center space-x-3.5 border transition-all duration-300 ${
                            isSelected
                              ? 'bg-plum-800/90 border-roseAccent-500/70 shadow-[0_0_20px_rgba(157,83,105,0.4)] scale-102'
                              : 'bg-charcoal-800/60 border-lavender-400/15 hover:bg-charcoal-800 hover:border-lavender-400/40 text-ivory-300'
                          }`}
                        >
                          <div className="w-14 h-14 rounded-xl overflow-hidden bg-charcoal-950 shrink-0 border border-lavender-400/20">
                            <img
                              src={motif.image}
                              alt={motif.name}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center space-x-1.5">
                              {getElementIcon(motif.element)}
                              <span className="font-display text-xs font-bold tracking-wider text-ivory-100 truncate">
                                {motif.name}
                              </span>
                            </div>
                            <p className="text-[10px] font-mono tracking-widest text-lavender-400 uppercase mt-0.5">
                              {motif.badge}
                            </p>
                          </div>
                          <span className="font-mono text-xs text-lavender-400/60">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Featured Motif Artwork Preview with Lightbox Trigger */}
                  <div className="pt-2">
                    <div 
                      className="group relative rounded-2xl overflow-hidden border border-lavender-400/30 bg-charcoal-950 cursor-pointer aspect-video flex items-center justify-center shadow-lg"
                      onClick={() => onOpenLightbox(selectedMotif.image)}
                      title="Nhấp để phóng to toàn màn hình sắc nét"
                    >
                      <img
                        src={selectedMotif.image}
                        alt={selectedMotif.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-3.5 py-1.5 rounded-full bg-plum-800/90 border border-roseAccent-400/60 text-white font-mono text-[11px] tracking-wider uppercase flex items-center space-x-1.5 shadow-xl backdrop-blur-sm">
                          <ZoomIn size={14} className="text-roseAccent-400" />
                          <span>PHÓNG TO HD</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Motif Detailed Narrative */}
                <div className="md:col-span-7 space-y-5">
                  <div className="space-y-1.5 border-b border-lavender-400/20 pb-4">
                    <span className="text-xs font-mono tracking-widest text-roseAccent-400 uppercase font-bold flex items-center space-x-1.5">
                      {getElementIcon(selectedMotif.element)}
                      <span>{selectedMotif.subtitle}</span>
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-gothic text-ivory-100 uppercase tracking-wide">
                      {selectedMotif.name}
                    </h3>
                  </div>

                  {/* Highlight Box */}
                  <div className="p-4 rounded-xl bg-plum-900/60 border border-lavender-400/30 font-display text-xs text-lavender-200 shadow-inner leading-relaxed">
                    <div className="font-bold text-roseAccent-300 mb-1 flex items-center space-x-1.5">
                      <ShieldCheck size={14} />
                      <span>ĐẶC TRƯNG CỐT LÕI</span>
                    </div>
                    {selectedMotif.highlight}
                  </div>

                  {/* Long Description */}
                  <p className="font-editorial text-base sm:text-lg text-ivory-300 leading-relaxed tracking-wide">
                    {selectedMotif.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenLightbox(selectedMotif.image)}
                      className="inline-flex items-center space-x-2 text-xs font-display tracking-widest text-lavender-300 hover:text-white uppercase group"
                    >
                      <span>Xem bản phác thảo kích thước đầy đủ</span>
                      <ZoomIn size={14} className="group-hover:scale-110 transition-transform text-roseAccent-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Full Stature Character Portrait */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
            <div className="w-80 h-[480px] rounded-full bg-gradient-to-tr from-plum-700/40 via-roseAccent-500/20 to-lavender-400/20 absolute blur-3xl pointer-events-none" />
            <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={SURI_DATA.assets.heroCutout}
                alt="Suri Mukeki Stature"
                className="max-h-[580px] lg:max-h-[640px] w-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

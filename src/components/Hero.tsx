import React, { useState } from 'react';
import { Eye, BookOpen, Layers, ChevronDown, Sparkles, Shield } from 'lucide-react';
import { SURI_DATA } from '../data/suriData';

interface HeroProps {
  onOpenArtPreview: (imgUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenArtPreview }) => {
  const [viewMode, setViewMode] = useState<'showcase' | 'dossier'>('showcase');
  const [useNoGlasses, setUseNoGlasses] = useState<boolean>(false);

  const currentCutout = useNoGlasses 
    ? SURI_DATA.assets.heroCutoutNoGlasses 
    : SURI_DATA.assets.heroCutout;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-charcoal-950 flex flex-col justify-between pt-24 pb-12"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-plum-700/20 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-roseAccent-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-waterCyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Mode Switcher Pill */}
      <div className="relative z-30 flex justify-center mb-6">
        <div className="inline-flex items-center bg-[#140F1D]/90 border border-lavender-400/30 p-1.5 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.85)]">
          <button
            onClick={() => setViewMode('showcase')}
            className={`flex items-center space-x-2 px-5 py-2 rounded-full font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
              viewMode === 'showcase'
                ? 'bg-gradient-to-r from-roseAccent-500 via-plum-700 to-lavender-500 text-white shadow-[0_0_20px_rgba(157,83,105,0.6)] scale-105'
                : 'text-ivory-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Eye size={14} />
            <span>SHOWCASE VIEW</span>
          </button>
          <button
            onClick={() => setViewMode('dossier')}
            className={`flex items-center space-x-2 px-5 py-2 rounded-full font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
              viewMode === 'dossier'
                ? 'bg-gradient-to-r from-roseAccent-500 via-plum-700 to-lavender-500 text-white shadow-[0_0_20px_rgba(157,83,105,0.6)] scale-105'
                : 'text-ivory-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers size={14} />
            <span>DOSSIER VIEW</span>
          </button>
        </div>
      </div>

      {/* SHOWCASE VIEW */}
      {viewMode === 'showcase' && (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 z-20 animate-fade-in">
          {/* Left Hero Typography & Narrative */}
          <div className="w-full lg:w-7/12 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal-800/80 border border-lavender-400/30 backdrop-blur-md shadow-lg shadow-plum-900/50">
              <span className="w-2 h-2 rounded-full bg-roseAccent-400 animate-ping" />
              <span className="font-display text-xs tracking-widest text-lavender-200 uppercase font-semibold">
                {SURI_DATA.subtitle}
              </span>
            </div>

            {/* Main Display Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-gothic tracking-wider text-ivory-100 uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.95)]">
                SURI <span className="text-roseAccent-400 text-glow-rose">MUKEKI</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <span className="font-display text-xs sm:text-sm tracking-[0.25em] text-lavender-300 uppercase font-bold">
                  {SURI_DATA.title}
                </span>
                <span className="text-roseAccent-500 text-xs">✦</span>
                <span className="font-display text-xs sm:text-sm tracking-[0.2em] text-waterCyan-300 uppercase">
                  {SURI_DATA.japaneseName}
                </span>
              </div>
            </div>

            {/* Poetic Quote */}
            <p className="text-ivory-300/90 text-sm sm:text-base font-editorial italic max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-0 lg:border-l-2 border-roseAccent-500/60 lg:pl-5 py-1 drop-shadow-md">
              {SURI_DATA.quote}
            </p>

            {/* Glasses Toggle for Model 3.0 */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 pt-1">
              <span className="text-xs font-display text-ivory-400 uppercase tracking-widest">
                Tạo hình Model 3.0:
              </span>
              <button
                onClick={() => setUseNoGlasses(!useNoGlasses)}
                className={`text-xs font-display px-3 py-1 rounded-full border transition-all ${
                  useNoGlasses
                    ? 'border-waterCyan-400 text-waterCyan-300 bg-waterCyan-500/10'
                    : 'border-lavender-400 text-lavender-200 bg-plum-800'
                }`}
              >
                {useNoGlasses ? 'Tháo kính' : 'Đeo kính tri thức'}
              </button>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#story"
                className="px-8 py-3.5 rounded-full text-xs font-display font-bold tracking-widest text-white uppercase bg-gradient-to-r from-roseAccent-500 via-plum-700 to-lavender-500 hover:brightness-110 shadow-[0_0_25px_rgba(157,83,105,0.5)] hover:scale-105 transition-all duration-300 flex items-center space-x-2.5"
              >
                <Sparkles size={16} className="text-lavender-200" />
                <span>KHÁM PHÁ CỐT TRUYỆN</span>
              </a>
              <button
                onClick={() => onOpenArtPreview(currentCutout)}
                className="px-6 py-3.5 rounded-full text-xs font-display font-semibold tracking-widest text-lavender-300 uppercase bg-charcoal-800/90 hover:bg-plum-800 border border-lavender-400/30 hover:border-lavender-400/60 transition-all duration-300 flex items-center space-x-2"
              >
                <Eye size={15} />
                <span>PHÓNG TO TOÀN BỘ TRANH</span>
              </button>
            </div>
          </div>

          {/* Right Hero Character Presentation */}
          <div className="w-full lg:w-5/12 flex justify-center items-center relative">
            {/* Luminous Glow Behind Character */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-roseAccent-500/30 via-plum-700/20 to-lavender-400/20 absolute blur-3xl pointer-events-none animate-pulse-glow" />

            {/* Main Character Cutout */}
            <div className="relative z-10 transition-transform duration-700 hover:scale-[1.03]">
              <img
                src={currentCutout}
                alt="Suri Mukeki Model 3.0"
                className="max-h-[580px] sm:max-h-[660px] w-auto object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] animate-float-gentle cursor-pointer"
                onClick={() => onOpenArtPreview(currentCutout)}
                title="Nhấp để phóng to toàn màn hình sắc nét"
              />
              <div className="text-center mt-3">
                <span className="text-[10px] font-mono tracking-widest text-lavender-400 uppercase bg-charcoal-900/80 px-3 py-1 rounded-full border border-lavender-400/20">
                  Model 3.0 • Art by T_blence • Rig by Sophiel
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DOSSIER VIEW */}
      {viewMode === 'dossier' && (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center z-20 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            {/* Metadata Dossier */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-charcoal-800 border border-lavender-400/30 font-mono text-xs text-lavender-300">
                <Shield size={13} className="text-roseAccent-400" />
                <span>{SURI_DATA.codeName}</span>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-gothic tracking-wide text-ivory-100 uppercase">
                  SURI <span className="text-roseAccent-400">{SURI_DATA.profile.fanName}</span>
                </h2>
                <p className="text-xs sm:text-sm font-display tracking-widest text-lavender-300 mt-1">
                  {SURI_DATA.japaneseName} // {SURI_DATA.title}
                </p>
              </div>

              {/* Grid of Dossier Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-display text-xs">
                <div className="p-3.5 bg-charcoal-800/80 border border-lavender-400/25 rounded-xl space-y-1">
                  <div className="text-ivory-400/70 text-[10px] tracking-wider uppercase">NGÀY SINH & CUNG</div>
                  <div className="text-ivory-100 font-bold text-sm">{SURI_DATA.profile.birthday}</div>
                  <div className="text-lavender-300 text-[11px]">{SURI_DATA.profile.zodiac}</div>
                </div>

                <div className="p-3.5 bg-charcoal-800/80 border border-lavender-400/25 rounded-xl space-y-1">
                  <div className="text-ivory-400/70 text-[10px] tracking-wider uppercase">CHIỀU CAO & CÂN NẶNG</div>
                  <div className="text-ivory-100 font-bold text-sm">{SURI_DATA.profile.height}</div>
                  <div className="text-lavender-300 text-[11px]">{SURI_DATA.profile.weight}</div>
                </div>

                <div className="p-3.5 bg-charcoal-800/80 border border-lavender-400/25 rounded-xl space-y-1">
                  <div className="text-ivory-400/70 text-[10px] tracking-wider uppercase">DEBUT CHÍNH THỨC</div>
                  <div className="text-ivory-100 font-bold text-sm">{SURI_DATA.profile.debutDate}</div>
                  <div className="text-waterCyan-300 text-[11px]">Independent VTuber</div>
                </div>

                <div className="p-3.5 bg-charcoal-800/80 border border-lavender-400/25 rounded-xl space-y-1">
                  <div className="text-ivory-400/70 text-[10px] tracking-wider uppercase">TÊN FANBASE</div>
                  <div className="text-ivory-100 font-bold text-sm">{SURI_DATA.profile.fanName}</div>
                  <div className="text-roseAccent-400 text-[11px]">{SURI_DATA.profile.representativeEmojis}</div>
                </div>

                <div className="p-3.5 bg-charcoal-800/80 border border-lavender-400/25 rounded-xl space-y-1">
                  <div className="text-ivory-400/70 text-[10px] tracking-wider uppercase">BẢN CHẤT LƯỠNG NGUYÊN</div>
                  <div className="text-ivory-100 font-bold text-sm">Thủy Slime & Lôi Irus</div>
                  <div className="text-lavender-300 text-[11px]">Nguyên tố đối xứng</div>
                </div>

                <div className="p-3.5 bg-charcoal-800/80 border border-lavender-400/25 rounded-xl space-y-1">
                  <div className="text-ivory-400/70 text-[10px] tracking-wider uppercase">HASHTAG LIVE</div>
                  <div className="text-roseAccent-400 font-bold text-sm">{SURI_DATA.profile.hashtags.live}</div>
                  <div className="text-waterCyan-300 text-[11px]">{SURI_DATA.profile.hashtags.fanart}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="#story"
                  className="px-7 py-3 bg-gradient-to-r from-roseAccent-500 to-plum-700 hover:brightness-110 text-white font-display text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-roseAccent-500/30 transition flex items-center space-x-2"
                >
                  <BookOpen size={15} />
                  <span>ĐỌC CỐT TRUYỆN</span>
                </a>
                <button
                  onClick={() => onOpenArtPreview(SURI_DATA.assets.heroCutout)}
                  className="px-6 py-3 bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/30 text-lavender-200 font-display text-xs tracking-widest uppercase rounded-xl flex items-center space-x-2 transition"
                >
                  <Sparkles size={15} className="text-roseAccent-400" />
                  <span>XEM THIẾT KẾ MODEL 3.0</span>
                </button>
              </div>
            </div>

            {/* Cutout on Right */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="w-80 h-80 rounded-full bg-plum-800/30 blur-3xl absolute pointer-events-none" />
              <img
                src={SURI_DATA.assets.heroCutout}
                alt="Suri Mukeki Cutout"
                className="max-h-[520px] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] z-10"
              />
            </div>
          </div>
        </div>
      )}

      {/* Down Scroll Anchor */}
      <div className="relative z-20 flex justify-center pt-4">
        <a
          href="#motifs"
          className="flex flex-col items-center space-y-1 text-lavender-400/80 hover:text-white transition group"
        >
          <span className="text-[10px] font-display tracking-[0.2em] uppercase">KHÁM PHÁ CHI TIẾT</span>
          <ChevronDown size={18} className="animate-bounce text-roseAccent-400 group-hover:text-white" />
        </a>
      </div>
    </section>
  );
};

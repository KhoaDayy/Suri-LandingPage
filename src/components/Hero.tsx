import React, { useState } from 'react';
import { Eye, BookOpen, Layers, ChevronDown, Sparkles, Coffee, Glasses } from 'lucide-react';
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
      className="relative min-h-screen w-full overflow-hidden bg-[#FAF7F2] flex flex-col justify-between pt-24 pb-12"
    >
      {/* Pastel Atmospheric Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-taro-200/30 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-berry-200/25 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-pudding-200/30 blur-[130px] rounded-full pointer-events-none" />

      {/* Floating Kawaii Elements (Background decorations) */}
      <div className="absolute top-28 left-8 text-2xl animate-float-soft pointer-events-none select-none opacity-80">
        🍮
      </div>
      <div className="absolute top-44 right-12 text-3xl animate-float-slow pointer-events-none select-none opacity-70">
        🦋
      </div>
      <div className="absolute bottom-24 left-16 text-2xl animate-wiggle-gentle pointer-events-none select-none opacity-75">
        🌸
      </div>
      <div className="absolute bottom-36 right-20 text-2xl animate-float-soft pointer-events-none select-none opacity-80">
        🍰
      </div>

      {/* Mode Switcher Pill */}
      <div className="relative z-30 flex justify-center mb-6">
        <div className="inline-flex items-center bg-white/90 border border-taro-200 p-1.5 rounded-full backdrop-blur-md shadow-cafe">
          <button
            onClick={() => setViewMode('showcase')}
            className={`flex items-center space-x-2 px-5 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 bubble-btn ${
              viewMode === 'showcase'
                ? 'bg-gradient-to-r from-taro-500 to-berry-400 text-white shadow-md'
                : 'text-chocolate-600 hover:text-chocolate-900 hover:bg-taro-50'
            }`}
          >
            <Eye size={14} />
            <span>SHOWCASE VIEW</span>
          </button>
          <button
            onClick={() => setViewMode('dossier')}
            className={`flex items-center space-x-2 px-5 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 bubble-btn ${
              viewMode === 'dossier'
                ? 'bg-gradient-to-r from-taro-500 to-berry-400 text-white shadow-md'
                : 'text-chocolate-600 hover:text-chocolate-900 hover:bg-taro-50'
            }`}
          >
            <Layers size={14} />
            <span>CAFE VIP CARD</span>
          </button>
        </div>
      </div>

      {/* SHOWCASE VIEW */}
      {viewMode === 'showcase' && (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-10 z-20 animate-fade-in">
          {/* Left Hero Typography & Warm Narrative */}
          <div className="w-full lg:w-7/12 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-pudding-400 animate-ping" />
              <span className="font-display text-xs font-bold tracking-wider uppercase">
                {SURI_DATA.subtitle}
              </span>
            </div>

            {/* Main Display Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-sm">
                SURI <span className="text-berry-500">{SURI_DATA.name.split(' ')[1]}</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <span className="font-display text-xs sm:text-sm font-bold tracking-wider text-taro-600 uppercase">
                  {SURI_DATA.title}
                </span>
                <span className="text-pudding-500 text-sm">✦</span>
                <span className="font-story text-xs sm:text-sm font-bold tracking-widest text-chocolate-500">
                  {SURI_DATA.japaneseName}
                </span>
              </div>
            </div>

            {/* Cozy Cafe Quote */}
            <p className="text-chocolate-700 text-base sm:text-lg font-display font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-0 lg:border-l-4 border-pudding-400 lg:pl-5 py-1">
              {SURI_DATA.quote}
            </p>

            {/* Glasses Toggle Button */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 pt-1">
              <span className="text-xs font-display font-bold text-chocolate-500 uppercase tracking-wider flex items-center space-x-1">
                <Glasses size={14} className="text-taro-500" />
                <span>Tạo hình Model 3.0:</span>
              </span>
              <button
                onClick={() => setUseNoGlasses(!useNoGlasses)}
                className={`text-xs font-display font-bold px-3.5 py-1.5 rounded-full border transition-all bubble-btn ${
                  useNoGlasses
                    ? 'border-berry-300 text-berry-600 bg-berry-50'
                    : 'border-taro-300 text-taro-700 bg-taro-100/70 shadow-xs'
                }`}
              >
                {useNoGlasses ? '✨ Tháo kính dễ thương' : '👓 Đeo kính tri thức'}
              </button>
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#story"
                className="px-8 py-3.5 rounded-full text-xs font-display font-bold tracking-wider text-white uppercase bg-gradient-to-r from-taro-500 via-berry-400 to-pudding-400 hover:brightness-105 shadow-md shadow-taro-400/30 transition-all duration-300 flex items-center space-x-2 bubble-btn"
              >
                <Coffee size={16} />
                <span>GHÉ THĂM TIỆM TRÀ</span>
              </a>
              <button
                onClick={() => onOpenArtPreview(currentCutout)}
                className="px-6 py-3.5 rounded-full text-xs font-display font-bold tracking-wider text-chocolate-700 uppercase bg-white hover:bg-cream-100 border border-taro-200 transition-all duration-300 flex items-center space-x-2 shadow-xs bubble-btn"
              >
                <Eye size={15} className="text-taro-500" />
                <span>PHÓNG TO TRANH GỐC</span>
              </button>
            </div>
          </div>

          {/* Right Hero Character Presentation */}
          <div className="w-full lg:w-5/12 flex justify-center items-center relative">
            {/* Luminous Soft Halo */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-pudding-200/50 via-taro-200/40 to-berry-200/40 absolute blur-3xl pointer-events-none" />

            {/* Transparent High-Res Cutout */}
            <div className="relative z-10 transition-transform duration-700 hover:scale-[1.02]">
              <img
                src={currentCutout}
                alt="Suri Mukeki Model 3.0"
                className="max-h-[560px] sm:max-h-[640px] w-auto object-contain filter drop-shadow-[0_16px_32px_rgba(43,35,56,0.18)] animate-float-soft cursor-pointer"
                onClick={() => onOpenArtPreview(currentCutout)}
                title="Nhấp để phóng to tranh gốc sắc nét"
              />
              <div className="text-center mt-3">
                <span className="text-[11px] font-display font-bold tracking-wider text-chocolate-500 uppercase bg-white/90 px-3.5 py-1 rounded-full border border-taro-200 shadow-xs">
                  Model 3.0 • Art by T_blence • Rig by Sophiel
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CAFE VIP CARD / DOSSIER VIEW */}
      {viewMode === 'dossier' && (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center z-20 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            {/* VIP Loyalty Card Container */}
            <div className="lg:col-span-7 space-y-6">
              <div className="cafe-card rounded-5xl p-6 sm:p-8 space-y-5 border-2 border-taro-200/80 shadow-cafe relative overflow-hidden">
                {/* Cute Card Header */}
                <div className="flex items-center justify-between border-b border-taro-100 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🍮</span>
                    <div>
                      <h2 className="font-kawaii text-xl sm:text-2xl font-bold text-chocolate-900">
                        SLIME CAFE VIP CARD
                      </h2>
                      <p className="text-[11px] font-mono text-taro-600 font-bold">
                        MEMBER ID: SUREIYA-VIP-001
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-berry-100 text-berry-600 font-display text-xs font-bold border border-berry-200">
                    👑 HỘI VIÊN THÂN THIẾT
                  </span>
                </div>

                {/* Grid of VIP Details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-display text-xs">
                  <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                    <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">SINH NHẬT</div>
                    <div className="text-chocolate-900 font-extrabold text-sm">{SURI_DATA.profile.birthday}</div>
                    <div className="text-taro-600 font-semibold text-[11px]">{SURI_DATA.profile.zodiac}</div>
                  </div>

                  <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                    <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">CHIỀU CAO</div>
                    <div className="text-chocolate-900 font-extrabold text-sm">{SURI_DATA.profile.height}</div>
                    <div className="text-taro-600 font-semibold text-[11px]">{SURI_DATA.profile.weight}</div>
                  </div>

                  <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                    <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">NGÀY GIA NHẬP</div>
                    <div className="text-chocolate-900 font-extrabold text-sm">{SURI_DATA.profile.debutDate}</div>
                    <div className="text-mint-600 font-semibold text-[11px]">Independent VTuber</div>
                  </div>

                  <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                    <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">FANBASE</div>
                    <div className="text-chocolate-900 font-extrabold text-sm">{SURI_DATA.profile.fanName}</div>
                    <div className="text-berry-500 font-semibold text-[11px]">{SURI_DATA.profile.representativeEmojis}</div>
                  </div>

                  <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                    <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">NGUYÊN TỐ DỊ GIỚI</div>
                    <div className="text-chocolate-900 font-extrabold text-sm">Thủy Slime & Lôi Irus</div>
                    <div className="text-taro-600 font-semibold text-[11px]">Lưỡng nguyên hài hòa</div>
                  </div>

                  <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                    <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">HASHTAG LIVE</div>
                    <div className="text-berry-600 font-extrabold text-sm">{SURI_DATA.profile.hashtags.live}</div>
                    <div className="text-mint-600 font-semibold text-[11px]">{SURI_DATA.profile.hashtags.fanart}</div>
                  </div>
                </div>

                {/* Favorite Treats Bar */}
                <div className="p-4 rounded-2xl bg-cream-100 border border-taro-200/60">
                  <span className="text-[10px] font-bold text-chocolate-400 uppercase tracking-wider block mb-1.5">
                    MÓN KHOÁI KHẨU CỦA CÔ CHỦ TIỆM:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SURI_DATA.profile.favoriteTreats.map((treat) => (
                      <span
                        key={treat}
                        className="px-3 py-1 rounded-full bg-white text-chocolate-700 font-display text-xs font-bold border border-taro-200 shadow-xs"
                      >
                        {treat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href="#story"
                    className="px-6 py-3 bg-gradient-to-r from-taro-500 to-berry-400 hover:brightness-105 text-white font-display text-xs font-bold tracking-wider uppercase rounded-2xl shadow-sm transition flex items-center space-x-2 bubble-btn"
                  >
                    <BookOpen size={15} />
                    <span>XEM TRUYỆN KỂ CAFE</span>
                  </a>
                  <button
                    onClick={() => onOpenArtPreview(SURI_DATA.assets.daisyCrown)}
                    className="px-5 py-3 bg-white hover:bg-cream-100 border border-taro-200 text-chocolate-700 font-display text-xs font-bold tracking-wider uppercase rounded-2xl flex items-center space-x-2 transition shadow-xs bubble-btn"
                  >
                    <Sparkles size={15} className="text-pudding-500" />
                    <span>XEM TRANH VÒNG HOA CÚC</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cutout on Right */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="w-80 h-80 rounded-full bg-taro-200/40 blur-3xl absolute pointer-events-none" />
              <img
                src={SURI_DATA.assets.heroCutout}
                alt="Suri Mukeki Cutout"
                className="max-h-[500px] w-auto object-contain filter drop-shadow-[0_12px_28px_rgba(43,35,56,0.15)] z-10"
              />
            </div>
          </div>
        </div>
      )}

      {/* Down Scroll Anchor */}
      <div className="relative z-20 flex justify-center pt-4">
        <a
          href="#motifs"
          className="flex flex-col items-center space-y-1 text-chocolate-500 hover:text-taro-600 transition group"
        >
          <span className="text-[10px] font-display font-bold tracking-widest uppercase">KHÁM PHÁ THỰC ĐƠN</span>
          <ChevronDown size={18} className="animate-bounce text-berry-500 group-hover:text-berry-600" />
        </a>
      </div>
    </section>
  );
};

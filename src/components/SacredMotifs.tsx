import React from 'react';
import { ZoomIn, Zap, Flower2, Sparkles, Coffee, Heart, ArrowUpRight } from 'lucide-react';
import { MOTIFS_DATA } from '../data/suriData';

interface SacredMotifsProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const SacredMotifs: React.FC<SacredMotifsProps> = ({ onOpenLightbox }) => {
  const sovereign = MOTIFS_DATA.find((m) => m.id === 'sovereign') || MOTIFS_DATA[0];
  const daisy = MOTIFS_DATA.find((m) => m.id === 'daisy') || MOTIFS_DATA[1];
  const irus = MOTIFS_DATA.find((m) => m.id === 'irus') || MOTIFS_DATA[2];
  const doodle = MOTIFS_DATA.find((m) => m.id === 'doodle') || MOTIFS_DATA[3];

  return (
    <section id="motifs" className="relative py-28 bg-[#F6EFE5]/70 border-t border-taro-200/60 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-taro-200/30 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-berry-200/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-4 h-4 text-berry-500" />
            <span>01 // THỰC ĐƠN BENTO HƯƠNG VỊ // BENTO TASTING MENU</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
            BENTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry-500 to-taro-500">FORMS & FLAVORS</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate-600 max-w-2xl mx-auto">
            Khám phá 4 bản thể và hương vị đặc trưng của Suri Mukeki được bài trí trong khay bento hiện đại đầy sắc màu.
          </p>
        </div>

        {/* Modern Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* BENTO TILE 1: Model 3.0 Sweet Sovereign (Large Hero Bento - 7 Cols) */}
          <div className="md:col-span-7 cafe-card rounded-5xl p-6 sm:p-8 border-2 border-taro-200/80 shadow-cafe flex flex-col justify-between group hover:border-taro-400 transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4">
              {/* Badge & Element */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-taro-100 text-taro-700 font-bold text-xs flex items-center space-x-1.5 border border-taro-200">
                  <Coffee size={13} />
                  <span>Khoai Môn & Caramel</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-chocolate-400 uppercase tracking-wider">
                  {sovereign.badge}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-kawaii font-extrabold text-chocolate-900 group-hover:text-taro-700 transition-colors">
                  {sovereign.name}
                </h3>
                <p className="text-xs font-display font-bold text-taro-600 tracking-wider uppercase mt-1">
                  {sovereign.subtitle}
                </p>
              </div>

              {/* Visual Showcase with Zoom Trigger */}
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-tr from-taro-100/50 to-cream-100/80 border border-taro-200 flex items-center justify-center cursor-pointer shadow-inner"
                onClick={() => onOpenLightbox(sovereign.image)}
                title="Nhấp để phóng to"
              >
                <img
                  src={sovereign.image}
                  alt={sovereign.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 text-chocolate-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} className="text-berry-500" />
                </div>
              </div>

              {/* Narrative description */}
              <p className="font-sans text-xs sm:text-sm text-chocolate-700 leading-relaxed bg-white/70 p-4 rounded-2xl border border-taro-100">
                {sovereign.description}
              </p>
            </div>

            {/* Bottom Highlight Tag */}
            <div className="pt-4 mt-4 border-t border-taro-100 flex items-center justify-between">
              <span className="text-xs font-sans text-chocolate-600 flex items-center space-x-1.5">
                <Heart size={14} className="text-berry-500 fill-berry-500" />
                <span className="truncate">{sovereign.highlight}</span>
              </span>
              <button
                onClick={() => onOpenLightbox(sovereign.image)}
                className="p-2 rounded-xl bg-taro-100 hover:bg-taro-200 text-taro-800 transition bubble-btn shrink-0 ml-2"
                title="Xem chi tiết ảnh"
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* BENTO TILE 2: Daisy Crown & Spring Meadow (Vertical Tall Bento - 5 Cols) */}
          <div className="md:col-span-5 cafe-card rounded-5xl p-6 sm:p-8 border-2 border-pudding-200/80 shadow-cafe flex flex-col justify-between group hover:border-pudding-400 transition-all duration-300 relative overflow-hidden bg-gradient-to-b from-white via-cream-50 to-[#FFFDF9]">
            <div className="space-y-4">
              {/* Badge & Element */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-pudding-100 text-pudding-700 font-bold text-xs flex items-center space-x-1.5 border border-pudding-200">
                  <Flower2 size={13} className="text-pudding-600" />
                  <span>Trà Hoa Cúc Mật Ong</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-chocolate-400 uppercase tracking-wider">
                  {daisy.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-kawaii font-extrabold text-chocolate-900 group-hover:text-pudding-700 transition-colors">
                  {daisy.name}
                </h3>
                <p className="text-xs font-display font-bold text-pudding-600 tracking-wider uppercase mt-1">
                  {daisy.subtitle}
                </p>
              </div>

              {/* Vertical Image */}
              <div
                className="relative aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden bg-white/90 border border-pudding-200 flex items-center justify-center cursor-pointer shadow-inner"
                onClick={() => onOpenLightbox(daisy.image)}
                title="Nhấp để phóng to"
              >
                <img
                  src={daisy.image}
                  alt={daisy.name}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 text-chocolate-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} className="text-pudding-500" />
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-chocolate-700 leading-relaxed bg-white/80 p-3.5 rounded-2xl border border-pudding-100">
                {daisy.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-pudding-100 flex items-center justify-between">
              <span className="text-xs font-sans text-chocolate-600 truncate mr-2">
                {daisy.highlight}
              </span>
              <button
                onClick={() => onOpenLightbox(daisy.image)}
                className="p-2 rounded-xl bg-pudding-100 hover:bg-pudding-200 text-pudding-800 transition bubble-btn shrink-0"
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* BENTO TILE 3: Irus Sấm Sét Alter (Wide Electric Bento - 6 Cols) */}
          <div className="md:col-span-6 cafe-card rounded-5xl p-6 sm:p-8 border-2 border-berry-200/80 shadow-cafe flex flex-col justify-between group hover:border-berry-400 transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-berry-100 text-berry-600 font-bold text-xs flex items-center space-x-1.5 border border-berry-200">
                  <Zap size={13} className="text-berry-500" />
                  <span>Soda Dâu Sủi Bọt</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-berry-600 uppercase tracking-wider">
                  {irus.badge}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div
                  className="w-full sm:w-1/2 aspect-square rounded-3xl overflow-hidden bg-berry-50/70 border border-berry-200 flex items-center justify-center cursor-pointer shadow-inner shrink-0"
                  onClick={() => onOpenLightbox(irus.image)}
                  title="Nhấp để phóng to"
                >
                  <img
                    src={irus.image}
                    alt={irus.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="w-full sm:w-1/2 space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-kawaii font-extrabold text-chocolate-900 group-hover:text-berry-600 transition-colors">
                    {irus.name}
                  </h3>
                  <p className="text-[11px] font-mono font-bold text-berry-600">
                    {irus.flavor}
                  </p>
                  <p className="font-sans text-xs text-chocolate-700 leading-relaxed">
                    {irus.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-berry-100 flex items-center justify-between">
              <span className="text-xs font-sans text-chocolate-600 truncate mr-2">
                {irus.highlight}
              </span>
              <button
                onClick={() => onOpenLightbox(irus.image)}
                className="p-2 rounded-xl bg-berry-100 hover:bg-berry-200 text-berry-700 transition bubble-btn shrink-0"
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* BENTO TILE 4: Chibi Slime Doodles (Wide Playful Bento - 6 Cols) */}
          <div className="md:col-span-6 cafe-card rounded-5xl p-6 sm:p-8 border-2 border-mint-200/80 shadow-cafe flex flex-col justify-between group hover:border-mint-400 transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-mint-100 text-mint-700 font-bold text-xs flex items-center space-x-1.5 border border-mint-200">
                  <Sparkles size={13} className="text-mint-600" />
                  <span>Flan Trứng Sữa Núng Nính</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-mint-700 uppercase tracking-wider">
                  {doodle.badge}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div
                  className="w-full sm:w-1/2 aspect-square rounded-3xl overflow-hidden bg-mint-50/70 border border-mint-200 flex items-center justify-center cursor-pointer shadow-inner shrink-0"
                  onClick={() => onOpenLightbox(doodle.image)}
                  title="Nhấp để phóng to"
                >
                  <img
                    src={doodle.image}
                    alt={doodle.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="w-full sm:w-1/2 space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-kawaii font-extrabold text-chocolate-900 group-hover:text-mint-700 transition-colors">
                    {doodle.name}
                  </h3>
                  <p className="text-[11px] font-mono font-bold text-mint-700">
                    {doodle.flavor}
                  </p>
                  <p className="font-sans text-xs text-chocolate-700 leading-relaxed">
                    {doodle.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-mint-100 flex items-center justify-between">
              <span className="text-xs font-sans text-chocolate-600 truncate mr-2">
                {doodle.highlight}
              </span>
              <button
                onClick={() => onOpenLightbox(doodle.image)}
                className="p-2 rounded-xl bg-mint-100 hover:bg-mint-200 text-mint-800 transition bubble-btn shrink-0"
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

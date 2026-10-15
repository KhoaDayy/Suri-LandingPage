import React, { useState } from 'react';
import { Palette, ZoomIn, Sparkles, Heart, Filter, Maximize2 } from 'lucide-react';
import { GALLERY_DATA } from '../data/suriData';

interface CharacterGalleryProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const CharacterGallery: React.FC<CharacterGalleryProps> = ({ onOpenLightbox }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (categoryFilter === 'ALL') return true;
    if (categoryFilter === 'OFFICIAL' && item.category === 'Official Artwork') return true;
    if (categoryFilter === 'SHEETS' && item.category === 'Design Sheets') return true;
    if (categoryFilter === 'CHIBI' && item.category === 'Chibi & Doodles') return true;
    if (categoryFilter === 'IRUS' && item.category === 'Irus Alter') return true;
    return true;
  });

  return (
    <section id="gallery" className="relative py-28 bg-[#FAF7F2] border-t border-taro-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-taro-200/35 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-berry-200/25 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
            <Palette className="w-4 h-4 text-berry-500" />
            <span>04 // BỘ SƯU TẬP BENTO ART // BENTO VISUAL WARDROBE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
            BENTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry-500 to-taro-500">ART SHOWCASE</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate-600 max-w-2xl mx-auto">
            Khám phá trọn bộ tác phẩm minh họa gốc, tài liệu thiết kế trang phục Model 3.0 và dị thể Irus trong bố cục Bento hiện đại.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-14">
          <div className="hidden sm:flex items-center space-x-1.5 text-xs font-mono font-bold text-chocolate-400 mr-2 uppercase">
            <Filter size={14} className="text-taro-600" />
            <span>LỌC TRANH:</span>
          </div>
          {[
            { id: 'ALL', label: 'Tất Cả Tác Phẩm', emoji: '✨' },
            { id: 'OFFICIAL', label: 'Minh Họa Chính Thức', emoji: '🌸' },
            { id: 'SHEETS', label: 'Bản Vẽ Thiết Kế', emoji: '📐' },
            { id: 'CHIBI', label: 'Chibi & Doodles', emoji: '🍮' },
            { id: 'IRUS', label: 'Irus Sấm Sét', emoji: '⚡' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCategoryFilter(tab.id)}
              className={`px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider transition-all duration-300 bubble-btn shadow-xs ${
                categoryFilter === tab.id
                  ? 'bg-gradient-to-r from-taro-500 to-berry-400 text-white shadow-md'
                  : 'bg-white text-chocolate-700 border border-taro-200 hover:bg-cream-100'
              }`}
            >
              <span className="mr-1.5">{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Bento Art Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, idx) => {
            // Give specific cards dynamic spans to create an exciting Bento rhythm
            const isHeroCard = idx === 0 && (categoryFilter === 'ALL' || categoryFilter === 'OFFICIAL');
            const isWideCard = idx === 1 || idx === 2;

            const colSpanClass = isHeroCard
              ? 'lg:col-span-8 sm:col-span-2'
              : isWideCard
              ? 'lg:col-span-4 sm:col-span-1'
              : 'lg:col-span-4 sm:col-span-1';

            return (
              <div
                key={item.id}
                className={`${colSpanClass} cafe-card rounded-5xl p-5 sm:p-6 border-2 border-taro-200/80 shadow-cafe flex flex-col justify-between group hover:border-taro-400 transition-all duration-300 relative overflow-hidden`}
              >
                {/* Washi tape on hero cards */}
                {isHeroCard && (
                  <div className="absolute top-2 right-8 px-4 py-0.5 tape-sticker rounded-md text-[10px] font-mono font-bold text-berry-700 uppercase tracking-widest z-20">
                    ★ MASTER KEY VISUAL ★
                  </div>
                )}

                <div className="space-y-3.5">
                  {/* Image Viewport */}
                  <div
                    className={`relative rounded-3xl overflow-hidden bg-white border border-taro-200 flex items-center justify-center cursor-pointer shadow-inner ${
                      isHeroCard ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-square'
                    }`}
                    onClick={() => onOpenLightbox(item.image)}
                    title="Nhấp để phóng to toàn màn hình"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Hover action overlay */}
                    <div className="absolute inset-0 bg-chocolate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-white/95 text-chocolate-900 font-display text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-xl">
                        <ZoomIn size={14} className="text-berry-500" />
                        <span>Xem Ảnh Gốc</span>
                      </span>
                    </div>

                    <span className="absolute top-2.5 left-2.5 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-chocolate-700 border border-taro-200 shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-chocolate-500">
                      <span className="font-bold text-berry-600 uppercase">{item.category}</span>
                      <span>Năm: {item.year}</span>
                    </div>

                    <h3 className="font-kawaii text-lg sm:text-xl font-extrabold text-chocolate-900 group-hover:text-taro-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs text-chocolate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Attribution */}
                <div className="pt-3 mt-3 border-t border-taro-100 flex items-center justify-between text-[11px] font-mono text-chocolate-600">
                  <span className="flex items-center space-x-1 font-bold text-chocolate-800 truncate mr-2">
                    <Heart size={12} className="text-berry-500 fill-berry-500 shrink-0" />
                    <span className="truncate">{item.creator}</span>
                  </span>

                  <button
                    onClick={() => onOpenLightbox(item.image)}
                    className="p-1.5 rounded-xl bg-taro-100 hover:bg-taro-200 text-taro-800 transition bubble-btn shrink-0"
                    title="Phóng to ảnh"
                  >
                    <Maximize2 size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info pill */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white border border-taro-200 text-xs font-display font-bold text-chocolate-600 shadow-xs">
            <Sparkles size={14} className="text-pudding-500" />
            <span>Toàn bộ {GALLERY_DATA.length} tác phẩm đều được trích xuất từ bộ artwork chính thức của Suri Mukeki</span>
          </div>
        </div>
      </div>
    </section>
  );
};

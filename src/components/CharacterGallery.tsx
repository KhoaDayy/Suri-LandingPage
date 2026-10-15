import React, { useState } from 'react';
import { Palette, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/suriData';

interface CharacterGalleryProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const CharacterGallery: React.FC<CharacterGalleryProps> = ({ onOpenLightbox }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (categoryFilter === 'ALL') return true;
    if (categoryFilter === 'MODEL3' && item.category === 'Model 3.0') return true;
    if (categoryFilter === 'IRUS' && item.category === 'Irus Alter') return true;
    if (categoryFilter === 'HISTORICAL' && item.category === 'Historical') return true;
    if (categoryFilter === 'SHEET' && item.category === 'Reference Sheet') return true;
    return true;
  });

  // Ensure selected item is within filtered scope
  const activeItem: GalleryItem = filteredItems[selectedIndex] || filteredItems[0] || GALLERY_DATA[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="relative min-h-screen py-24 bg-[#09070D] border-t border-lavender-400/20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-plum-800/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-roseAccent-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-lavender-400/30 text-lavender-200 font-display text-xs tracking-widest uppercase shadow-lg shadow-plum-900/30">
            <Palette className="w-3.5 h-3.5 text-roseAccent-400" />
            <span>04 // KHO LƯU TRỮ HÌNH ẢNH // VISUAL WARDROBE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-gothic tracking-wider text-ivory-100 uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            CHARACTER <span className="text-roseAccent-400 text-glow-rose">GALLERY</span>
          </h2>
          <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-lavender-300 max-w-xl mx-auto uppercase">
            CÁC PHIÊN BẢN MẪU HÌNH, THIẾT KẾ KỸ THUẬT VÀ DỊ THỂ IRUS
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: 'ALL', label: 'TẤT CẢ TÁC PHẨM' },
            { id: 'MODEL3', label: 'MODEL 3.0 CHÍNH THỨC' },
            { id: 'IRUS', label: 'IRUS SẤM SÉT (ALTER)' },
            { id: 'HISTORICAL', label: 'LỊCH SỬ DEBUT & 2.0' },
            { id: 'SHEET', label: 'BẢN THIẾT KẾ (SHEET)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setCategoryFilter(tab.id);
                setSelectedIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-display text-xs tracking-wider uppercase border transition-all duration-300 ${
                categoryFilter === tab.id
                  ? 'bg-plum-800 text-white border-roseAccent-500 shadow-[0_0_15px_rgba(157,83,105,0.4)]'
                  : 'bg-charcoal-800/60 text-ivory-400 border-lavender-400/20 hover:text-white hover:border-lavender-400/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Stage Preview */}
        <div className="parchment-border bg-charcoal-900/90 rounded-3xl p-6 sm:p-8 mb-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Interactive Stage Frame */}
            <div className="w-full lg:w-7/12 flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-xs font-mono text-lavender-400 mb-3 px-2">
                <span className="uppercase tracking-widest">{activeItem.badge}</span>
                <span>
                  {String(selectedIndex + 1).padStart(2, '0')} — {String(filteredItems.length).padStart(2, '0')}
                </span>
              </div>

              <div
                className="group relative w-full aspect-[4/5] sm:aspect-square max-h-[520px] rounded-2xl overflow-hidden bg-charcoal-950 border border-lavender-400/25 flex items-center justify-center cursor-pointer shadow-inner"
                onClick={() => onOpenLightbox(activeItem.image)}
                title="Nhấp để phóng to toàn màn hình"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-plum-800/90 border border-roseAccent-400 text-white font-mono text-xs tracking-wider uppercase flex items-center space-x-2 shadow-2xl backdrop-blur-sm">
                    <ZoomIn size={16} className="text-roseAccent-400" />
                    <span>PHÓNG TO TRANH TOÀN DIỆN</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Caption & Stage Controls */}
            <div className="w-full lg:w-5/12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1 border-b border-lavender-400/20 pb-4">
                  <span className="text-xs font-mono text-roseAccent-400 uppercase tracking-widest font-bold">
                    {activeItem.category} // {activeItem.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-gothic text-ivory-100">
                    {activeItem.title}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-plum-900/60 border border-lavender-400/20 text-xs font-mono text-lavender-200">
                  <div className="text-[10px] uppercase text-ivory-400 tracking-wider mb-1">TÁC GIẢ THỰC HIỆN</div>
                  <div className="font-bold text-ivory-100">{activeItem.creator}</div>
                </div>

                <p className="font-editorial text-base sm:text-lg text-ivory-300 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Prev / Next Stage Controls */}
              <div className="pt-6 border-t border-lavender-400/20 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/30 text-ivory-200 hover:text-white font-display text-xs tracking-widest uppercase flex items-center space-x-2 transition"
                >
                  <ChevronLeft size={16} />
                  <span>TRƯỚC ĐÓ</span>
                </button>
                <button
                  onClick={() => onOpenLightbox(activeItem.image)}
                  className="p-2.5 rounded-xl bg-plum-800/60 hover:bg-plum-800 border border-roseAccent-500/40 text-roseAccent-300 transition"
                  title="Xem kích thước gốc"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/30 text-ivory-200 hover:text-white font-display text-xs tracking-widest uppercase flex items-center space-x-2 transition"
                >
                  <span>TIẾP THEO</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {filteredItems.map((item, idx) => {
            const isSelected = item.id === activeItem.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                className={`p-2.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-plum-800/90 border-roseAccent-500 shadow-[0_0_20px_rgba(157,83,105,0.4)] scale-102'
                    : 'bg-charcoal-900/60 border-lavender-400/15 hover:bg-charcoal-800 hover:border-lavender-400/40'
                }`}
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-charcoal-950 mb-2 border border-lavender-400/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <span className="absolute top-1.5 right-1.5 font-mono text-[9px] px-1.5 py-0.5 rounded bg-charcoal-900/90 text-lavender-200 border border-lavender-400/30">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-ivory-100 truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-mono text-lavender-400 truncate mt-0.5">
                    {item.badge}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

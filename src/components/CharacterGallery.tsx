import React, { useState } from 'react';
import { Palette, ChevronLeft, ChevronRight, ZoomIn, Sparkles, Image as ImageIcon, Heart } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/suriData';

interface CharacterGalleryProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const CharacterGallery: React.FC<CharacterGalleryProps> = ({ onOpenLightbox }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (categoryFilter === 'ALL') return true;
    if (categoryFilter === 'OFFICIAL' && item.category === 'Official Artwork') return true;
    if (categoryFilter === 'SHEETS' && item.category === 'Design Sheets') return true;
    if (categoryFilter === 'CHIBI' && item.category === 'Chibi & Doodles') return true;
    if (categoryFilter === 'IRUS' && item.category === 'Irus Alter') return true;
    return true;
  });

  const activeItem: GalleryItem = filteredItems[selectedIndex] || filteredItems[0] || GALLERY_DATA[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="relative min-h-screen py-24 bg-[#FBF8F3] border-t border-taro-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-taro-200/35 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-berry-200/25 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-1/3 w-[450px] h-[450px] bg-mint-200/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Cute Floating Background Decorations */}
      <div className="absolute top-16 right-16 text-3xl opacity-75 pointer-events-none select-none animate-float-slow">
        🎨
      </div>
      <div className="absolute bottom-20 left-12 text-3xl opacity-70 pointer-events-none select-none animate-float-soft">
        🌸
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs tracking-wider uppercase shadow-sm">
            <Palette className="w-4 h-4 text-berry-500" />
            <span>04 // BỘ SƯU TẬP TRANH ẢNH // PHOTO ALBUM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-sm">
            PHOTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry-500 to-taro-500">GALLERY</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate-600 max-w-2xl mx-auto">
            Ghé thăm góc trưng bày kỷ niệm với những nét vẽ gốc sắc nét, tài liệu thiết kế trang phục Model 3.0 và bản thể sấm sét Irus.
          </p>
        </div>

        {/* Filter Bar with Cute Pill Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: 'ALL', label: 'Tất Cả Tác Phẩm', emoji: '✨' },
            { id: 'OFFICIAL', label: 'Minh Họa Chính Thức', emoji: '🌸' },
            { id: 'SHEETS', label: 'Bản Vẽ Thiết Kế (Sheets)', emoji: '📐' },
            { id: 'CHIBI', label: 'Chibi & Doodles', emoji: '🍮' },
            { id: 'IRUS', label: 'Irus Sấm Sét (Alter)', emoji: '⚡' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setCategoryFilter(tab.id);
                setSelectedIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider transition-all duration-300 bubble-btn shadow-sm ${
                categoryFilter === tab.id
                  ? 'bg-gradient-to-r from-taro-500 to-berry-400 text-white shadow-md'
                  : 'bg-white/80 text-chocolate-700 border border-taro-200/80 hover:bg-white hover:text-chocolate-900'
              }`}
            >
              <span className="mr-1.5">{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Stage: Polaroid Showcase Frame */}
        <div className="relative cafe-card rounded-4xl p-6 sm:p-10 mb-12 shadow-cafe-lg border border-taro-200/70">
          {/* Decorative Washi Tape on Top Center */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-8 py-1 tape-sticker rounded-md text-[11px] font-mono text-berry-700 tracking-widest font-bold uppercase shadow-sm">
            ★ SURI PHOTO EXHIBITION ★
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column: High-Res Interactive Image Frame */}
            <div className="w-full lg:w-7/12 flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-xs font-mono text-chocolate-500 mb-3 px-1">
                <span className="font-bold text-berry-600 uppercase tracking-wider flex items-center space-x-1">
                  <Sparkles size={13} className="text-pudding-500" />
                  <span>{activeItem.badge}</span>
                </span>
                <span className="bg-taro-100/70 text-taro-800 px-2.5 py-0.5 rounded-full font-bold">
                  {String(selectedIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                </span>
              </div>

              <div
                className="group relative w-full aspect-[4/5] sm:aspect-square max-h-[520px] rounded-3xl overflow-hidden bg-white border-2 border-taro-200/60 flex items-center justify-center cursor-pointer shadow-md"
                onClick={() => onOpenLightbox(activeItem.image)}
                title="Nhấp để phóng to toàn màn hình"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute inset-0 bg-chocolate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-5 py-2.5 rounded-full bg-white/95 text-chocolate-900 font-display text-xs font-bold tracking-wider uppercase flex items-center space-x-2 shadow-xl backdrop-blur-sm">
                    <ZoomIn size={16} className="text-berry-500" />
                    <span>Xem Kích Thước Gốc</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Story & Stage Controls */}
            <div className="w-full lg:w-5/12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1.5 border-b border-taro-200/70 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-berry-100 text-berry-700 text-[11px] font-mono font-bold uppercase">
                      {activeItem.category}
                    </span>
                    <span className="text-xs font-mono text-chocolate-500">
                      Năm sáng tác: {activeItem.year}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-kawaii font-extrabold text-chocolate-900 leading-snug">
                    {activeItem.title}
                  </h3>
                </div>

                {/* Creator Attribution */}
                <div className="p-4 rounded-2xl bg-white/90 border border-taro-200/80 text-xs font-mono text-chocolate-700 shadow-sm flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-taro-100 flex items-center justify-center shrink-0 text-taro-700">
                    <Palette size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-chocolate-500 tracking-wider">Tác giả thực hiện</div>
                    <div className="font-bold text-chocolate-900 text-sm">{activeItem.creator}</div>
                  </div>
                </div>

                <p className="font-sans text-sm sm:text-base text-chocolate-700 leading-relaxed bg-cream-50/70 p-4 rounded-2xl border border-taro-100">
                  {activeItem.description}
                </p>
              </div>

              {/* Prev / Next Stage Controls */}
              <div className="pt-4 border-t border-taro-200/70 flex items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-2xl bg-white hover:bg-taro-50 border border-taro-200 text-chocolate-700 font-display text-xs font-bold tracking-wider uppercase flex items-center space-x-2 transition shadow-sm bubble-btn"
                >
                  <ChevronLeft size={16} />
                  <span>TRƯỚC ĐÓ</span>
                </button>

                <button
                  onClick={() => onOpenLightbox(activeItem.image)}
                  className="p-3 rounded-2xl bg-taro-100 hover:bg-taro-200 border border-taro-300 text-taro-800 transition bubble-btn shadow-sm"
                  title="Phóng to ảnh"
                >
                  <ZoomIn size={18} />
                </button>

                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-2xl bg-white hover:bg-taro-50 border border-taro-200 text-chocolate-700 font-display text-xs font-bold tracking-wider uppercase flex items-center space-x-2 transition shadow-sm bubble-btn"
                >
                  <span>TIẾP THEO</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Grid (Mini Polaroids) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2 text-xs font-mono text-chocolate-500">
            <span className="flex items-center space-x-1.5 font-bold uppercase tracking-wider">
              <ImageIcon size={14} className="text-taro-600" />
              <span>DANH SÁCH ẢNH TRONG BỘ SƯU TẬP</span>
            </span>
            <span className="flex items-center space-x-1 text-berry-600 font-bold">
              <Heart size={12} className="fill-berry-500" />
              <span>Chạm ảnh để xem trên sân khấu</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.map((item, idx) => {
              const isSelected = item.id === activeItem.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`polaroid-frame text-left transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? 'border-2 border-berry-400 shadow-cafe-lg scale-102 ring-2 ring-berry-200/50'
                      : 'hover:border-taro-300 hover:shadow-md'
                  } ${item.rotationClass || ''}`}
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-taro-50/50 mb-2.5 border border-taro-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-1.5 right-1.5 font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/90 text-chocolate-800 border border-taro-200 font-bold shadow-xs">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-kawaii text-xs font-bold text-chocolate-900 truncate">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-mono text-berry-600 truncate mt-0.5 font-bold">
                      {item.badge}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

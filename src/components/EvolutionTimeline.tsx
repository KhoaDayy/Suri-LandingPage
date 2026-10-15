import React, { useState, useRef } from 'react';
import { Calendar, CheckCircle2, Bookmark, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TIMELINE_DATA, MilestoneItem } from '../data/suriData';

export const EvolutionTimeline: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'MODEL' && item.category === 'MODEL') return true;
    if (filter === 'MILESTONE' && item.category === 'MILESTONE') return true;
    if (filter === 'DEBUT_LORE' && (item.category === 'DEBUT' || item.category === 'LORE')) return true;
    if (filter === 'MUSIC' && item.category === 'MUSIC') return true;
    return true;
  });

  const getCategoryBadgeStyle = (cat: MilestoneItem['category']) => {
    switch (cat) {
      case 'DEBUT':
        return 'bg-berry-100 text-berry-600 border-berry-200';
      case 'MODEL':
        return 'bg-taro-100 text-taro-700 border-taro-200';
      case 'MILESTONE':
        return 'bg-pudding-100 text-pudding-700 border-pudding-300';
      case 'LORE':
        return 'bg-mint-100 text-mint-700 border-mint-200';
      case 'MUSIC':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-cream-100 text-chocolate-700 border-taro-200';
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline" className="relative py-28 bg-[#F6EFE5]/60 border-t border-taro-200/60 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-taro-200/30 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-berry-200/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
              <Bookmark className="w-3.5 h-3.5 text-berry-500" />
              <span>03 // BĂNG CHUYỀN THỜI GIAN // HORIZONTAL MEMORY ROADMAP</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
              MEMORY <span className="text-berry-500">ROADMAP</span>
            </h2>
            <p className="font-sans text-sm text-chocolate-600 max-w-xl">
              Trượt ngang để khám phá các trạm dừng chân lịch sử từ những ngày đầu debut 2021 đến cột mốc hơn 51,400+ thành viên hiện tại.
            </p>
          </div>

          {/* Horizontal Slider Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleScrollLeft}
              className="p-3 rounded-2xl bg-white hover:bg-cream-100 border border-taro-200 text-chocolate-700 hover:text-berry-600 shadow-sm transition bubble-btn"
              title="Cuộn sang trái"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleScrollRight}
              className="p-3 rounded-2xl bg-white hover:bg-cream-100 border border-taro-200 text-chocolate-700 hover:text-berry-600 shadow-sm transition bubble-btn"
              title="Cuộn sang phải"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {[
            { id: 'ALL', label: 'TẤT CẢ KỶ NIỆM 🍮' },
            { id: 'MODEL', label: 'TẠO HÌNH (MODELS) 🎀' },
            { id: 'MILESTONE', label: 'CỘT MỐC GIA ĐÌNH 🎉' },
            { id: 'DEBUT_LORE', label: 'DEBUT & LORE 📜' },
            { id: 'MUSIC', label: 'ÂM NHẠC 🎵' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase border transition-all duration-300 bubble-btn ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-taro-500 to-berry-400 text-white border-transparent shadow-sm'
                  : 'bg-white text-chocolate-600 border-taro-200 hover:border-taro-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Horizontal Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-4 px-2 no-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.title + item.date}
              className="flex-shrink-0 w-[300px] sm:w-[340px] cafe-card rounded-4xl p-6 border-2 border-taro-200/80 shadow-cafe space-y-4 flex flex-col justify-between group hover:border-taro-400 transition-all duration-300 relative"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Cute Washi Tape on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 tape-sticker rounded-md text-[10px] font-mono font-bold text-chocolate-600 uppercase">
                TRẠM KÝ ỨC #{String(index + 1).padStart(2, '0')}
              </div>

              <div className="space-y-3 pt-2">
                {/* Header with Emoji Pin & Date */}
                <div className="flex items-center justify-between border-b border-taro-100 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-full bg-cream-100 border border-taro-200 flex items-center justify-center text-sm shadow-xs group-hover:scale-110 transition-transform">
                      {item.stickerEmoji}
                    </span>
                    <span className="text-xs font-mono font-bold text-chocolate-500 flex items-center space-x-1">
                      <Calendar size={12} className="text-berry-500" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border uppercase ${getCategoryBadgeStyle(item.category)}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="text-lg font-kawaii font-extrabold text-chocolate-900 group-hover:text-taro-700 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-chocolate-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Source verification footer */}
              <div className="pt-3 border-t border-taro-100 flex items-center space-x-1.5 text-[10px] font-mono text-taro-700 font-bold">
                <CheckCircle2 size={12} className="text-mint-600 shrink-0" />
                <span className="truncate">{item.sourceNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tip for desktop users */}
        <div className="flex items-center justify-center space-x-2 text-xs font-mono text-chocolate-500 mt-2">
          <Sparkles size={14} className="text-pudding-500" />
          <span>Có thể dùng chuột kéo ngang hoặc dùng nút mũi tên bên trên để lướt qua các mốc thời gian</span>
        </div>
      </div>
    </section>
  );
};

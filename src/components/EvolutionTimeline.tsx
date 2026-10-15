import React, { useState } from 'react';
import { Calendar, CheckCircle2, Bookmark } from 'lucide-react';
import { TIMELINE_DATA, MilestoneItem } from '../data/suriData';

export const EvolutionTimeline: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

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

  return (
    <section id="timeline" className="relative min-h-screen py-24 bg-[#F5ECE0]/60 border-t border-taro-200/60 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-taro-200/30 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-berry-200/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
            <Bookmark className="w-3.5 h-3.5 text-berry-500" />
            <span>03 // BẢNG TIN QUÁN CAFE // CAFE MEMORY BULLETIN</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
            CAFE BULLETIN & <span className="text-berry-500">MEMORIES</span>
          </h2>
          <p className="font-display text-xs sm:text-sm font-bold tracking-widest text-chocolate-500 max-w-xl mx-auto uppercase">
            LƯU GIỮ TỪNG KỶ NIỆM NGỌT NGÀO TỪ NGÀY MỞ CỬA ĐẾN HÔM NAY
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
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

        {/* Vertical Bulletin Board */}
        <div className="relative border-l-2 border-taro-300 ml-4 md:ml-1/2 md:-translate-x-1/2 space-y-10 pl-6 md:pl-0">
          {filteredItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.title + item.date}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Cute Central Pin Marker */}
                <div className="absolute -left-[30px] md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-berry-400 shadow-sm z-20 flex items-center justify-center text-xs group-hover:scale-125 transition-transform select-none">
                  {item.stickerEmoji}
                </div>

                {/* Card Container */}
                <div className={`w-full md:w-[46%] ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="cafe-card cafe-card-hover rounded-4xl p-6 border-2 border-taro-200/70 shadow-cafe space-y-3 relative overflow-hidden">
                    {/* Washi Tape Accent */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 tape-sticker rounded-md rotate-[-2deg] pointer-events-none" />

                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-taro-100 pb-2.5 pt-1">
                      <div className="flex items-center space-x-1.5 text-xs font-display font-bold text-chocolate-500">
                        <Calendar size={13} className="text-berry-500" />
                        <span>{item.date}</span>
                      </div>
                      <span className={`text-[10px] font-display font-bold tracking-wider px-2.5 py-0.5 rounded-full border uppercase ${getCategoryBadgeStyle(item.category)}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="text-lg sm:text-xl font-kawaii font-bold text-chocolate-900 group-hover:text-taro-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-story text-sm text-chocolate-700 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Source Citation */}
                    <div className="pt-2 flex items-center space-x-1.5 text-[11px] font-display font-semibold text-taro-600 border-t border-taro-100">
                      <CheckCircle2 size={12} className="text-mint-500 shrink-0" />
                      <span className="truncate">{item.sourceNote}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

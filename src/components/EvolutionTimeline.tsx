import React, { useState } from 'react';
import { History, Calendar, CheckCircle2 } from 'lucide-react';
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
        return 'bg-roseAccent-600/30 text-roseAccent-300 border-roseAccent-500/40';
      case 'MODEL':
        return 'bg-lavender-500/30 text-lavender-200 border-lavender-400/40';
      case 'MILESTONE':
        return 'bg-waterCyan-500/30 text-waterCyan-300 border-waterCyan-400/40';
      case 'LORE':
        return 'bg-plum-700/40 text-lavender-300 border-lavender-400/30';
      case 'MUSIC':
        return 'bg-amber-500/30 text-amber-300 border-amber-400/40';
      default:
        return 'bg-charcoal-800 text-ivory-300 border-lavender-400/20';
    }
  };

  return (
    <section id="timeline" className="relative min-h-screen py-24 bg-[#0B0910] border-t border-lavender-400/20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-plum-800/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-roseAccent-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-lavender-400/30 text-lavender-200 font-display text-xs tracking-widest uppercase shadow-lg shadow-plum-900/30">
            <History className="w-3.5 h-3.5 text-roseAccent-400" />
            <span>03 // DÒNG THỜI GIAN & CỘT MỐC // EVOLUTION TIMELINE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-gothic tracking-wider text-ivory-100 uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            CHRONICLES & <span className="text-roseAccent-400 text-glow-rose">EVOLUTION</span>
          </h2>
          <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-lavender-300 max-w-xl mx-auto uppercase">
            HÀNH TRÌNH TỪ NGÀY ĐẦU TIÊN CẤT TIẾNG ĐẾN HƠN 51,400+ TÂM HỒN ĐỒNG HÀNH
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {[
            { id: 'ALL', label: 'TẤT CẢ CỘT MỐC' },
            { id: 'MODEL', label: 'MẪU HÌNH (MODELS)' },
            { id: 'MILESTONE', label: 'CỘT MỐC ĐĂNG KÝ' },
            { id: 'DEBUT_LORE', label: 'DEBUT & LORE' },
            { id: 'MUSIC', label: 'ÂM NHẠC' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full font-display text-xs tracking-wider uppercase border transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-plum-800 text-white border-roseAccent-500 shadow-[0_0_15px_rgba(157,83,105,0.4)]'
                  : 'bg-charcoal-800/60 text-ivory-400 border-lavender-400/20 hover:text-white hover:border-lavender-400/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Line Container */}
        <div className="relative border-l-2 border-lavender-400/20 ml-4 md:ml-1/2 md:-translate-x-1/2 space-y-10 pl-6 md:pl-0">
          {filteredItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.title + item.date}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Central Point Marker */}
                <div className="absolute -left-[31px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-charcoal-900 border-2 border-roseAccent-400 shadow-[0_0_12px_rgba(157,83,105,0.8)] z-20 group-hover:scale-125 transition-transform" />

                {/* Card Container */}
                <div className={`w-full md:w-[46%] ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-lavender-400/20 shadow-xl space-y-3">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-lavender-400/15 pb-3">
                      <div className="flex items-center space-x-2 text-xs font-mono text-lavender-300">
                        <Calendar size={13} className="text-roseAccent-400" />
                        <span>{item.date}</span>
                      </div>
                      <span className={`text-[10px] font-mono tracking-widest px-2.5 py-0.5 rounded-full border uppercase ${getCategoryBadgeStyle(item.category)}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="text-lg sm:text-xl font-gothic text-ivory-100 group-hover:text-lavender-200 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-editorial text-base text-ivory-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Provenance Footer */}
                    <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-lavender-400/80 border-t border-lavender-400/10">
                      <CheckCircle2 size={12} className="text-waterCyan-400 shrink-0" />
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

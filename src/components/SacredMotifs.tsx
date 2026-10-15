import React, { useState } from 'react';
import { Sparkles, ZoomIn, Coffee, Heart, Zap, Flower2, Utensils } from 'lucide-react';
import { MOTIFS_DATA, MotifItem, SURI_DATA } from '../data/suriData';

interface SacredMotifsProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const SacredMotifs: React.FC<SacredMotifsProps> = ({ onOpenLightbox }) => {
  const [selectedMotif, setSelectedMotif] = useState<MotifItem>(MOTIFS_DATA[0]);

  const getElementBadge = (elem: string) => {
    switch (elem) {
      case 'berry':
        return <span className="px-2.5 py-0.5 rounded-full bg-berry-100 text-berry-600 font-bold text-[10px] flex items-center space-x-1"><Zap size={11} /><span>Lôi Sấm Sét</span></span>;
      case 'pudding':
        return <span className="px-2.5 py-0.5 rounded-full bg-pudding-100 text-pudding-600 font-bold text-[10px] flex items-center space-x-1"><Flower2 size={11} /><span>Hoa Cúc Ngọt</span></span>;
      case 'mint':
        return <span className="px-2.5 py-0.5 rounded-full bg-mint-100 text-mint-600 font-bold text-[10px] flex items-center space-x-1"><Sparkles size={11} /><span>Chibi Núng Nính</span></span>;
      case 'taro':
      default:
        return <span className="px-2.5 py-0.5 rounded-full bg-taro-100 text-taro-700 font-bold text-[10px] flex items-center space-x-1"><Coffee size={11} /><span>Khoai Môn Quý Tộc</span></span>;
    }
  };

  return (
    <section id="motifs" className="relative min-h-screen py-24 bg-[#F5ECE0]/60 border-t border-taro-200/60 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-taro-200/30 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-berry-200/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
            <Utensils className="w-3.5 h-3.5 text-berry-500" />
            <span>01 // THỰC ĐƠN SLIME // SWEET DESSERT FORMS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
            SLIME FLAVORS & <span className="text-berry-500">FORMS</span>
          </h2>
          <p className="font-display text-xs sm:text-sm font-bold tracking-widest text-chocolate-500 max-w-xl mx-auto uppercase">
            CÁC HƯƠNG VỊ VÀ TẠO HÌNH CỦA BÉ SLIME SURI
          </p>
        </div>

        {/* Motifs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Menu Board Card */}
          <div className="lg:col-span-8">
            <div className="cafe-card rounded-5xl p-6 sm:p-8 lg:p-10 border-2 border-taro-200/70 shadow-cafe relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Thumbnails List */}
                <div className="md:col-span-5 space-y-3.5">
                  <p className="font-display text-xs font-bold tracking-wider text-chocolate-400 uppercase">
                    CHỌN MÓN // SELECT FLAVOR
                  </p>

                  <div className="space-y-2.5">
                    {MOTIFS_DATA.map((motif, index) => {
                      const isSelected = selectedMotif.id === motif.id;
                      return (
                        <button
                          key={motif.id}
                          type="button"
                          onClick={() => setSelectedMotif(motif)}
                          className={`w-full text-left p-3 rounded-2xl flex items-center space-x-3 border transition-all duration-300 bubble-btn ${
                            isSelected
                              ? 'bg-taro-100/90 border-taro-400 shadow-sm scale-102'
                              : 'bg-white/80 border-taro-100 hover:bg-white hover:border-taro-300 text-chocolate-700'
                          }`}
                        >
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-cream-100 shrink-0 border border-taro-200">
                            <img
                              src={motif.image}
                              alt={motif.name}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <span className="font-display text-xs font-bold text-chocolate-900 truncate block">
                              {motif.name}
                            </span>
                            <span className="text-[10px] font-mono text-taro-600 font-bold block truncate">
                              {motif.flavor}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-chocolate-400 font-bold">
                            0{index + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Motif Polaroid Preview */}
                  <div className="pt-2">
                    <div
                      className="group relative rounded-2xl overflow-hidden border-2 border-taro-200 bg-white cursor-pointer aspect-video flex items-center justify-center shadow-sm bubble-btn"
                      onClick={() => onOpenLightbox(selectedMotif.image)}
                      title="Nhấp để phóng to tranh sắc nét"
                    >
                      <img
                        src={selectedMotif.image}
                        alt={selectedMotif.name}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-chocolate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-3.5 py-1.5 rounded-full bg-white text-chocolate-900 font-display text-xs font-bold tracking-wider flex items-center space-x-1.5 shadow-md">
                          <ZoomIn size={14} className="text-berry-500" />
                          <span>PHÓNG TO TRANH</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Details on Right */}
                <div className="md:col-span-7 space-y-4">
                  <div className="space-y-1.5 border-b border-taro-100 pb-3">
                    <div className="flex items-center justify-between">
                      {getElementBadge(selectedMotif.element)}
                      <span className="text-[10px] font-mono text-chocolate-400 font-bold uppercase">
                        {selectedMotif.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-kawaii font-bold text-chocolate-900">
                      {selectedMotif.name}
                    </h3>
                    <p className="font-display text-xs font-bold text-taro-600">
                      {selectedMotif.flavor}
                    </p>
                  </div>

                  {/* Highlight Box */}
                  <div className="p-4 rounded-2xl bg-cream-100/90 border border-pudding-200 text-xs font-display text-chocolate-700 leading-relaxed shadow-xs">
                    <div className="font-bold text-berry-600 mb-1 flex items-center space-x-1">
                      <Heart size={14} className="fill-berry-500 text-berry-500" />
                      <span>ĐIỂM ĐÁNG YÊU ĐẶC BIỆT</span>
                    </div>
                    {selectedMotif.highlight}
                  </div>

                  {/* Long Description */}
                  <p className="font-story text-sm sm:text-base text-chocolate-700 leading-relaxed">
                    {selectedMotif.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenLightbox(selectedMotif.image)}
                      className="inline-flex items-center space-x-2 text-xs font-display font-bold tracking-wider text-taro-600 hover:text-taro-700 uppercase group bubble-btn"
                    >
                      <span>Xem toàn bộ chi tiết tác phẩm</span>
                      <ZoomIn size={14} className="text-berry-500 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Standing Daisy Crown or Master Stature */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
            <div className="w-80 h-[480px] rounded-full bg-pudding-200/40 blur-3xl absolute pointer-events-none" />
            <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02] cursor-pointer" onClick={() => onOpenLightbox(SURI_DATA.assets.daisyCrown)}>
              <img
                src={SURI_DATA.assets.daisyCrown}
                alt="Suri Daisy Crown"
                className="max-h-[520px] lg:max-h-[580px] w-auto object-contain filter drop-shadow-[0_16px_32px_rgba(43,35,56,0.14)] rounded-3xl"
                loading="lazy"
                title="Nhấp để phóng to tranh Vòng Hoa Cúc"
              />
              <div className="text-center mt-3">
                <span className="text-[11px] font-display font-bold text-chocolate-500 bg-white/90 px-3 py-1 rounded-full border border-taro-200 shadow-xs">
                  🌼 Daisy Crown Special Visual
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

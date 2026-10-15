import React, { useState } from 'react';
import { Archive, HelpCircle, AlertCircle, FileSearch } from 'lucide-react';
import { LORE_ARCHIVES, LoreFile } from '../data/suriData';

export const LoreArchive: React.FC = () => {
  const [activeFileId, setActiveFileId] = useState<string>(LORE_ARCHIVES[0].fileId);
  const activeFile: LoreFile = LORE_ARCHIVES.find((f) => f.fileId === activeFileId) || LORE_ARCHIVES[0];

  return (
    <section id="archive" className="relative min-h-screen py-24 bg-[#08070C] border-t border-lavender-400/20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-plum-900/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-roseAccent-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-lavender-400/30 text-lavender-200 font-display text-xs tracking-widest uppercase shadow-lg shadow-plum-900/30">
            <Archive className="w-3.5 h-3.5 text-roseAccent-400" />
            <span>05 // HỒ SƠ NIÊM PHONG & BÍ ẨN CHƯA LỜI GIẢI // LORE ARCHIVE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-gothic tracking-wider text-ivory-100 uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            LORE <span className="text-roseAccent-400 text-glow-rose">ARCHIVE</span>
          </h2>
          <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-lavender-300 max-w-xl mx-auto uppercase">
            HỒ SƠ KHẢO CỨU DỮ LIỆU CỘNG ĐỒNG & NHỮNG CÂU HỎI NGỎ NƠI DỊ GIỚI
          </p>
        </div>

        {/* Editorial Notice Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-2xl bg-charcoal-900/90 border border-lavender-400/20 text-xs font-mono text-ivory-300 flex items-start space-x-3 shadow-lg">
          <AlertCircle size={18} className="text-roseAccent-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-lavender-200">NGUYÊN TẮC MINH BẠCH TƯ LIỆU:</strong> Toàn bộ các hồ sơ bên dưới được ghi nhận từ lời kể trong các buổi phát sóng trực tiếp và bản ghi cộng đồng (community wiki). Những chi tiết chưa có xác nhận văn bản chính thức từ creator được phân loại cẩn trọng để bảo toàn tính xác thực của câu chuyện.
          </p>
        </div>

        {/* Dossier Terminal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dossier Index Selector */}
          <div className="lg:col-span-4 space-y-3">
            <p className="font-display text-xs tracking-widest text-lavender-400 uppercase px-1">
              DANH MỤC HỒ SƠ // CASE DIRECTORY
            </p>

            <div className="space-y-3">
              {LORE_ARCHIVES.map((file) => {
                const isActive = file.fileId === activeFileId;
                return (
                  <button
                    key={file.fileId}
                    onClick={() => setActiveFileId(file.fileId)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-plum-800/90 border-roseAccent-500 shadow-[0_0_20px_rgba(157,83,105,0.4)] scale-102'
                        : 'bg-charcoal-900/70 border-lavender-400/15 hover:bg-charcoal-800 hover:border-lavender-400/35 text-ivory-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-bold text-roseAccent-400">
                        {file.fileId}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-charcoal-950 text-lavender-300 border border-lavender-400/20">
                        {file.status}
                      </span>
                    </div>
                    <h3 className="font-gothic text-base font-bold text-ivory-100">
                      {file.title}
                    </h3>
                    <p className="font-editorial text-sm text-ivory-400/80 line-clamp-2 mt-1">
                      {file.summary}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Declassified Document View */}
          <div className="lg:col-span-8 parchment-border bg-charcoal-900/90 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
            {/* Document Header */}
            <header className="border-b border-lavender-400/20 pb-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-roseAccent-400 font-bold uppercase tracking-wider">
                  <FileSearch size={15} />
                  <span>{activeFile.fileId} // {activeFile.code}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-plum-800 text-lavender-200 border border-lavender-400/30 uppercase">
                    {activeFile.classification}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-gothic text-ivory-100 tracking-wide">
                {activeFile.title}
              </h3>
              <p className="font-display text-xs text-lavender-300 tracking-widest uppercase">
                {activeFile.summary}
              </p>
            </header>

            {/* Document Body */}
            <div className="space-y-4 font-editorial text-base sm:text-lg text-ivory-300 leading-relaxed tracking-wide bg-charcoal-950/40 p-6 rounded-2xl border border-lavender-400/10">
              {activeFile.content.map((para, pIdx) => (
                <p key={pIdx}>
                  {para}
                </p>
              ))}
            </div>

            {/* Document Footer: Archival Stamp & Note */}
            <footer className="pt-4 border-t border-lavender-400/20 space-y-3">
              <div className="flex items-start space-x-2.5 text-xs font-mono text-lavender-300/90">
                <HelpCircle size={15} className="text-waterCyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-ivory-100 uppercase">GHI CHÚ ĐIỀU TRA: </strong>
                  {activeFile.investigativeNote}
                </span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-ivory-400/60 pt-2 border-t border-lavender-400/10">
                <span>STATUS: ARCHIVED WITH NO SPECULATION ADDED</span>
                <span>VERIFIED PROVENANCE</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

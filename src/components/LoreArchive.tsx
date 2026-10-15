import React, { useState } from 'react';
import { Archive, HelpCircle, AlertCircle, FileSearch, Sparkles, ShieldCheck } from 'lucide-react';
import { LORE_ARCHIVES, LoreFile } from '../data/suriData';

export const LoreArchive: React.FC = () => {
  const [activeFileId, setActiveFileId] = useState<string>(LORE_ARCHIVES[0].fileId);
  const activeFile: LoreFile = LORE_ARCHIVES.find((f) => f.fileId === activeFileId) || LORE_ARCHIVES[0];

  return (
    <section id="archive" className="relative min-h-screen py-24 bg-[#FAF7F2] border-t border-taro-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-taro-200/30 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-berry-200/25 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-pudding-200/30 blur-[130px] rounded-full pointer-events-none" />

      {/* Decorative Floating Emoticons */}
      <div className="absolute top-20 left-12 text-3xl opacity-75 pointer-events-none select-none animate-float-slow">
        📜
      </div>
      <div className="absolute bottom-28 right-12 text-3xl opacity-70 pointer-events-none select-none animate-float-soft">
        🔍
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs tracking-wider uppercase shadow-sm">
            <Archive className="w-4 h-4 text-berry-500" />
            <span>05 // SỔ TAY LƯU TRỮ // LORE ARCHIVE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-sm">
            LORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry-500 to-taro-500">ARCHIVE</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate-600 max-w-2xl mx-auto">
            Hồ sơ khảo cứu dữ liệu cộng đồng, bức thư bí ẩn ký tên "W" và những mảnh ghép huyền thoại còn bỏ ngỏ nơi thế giới Suri.
          </p>
        </div>

        {/* Editorial Notice Banner (Transparency & Fact Discipline) */}
        <div className="max-w-3xl mx-auto mb-10 p-4 sm:p-5 rounded-3xl bg-white/95 border-2 border-taro-200/80 text-xs sm:text-sm font-sans text-chocolate-700 flex items-start space-x-3.5 shadow-cafe">
          <div className="w-8 h-8 rounded-full bg-berry-100 flex items-center justify-center shrink-0 text-berry-600 mt-0.5">
            <AlertCircle size={18} />
          </div>
          <div className="space-y-1">
            <div className="font-bold text-chocolate-900 font-display uppercase tracking-wider text-xs">
              Nguyên Tắc Minh Bạch & Tôn Trọng Canon
            </div>
            <p className="leading-relaxed text-chocolate-600 text-xs">
              Toàn bộ các hồ sơ bên dưới được ghi nhận từ lời kể trong các buổi phát sóng trực tiếp và bản ghi cộng đồng (community wiki). Những chi tiết chưa có thông cáo chính thức từ creator (như mẩu giấy 'W' hay phong ấn 300 năm) được phân loại cẩn trọng để bảo toàn tính xác thực, không thêu dệt và không gán ép giả thuyết thành sự thật chính thức.
            </p>
          </div>
        </div>

        {/* Dossier Terminal / Secret Journal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dossier Index Selector */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between px-2 text-xs font-mono text-chocolate-500">
              <span className="font-bold uppercase tracking-wider">DANH MỤC HỒ SƠ LƯU TRỮ</span>
              <span className="text-[11px] bg-taro-100 text-taro-700 px-2 py-0.5 rounded-full font-bold">
                {LORE_ARCHIVES.length} Hồ sơ
              </span>
            </div>

            <div className="space-y-3">
              {LORE_ARCHIVES.map((file) => {
                const isActive = file.fileId === activeFileId;
                return (
                  <button
                    key={file.fileId}
                    onClick={() => setActiveFileId(file.fileId)}
                    className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 bubble-btn relative overflow-hidden ${
                      isActive
                        ? 'bg-white border-2 border-berry-400 shadow-cafe-lg scale-102 ring-2 ring-berry-200/50'
                        : 'bg-white/80 border-taro-200/70 hover:bg-white hover:border-taro-300 text-chocolate-700 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-berry-600 flex items-center space-x-1">
                        <Sparkles size={13} className="text-pudding-500" />
                        <span>{file.fileId}</span>
                      </span>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                        file.status === 'UNRESOLVED'
                          ? 'bg-pudding-100 text-pudding-800 border-pudding-300'
                          : 'bg-taro-100 text-taro-800 border-taro-300'
                      }`}>
                        {file.status}
                      </span>
                    </div>
                    <h3 className="font-kawaii text-base font-bold text-chocolate-900">
                      {file.title}
                    </h3>
                    <p className="font-sans text-xs text-chocolate-600 line-clamp-2 mt-1.5 leading-relaxed">
                      {file.summary}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Declassified Document View */}
          <div className="lg:col-span-8 cafe-card rounded-4xl p-6 sm:p-10 space-y-6 shadow-cafe-lg border border-taro-200/80 relative">
            {/* Washi tape sticker */}
            <div className="absolute -top-3 right-10 px-6 py-1 tape-sticker rounded-md text-[10px] font-mono text-chocolate-700 tracking-widest font-bold uppercase shadow-sm">
              ★ OFFICIAL DOSSIER ★
            </div>

            {/* Document Header */}
            <header className="border-b border-taro-200/80 pb-5 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-berry-600 font-bold uppercase tracking-wider">
                  <FileSearch size={16} />
                  <span>{activeFile.fileId} // MÃ SỐ: {activeFile.code}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-taro-100 text-taro-800 border border-taro-200 uppercase">
                    {activeFile.classification}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-kawaii font-extrabold text-chocolate-900 tracking-tight">
                {activeFile.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-chocolate-600 font-medium">
                {activeFile.summary}
              </p>
            </header>

            {/* Document Body (Comfortable Journal Reading) */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-chocolate-800 leading-relaxed bg-white/70 p-6 rounded-3xl border border-taro-200/60 shadow-inner">
              {activeFile.content.map((para, pIdx) => (
                <p key={pIdx}>
                  {para}
                </p>
              ))}
            </div>

            {/* Document Footer: Archival Stamp & Note */}
            <footer className="pt-4 border-t border-taro-200/80 space-y-3">
              <div className="flex items-start space-x-3 text-xs font-mono bg-cream-50 p-4 rounded-2xl border border-taro-100">
                <HelpCircle size={16} className="text-taro-600 shrink-0 mt-0.5" />
                <div className="text-chocolate-700 leading-relaxed">
                  <strong className="text-chocolate-900 uppercase font-bold mr-1">GHI CHÚ ĐIỀU TRA:</strong>
                  {activeFile.investigativeNote}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-chocolate-500 pt-2 border-t border-taro-100 gap-2">
                <span className="flex items-center space-x-1">
                  <ShieldCheck size={13} className="text-mint-600" />
                  <span>TÌNH TRẠNG: LƯU TRỮ VỚI TƯ LIỆU GỐC, KHÔNG THÊU DỆT</span>
                </span>
                <span className="font-bold text-berry-600">VERIFIED ARCHIVAL DATA</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

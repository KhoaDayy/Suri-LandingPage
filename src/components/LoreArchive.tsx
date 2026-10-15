import React, { useState } from 'react';
import { Archive, AlertCircle, FileSearch, ShieldCheck, Folder, FolderOpen, Bookmark } from 'lucide-react';
import { LORE_ARCHIVES, LoreFile } from '../data/suriData';

export const LoreArchive: React.FC = () => {
  const [activeFileId, setActiveFileId] = useState<string>(LORE_ARCHIVES[0].fileId);
  const activeFile: LoreFile = LORE_ARCHIVES.find((f) => f.fileId === activeFileId) || LORE_ARCHIVES[0];

  return (
    <section id="archive" className="relative py-28 bg-[#F6EFE5]/70 border-t border-taro-200/60 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-taro-200/30 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-berry-200/25 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
            <Archive className="w-4 h-4 text-berry-500" />
            <span>05 // KẸP HỒ SƠ MẬT // CLASSIFIED CASE DOSSIER</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
            SECRET <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry-500 to-taro-500">LORE DOSSIER</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate-600 max-w-2xl mx-auto">
            Hồ sơ khảo cứu dữ liệu cộng đồng, mẩu giấy bí ẩn ký tên "W" và những huyền tích chưa có lời giải chính thức.
          </p>
        </div>

        {/* Rigorous Provenance Alert Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-5 rounded-3xl bg-white border-2 border-taro-200 text-xs sm:text-sm font-sans text-chocolate-700 flex items-start space-x-3.5 shadow-cafe">
          <div className="w-9 h-9 rounded-2xl bg-berry-100 flex items-center justify-center shrink-0 text-berry-600 mt-0.5">
            <AlertCircle size={18} />
          </div>
          <div className="space-y-1">
            <div className="font-bold text-chocolate-900 font-display uppercase tracking-wider text-xs flex items-center space-x-2">
              <span>Cam Kết Minh Bạch & Tôn Trọng Canon</span>
              <span className="text-berry-500">✦</span>
              <span className="text-mint-600 font-mono text-[10px]">VERIFIED PROVENANCE</span>
            </div>
            <p className="leading-relaxed text-chocolate-600 text-xs">
              Các chi tiết trong mục này (như mẩu giấy 'W' hay phong ấn 300 năm) được ghi nhận từ stream lore và cộng đồng người hâm mộ nhưng chưa có văn bản công bố chính thức. Chúng tôi phân loại nghiêm túc theo từng cấp độ và tuyệt đối không sáng tác lore giả mạo.
            </p>
          </div>
        </div>

        {/* Tabbed Manila Dossier Folder Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Top Folder Tabs */}
          <div className="flex flex-wrap items-end gap-2 sm:gap-3 px-4 sm:px-8 -mb-1 z-20 relative">
            {LORE_ARCHIVES.map((file) => {
              const isActive = file.fileId === activeFileId;
              return (
                <button
                  key={file.fileId}
                  onClick={() => setActiveFileId(file.fileId)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-t-3xl font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 border-t-2 border-x-2 bubble-btn ${
                    isActive
                      ? 'bg-white text-chocolate-900 border-taro-300 shadow-md -translate-y-1 z-30'
                      : 'bg-cream-100 text-chocolate-600 border-taro-200/80 hover:bg-white hover:text-chocolate-900'
                  }`}
                >
                  {isActive ? (
                    <FolderOpen size={16} className="text-berry-500" />
                  ) : (
                    <Folder size={16} className="text-taro-500" />
                  )}
                  <span>{file.fileId}</span>
                  <span className="hidden sm:inline font-mono text-[10px] text-chocolate-500">
                    ({file.status})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dossier Document Paper Inside Folder */}
          <div className="bg-white rounded-5xl border-4 border-taro-200/80 shadow-2xl p-6 sm:p-10 lg:p-12 space-y-6 relative overflow-hidden">
            {/* Red Wax Seal / Stamp in Top Right */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-dashed border-red-300/60 bg-red-50/40 rotate-12 flex flex-col items-center justify-center p-2 text-center pointer-events-none select-none">
              <span className="text-[9px] font-mono font-bold text-red-500 uppercase tracking-widest">DOSSIER</span>
              <span className="text-xs font-kawaii font-extrabold text-red-600 uppercase">{activeFile.status}</span>
              <span className="text-[8px] font-mono text-red-400">OFFICIAL ARCHIVE</span>
            </div>

            {/* Document Header */}
            <header className="border-b-2 border-taro-100 pb-5 space-y-2.5 pr-20">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-taro-100 text-taro-800 font-bold flex items-center space-x-1.5">
                  <FileSearch size={14} className="text-berry-500" />
                  <span>MÃ SỐ: {activeFile.code}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-cream-100 text-chocolate-700 font-bold border border-taro-200 uppercase">
                  {activeFile.classification}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-kawaii font-extrabold text-chocolate-900">
                {activeFile.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-chocolate-600 font-medium">
                {activeFile.summary}
              </p>
            </header>

            {/* Document Body (Typewriter / Manila Paper Look) */}
            <div className="space-y-4 font-story text-sm sm:text-base text-chocolate-800 leading-relaxed bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-taro-200/70 shadow-inner">
              {activeFile.content.map((para, pIdx) => (
                <p key={pIdx}>
                  {para}
                </p>
              ))}
            </div>

            {/* Document Footer: Investigation Notes & Provenance Guarantee */}
            <footer className="pt-4 border-t-2 border-taro-100 space-y-3">
              <div className="p-4 rounded-2xl bg-cream-100/80 border border-pudding-200/80 flex items-start space-x-3 text-xs font-mono text-chocolate-700">
                <Bookmark size={16} className="text-berry-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-chocolate-900 uppercase font-bold mr-1">GHI CHÚ ĐIỀU TRA:</strong>
                  {activeFile.investigativeNote}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-chocolate-500 pt-2 gap-2">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck size={14} className="text-mint-600" />
                  <span>DỮ LIỆU ĐƯỢC BẢO TOÀN NGUYÊN BẢN • KHÔNG THÊU DỆT TÌNH TIẾT</span>
                </span>
                <span className="font-bold text-taro-700">SURI MUKEKI LORE REPOSITORY</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ZoomIn, Sparkles, Bookmark } from 'lucide-react';
import { STORY_CHAPTERS, StoryChapter } from '../data/suriData';

interface StoryRecordProps {
  onOpenIllustration: (imgUrl: string) => void;
}

export const StoryRecord: React.FC<StoryRecordProps> = ({ onOpenIllustration }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const chapter: StoryChapter = STORY_CHAPTERS[activeChapterIndex];

  const handlePrev = () => {
    setActiveChapterIndex((prev) => (prev > 0 ? prev - 1 : STORY_CHAPTERS.length - 1));
  };

  const handleNext = () => {
    setActiveChapterIndex((prev) => (prev < STORY_CHAPTERS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="story" className="relative py-28 bg-[#FAF5EE] border-t border-taro-200/60 overflow-hidden">
      {/* Background Ambient Blobs */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-berry-200/20 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-taro-200/30 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
            <Bookmark className="w-3.5 h-3.5 text-berry-500" />
            <span>02 // SÁCH TRUYỆN TRANH DỊ GIỚI // DUAL-PAGE STORYBOOK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
            CHRONICLES <span className="text-berry-500">STORYBOOK</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate-600 max-w-2xl mx-auto">
            Lật từng trang bản thảo ghi lại câu chuyện từ bé slime cô độc đến khi xây dựng tổ ấm hạnh phúc cùng cộng đồng Sureiya.
          </p>
        </div>

        {/* Floating Bookmark Ribbons at the Top of the Book */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 z-20 relative">
          {STORY_CHAPTERS.map((chap, idx) => {
            const isActive = idx === activeChapterIndex;
            return (
              <button
                key={chap.chapterNumber}
                onClick={() => setActiveChapterIndex(idx)}
                className={`relative px-5 py-2.5 rounded-t-2xl font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 bubble-btn border-t-2 border-x-2 ${
                  isActive
                    ? 'bg-white text-berry-600 border-berry-300 shadow-md -translate-y-1'
                    : 'bg-cream-100/90 text-chocolate-600 border-taro-200/60 hover:bg-white hover:text-chocolate-900'
                }`}
              >
                <span className="mr-1.5">{chap.chapterNumber}</span>
                <span className="hidden sm:inline">• {chap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dual-Page Open Book Container */}
        <div className="relative bg-white rounded-5xl border-4 border-taro-200 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12">
          {/* Central Book Spine Shadow (Visible on desktop) */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/5 via-black/10 to-transparent pointer-events-none z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* LEFT SPREAD: Manuscript Illustration Page (Col span 5) */}
            <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
              {/* Top Page Header */}
              <div className="flex items-center justify-between border-b border-taro-100 pb-3">
                <span className="font-display text-xs font-bold text-berry-600 uppercase flex items-center space-x-1.5">
                  <Sparkles size={14} className="text-pudding-500" />
                  <span>TRANH MINH HỌA {chapter.chapterNumber}</span>
                </span>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cream-100 text-chocolate-600 border border-taro-200">
                  {chapter.provenance === 'CONFIRMED' ? 'XÁC THỰC CHÍNH THỨC' : 'TƯ LIỆU LORE GHI NHẬN'}
                </span>
              </div>

              {/* Classical Frame with Hover Zoom */}
              <div
                className="group relative rounded-3xl overflow-hidden bg-[#FAF7F2] border-2 border-taro-200/80 aspect-[4/5] flex items-center justify-center cursor-pointer shadow-inner"
                onClick={() => onOpenIllustration(chapter.illustration)}
                title="Nhấp để phóng to toàn màn hình"
              >
                <img
                  src={chapter.illustration}
                  alt={chapter.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-chocolate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-white/95 text-chocolate-900 font-display text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-xl">
                    <ZoomIn size={14} className="text-berry-500" />
                    <span>PHÓNG TO TRANH</span>
                  </span>
                </div>
              </div>

              {/* Source Verification Note */}
              <div className="p-3.5 rounded-2xl bg-cream-50 border border-taro-100 space-y-1">
                <p className="font-story text-xs text-chocolate-600 italic">
                  {chapter.footerNote}
                </p>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-taro-700 font-bold">
                  <CheckCircle2 size={13} className="text-mint-600" />
                  <span>Xác minh từ livestream lưu trữ & creator archives</span>
                </div>
              </div>
            </div>

            {/* RIGHT SPREAD: Manuscript Prose & Narrative (Col span 7) */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                {/* Chapter Title & Subtitle */}
                <div className="space-y-1.5 border-b border-taro-100 pb-4">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-taro-600">
                    <span className="uppercase tracking-widest">{chapter.chapterNumber}</span>
                    <span>TRANG 0{activeChapterIndex + 1} / 0{STORY_CHAPTERS.length}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-kawaii font-extrabold text-chocolate-900 leading-snug">
                    {chapter.title}
                  </h3>
                  <p className="text-xs font-display font-bold text-chocolate-500 tracking-wider">
                    {chapter.subtitle}
                  </p>
                </div>

                {/* Lead Quote in Styled Blockquote */}
                <div className="p-4 sm:p-5 rounded-3xl bg-pudding-50/80 border-l-4 border-pudding-400 font-story text-sm sm:text-base text-chocolate-800 leading-relaxed italic shadow-xs">
                  {chapter.leadQuote}
                </div>

                {/* Paragraphs with Fluid Formatting */}
                <div className="space-y-4 font-story text-sm sm:text-base text-chocolate-800 leading-relaxed">
                  {chapter.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Page Flipping Bottom Navigation */}
              <div className="pt-6 border-t border-taro-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div className="text-xs font-display text-chocolate-500">
                  <span>TẬP TIẾP THEO: </span>
                  <span className="font-bold text-berry-600">
                    {STORY_CHAPTERS[(activeChapterIndex + 1) % STORY_CHAPTERS.length].title}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePrev}
                    className="px-4 py-2 rounded-2xl bg-cream-100 hover:bg-taro-100 text-chocolate-800 font-display text-xs font-bold uppercase transition flex items-center space-x-1.5 bubble-btn border border-taro-200"
                    aria-label="Lật về tập trước"
                  >
                    <ChevronLeft size={16} />
                    <span>TẬP TRƯỚC</span>
                  </button>

                  <span className="font-mono text-xs font-bold text-taro-700 px-2">
                    0{activeChapterIndex + 1} / 0{STORY_CHAPTERS.length}
                  </span>

                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-2xl bg-cream-100 hover:bg-taro-100 text-chocolate-800 font-display text-xs font-bold uppercase transition flex items-center space-x-1.5 bubble-btn border border-taro-200"
                    aria-label="Lật sang tập kế tiếp"
                  >
                    <span>TẬP KẾ TIẾP</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

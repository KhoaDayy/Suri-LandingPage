import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, CheckCircle2, ZoomIn, Sparkles } from 'lucide-react';
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
    <section id="story" className="relative min-h-screen py-24 bg-[#FAF5EE] border-t border-taro-200/60 overflow-hidden">
      {/* Background Ambient Blobs */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-berry-200/20 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-taro-200/30 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-berry-500" />
            <span>02 // QUYỂN TRUYỆN TRANH DỊ GIỚI // STORY BOOK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
            STORY <span className="text-berry-500">BOOK</span>
          </h2>
          <p className="font-display text-xs sm:text-sm font-bold tracking-widest text-chocolate-500 max-w-xl mx-auto uppercase">
            HÀNH TRÌNH TỪ BÉ SLIME ĐƠN ĐỘC ĐẾN MÁI NHÀ CỦA CỘNG ĐỒNG SUREIYA
          </p>
        </div>

        {/* Chapter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {STORY_CHAPTERS.map((chap, idx) => {
            const isActive = idx === activeChapterIndex;
            return (
              <button
                key={chap.chapterNumber}
                onClick={() => setActiveChapterIndex(idx)}
                className={`px-5 py-2.5 rounded-full font-display text-xs font-bold tracking-wider uppercase border transition-all duration-300 bubble-btn ${
                  isActive
                    ? 'bg-gradient-to-r from-taro-500 to-berry-400 text-white border-transparent shadow-md scale-105'
                    : 'bg-white border-taro-200 text-chocolate-700 hover:border-taro-400'
                }`}
              >
                <span>{chap.chapterNumber}: </span>
                <span>{chap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Story Book Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Illustration Polaroid Card */}
          <div className="lg:col-span-5 flex flex-col justify-between cafe-card rounded-5xl p-6 sm:p-8 border-2 border-taro-200/70 shadow-cafe">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-taro-100 pb-3">
                <span className="font-display text-xs font-bold text-berry-600 uppercase flex items-center space-x-1.5">
                  <Sparkles size={14} />
                  <span>TRANH MINH HỌA {chapter.chapterNumber}</span>
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cream-200 text-chocolate-600 font-bold border border-taro-200">
                  {chapter.provenance === 'CONFIRMED' ? 'XÁC THỰC CHÍNH THỨC' : 'TƯ LIỆU LORE GHI NHẬN'}
                </span>
              </div>

              {/* Illustration Frame */}
              <div
                className="group relative rounded-3xl overflow-hidden bg-white border-2 border-taro-200 aspect-[4/5] flex items-center justify-center cursor-pointer shadow-sm bubble-btn"
                onClick={() => onOpenIllustration(chapter.illustration)}
                title="Nhấp để phóng to tranh minh họa"
              >
                <img
                  src={chapter.illustration}
                  alt={chapter.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
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

            <div className="pt-4 border-t border-taro-100 mt-4 space-y-1.5">
              <p className="font-story text-xs font-bold text-chocolate-600 italic">
                {chapter.footerNote}
              </p>
              <div className="flex items-center space-x-1.5 text-[11px] font-display text-taro-600 font-semibold">
                <CheckCircle2 size={13} className="text-mint-500" />
                <span>Nguồn: Livestream lưu trữ & Tài liệu creator</span>
              </div>
            </div>
          </div>

          {/* Right: Storybook Text Page */}
          <article className="lg:col-span-7 cafe-card rounded-5xl p-6 sm:p-10 flex flex-col justify-between border-2 border-taro-200/70 shadow-cafe">
            <div className="space-y-6">
              {/* Header */}
              <header className="space-y-1.5 border-b border-taro-100 pb-4">
                <div className="flex items-center justify-between text-xs font-display font-bold text-taro-600 uppercase">
                  <span>TRANG TRUYỆN 0{activeChapterIndex + 1} / 0{STORY_CHAPTERS.length}</span>
                  <span className="text-berry-500">SURI MUKEKI STORYBOOK</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-kawaii font-bold text-chocolate-900">
                  {chapter.title}
                </h3>
                <p className="font-display text-xs font-bold text-chocolate-500">
                  {chapter.subtitle}
                </p>
              </header>

              {/* Lead Quote */}
              <div className="p-4 sm:p-5 rounded-3xl bg-pudding-100/70 border-l-4 border-pudding-400 font-story text-sm sm:text-base text-chocolate-800 leading-relaxed shadow-xs">
                {chapter.leadQuote}
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 font-story text-sm sm:text-base text-chocolate-700 leading-relaxed">
                {chapter.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Footer Navigation */}
            <footer className="pt-6 border-t border-taro-100 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-display font-bold text-chocolate-500">
                <span>TẬP TIẾP THEO: </span>
                <span className="text-taro-700 font-extrabold">
                  {STORY_CHAPTERS[(activeChapterIndex + 1) % STORY_CHAPTERS.length].title}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-2xl bg-white border border-taro-200 text-chocolate-700 hover:text-taro-700 shadow-xs bubble-btn"
                  aria-label="Tập trước"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="font-mono text-xs font-bold text-taro-700 px-2">
                  0{activeChapterIndex + 1} / 0{STORY_CHAPTERS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-2xl bg-white border border-taro-200 text-chocolate-700 hover:text-taro-700 shadow-xs bubble-btn"
                  aria-label="Tập tiếp theo"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};

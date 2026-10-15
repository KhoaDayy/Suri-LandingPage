import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, ShieldCheck, ZoomIn, FileText } from 'lucide-react';
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
    <section id="story" className="relative min-h-screen py-24 bg-[#09070D] border-t border-lavender-400/20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-plum-800/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-waterCyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-lavender-400/30 text-lavender-200 font-display text-xs tracking-widest uppercase shadow-lg shadow-plum-900/30">
            <BookOpen className="w-3.5 h-3.5 text-roseAccent-400" />
            <span>02 // BIÊN NIÊN SỬ LORE // STORY RECORD</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-gothic tracking-wider text-ivory-100 uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            STORY <span className="text-roseAccent-400 text-glow-rose">RECORD</span>
          </h2>
          <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-lavender-300 max-w-xl mx-auto uppercase">
            BIÊN NIÊN SỬ VỀ GIỌT NƯỚC TÁI SINH VÀ SẤM SÉT KẾT NỐI CÕI TRẦN
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
                className={`px-5 py-2.5 rounded-full font-display text-xs tracking-widest uppercase border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-roseAccent-500 via-plum-700 to-lavender-500 text-white border-lavender-300 shadow-[0_0_20px_rgba(157,83,105,0.4)] scale-105'
                    : 'bg-charcoal-800/80 border-lavender-400/20 text-ivory-300 hover:text-white hover:border-lavender-400/50'
                }`}
              >
                <span>{chap.chapterNumber}: </span>
                <span className="font-bold">{chap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Story Layout: Manuscript + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Portrait & Visual Archival Tag */}
          <div className="lg:col-span-5 flex flex-col justify-between parchment-border bg-charcoal-900/80 rounded-3xl p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-lavender-400/20 pb-3">
                <span className="font-mono text-xs text-roseAccent-400 font-bold uppercase tracking-wider flex items-center space-x-1.5">
                  <FileText size={14} />
                  <span>{chapter.chapterNumber} ARCHIVE</span>
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-plum-800 text-lavender-200 border border-lavender-400/30">
                  {chapter.provenance === 'CONFIRMED' ? 'CHÍNH THỨC XÁC THỰC' : 'TƯ LIỆU LORE GHI NHẬN'}
                </span>
              </div>

              {/* Character Illustration Frame */}
              <div
                className="group relative rounded-2xl overflow-hidden border border-lavender-400/30 bg-charcoal-950 aspect-[4/5] flex items-center justify-center cursor-pointer shadow-2xl"
                onClick={() => onOpenIllustration(chapter.characterIllustration)}
                title="Nhấp để phóng to tranh minh họa"
              >
                <img
                  src={chapter.characterIllustration}
                  alt={chapter.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-plum-800/90 border border-roseAccent-400/60 text-white font-mono text-[11px] tracking-wider uppercase flex items-center space-x-1.5 shadow-xl backdrop-blur-sm">
                    <ZoomIn size={14} className="text-roseAccent-400" />
                    <span>PHÓNG TO TRANH</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-lavender-400/20 mt-4 space-y-2">
              <p className="font-editorial text-sm italic text-ivory-300">
                {chapter.footerNote}
              </p>
              <div className="flex items-center space-x-2 text-[11px] font-mono text-lavender-400">
                <ShieldCheck size={13} className="text-waterCyan-400" />
                <span>Nguồn: Livestream lưu trữ & Tài liệu creator</span>
              </div>
            </div>
          </div>

          {/* Right Column: Manuscript Article */}
          <article className="lg:col-span-7 parchment-border bg-charcoal-900/90 rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Manuscript Header */}
              <header className="space-y-2 border-b border-lavender-400/20 pb-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-lavender-400 uppercase">
                    CHƯƠNG {activeChapterIndex + 1} / 03
                  </span>
                  <span className="text-xs font-display tracking-widest text-roseAccent-400 uppercase font-bold">
                    SURI MUKEKI CHRONICLES
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-gothic text-ivory-100 tracking-wide">
                  {chapter.title}
                </h3>
                <p className="font-display text-xs tracking-widest text-lavender-300 uppercase">
                  {chapter.subtitle}
                </p>
              </header>

              {/* Lead Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-plum-900/60 border-l-4 border-roseAccent-500 font-editorial text-base sm:text-lg italic text-ivory-200 leading-relaxed shadow-inner">
                {chapter.leadQuote}
              </div>

              {/* Narrative Prose */}
              <div className="space-y-4 font-editorial text-base sm:text-lg text-ivory-300/90 leading-relaxed tracking-wide">
                {chapter.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="first-letter:text-2xl first-letter:font-bold first-letter:text-roseAccent-400">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Manuscript Footer & Chapter Navigation */}
            <footer className="pt-8 border-t border-lavender-400/20 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-display tracking-widest text-lavender-400 uppercase">
                <span>CHƯƠNG TIẾP THEO: </span>
                <span className="text-ivory-200 font-bold">
                  {STORY_CHAPTERS[(activeChapterIndex + 1) % STORY_CHAPTERS.length].title}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/30 text-ivory-300 hover:text-white transition"
                  aria-label="Chương trước"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="font-mono text-xs text-lavender-300 font-bold px-2">
                  0{activeChapterIndex + 1} / 0{STORY_CHAPTERS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/30 text-ivory-300 hover:text-white transition"
                  aria-label="Chương tiếp theo"
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

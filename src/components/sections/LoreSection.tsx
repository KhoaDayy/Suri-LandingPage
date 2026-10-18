import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets,
  Zap,
  ChevronDown,
  Maximize2,
  Compass,
} from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidBadge } from '../ui/LiquidBadge';
import { ScrollReveal } from '../ui/ScrollReveal';
import { WaterParticles } from '../ui/WaterParticles';
import { FloatingSlimeBubbles } from '../effects/FloatingSlimeBubbles';
import { ImageLightboxModal } from '../ui/ImageLightboxModal';
import {
  LORE_PERSONAS,
  LORE_CHAPTERS,
  LorePersonaConfig,
  LoreChapterItem,
} from '../../data/suriData';

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/**
 * Persona Dossier Card: Clean 2-column layout representing either Suri or Irus
 */
const PersonaDossierCard: React.FC<{ persona: LorePersonaConfig }> = ({ persona }) => {
  return (
    <motion.div
      key={`persona-${persona.id}`}
      role="tabpanel"
      id={persona.tabId}
      aria-labelledby={persona.tabLabelId}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10"
    >
      {/* Left Column: Focused High-Res Portrait */}
      <div className="lg:col-span-5 flex flex-col items-center">
        <div
          className={`w-full max-w-[320px] sm:max-w-[350px] relative rounded-2xl overflow-hidden bg-gradient-to-b ${persona.frameGradient} shadow-md group`}
        >
          <img
            src={persona.portraitSrc}
            alt={persona.portraitAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-h-[460px] object-cover drop-shadow-md select-none group-hover:scale-[1.02] transition-transform duration-300 ease-out"
          />
          <div
            className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#1B1D21]/90 backdrop-blur-sm border font-mono text-[11px] font-semibold ${persona.elementBadgeClass}`}
          >
            {persona.elementType === 'water' ? (
              <Droplets size={12} />
            ) : (
              <Zap size={12} />
            )}
            <span>{persona.elementBadgeLabel}</span>
          </div>
        </div>
      </div>

      {/* Right Column: Balanced 2-Column Info Structure */}
      <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
        {/* Header Identity */}
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#315D9C] dark:text-[#79ACE0] uppercase block mb-1">
            {persona.categoryTag}
          </span>
          <h4 className="font-display text-2xl sm:text-3xl font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
            {persona.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm font-medium text-[#315D9C] dark:text-[#79ACE0] mt-0.5">
            {persona.subtitle}
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#292D3A]/70 dark:text-[#A1A6B3] mt-2 leading-relaxed">
            {persona.bio}
            <span className="block mt-1 font-mono text-xs text-[#292D3A]/60 dark:text-[#7A808E]">
              {persona.nicknames}
            </span>
          </p>
        </div>

        {/* 8-Item Quick Specs Grid */}
        <div className="p-4 rounded-2xl bg-[#FAFAF7] dark:bg-[#141517] border border-[#292D3A]/8 dark:border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3">
          {persona.specs.map((item, idx) => (
            <div key={idx}>
              <span className="font-sans text-[10px] text-[#292D3A]/60 dark:text-[#7A808E] font-medium block uppercase tracking-wider">
                {item.label}
              </span>
              <span
                className={`font-sans text-xs sm:text-sm font-semibold ${
                  item.valueClass || 'text-[#292D3A] dark:text-[#ECEBE6]'
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Trivia Rows */}
        <div className="space-y-2.5 text-xs sm:text-sm font-sans" data-dossier="character-trivia">
          {persona.trivia.map((t, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFAF7] dark:bg-[#141517] border border-[#292D3A]/6 dark:border-white/[0.04]"
            >
              {t.iconImage && (
                <img
                  src={t.iconImage}
                  alt={t.title}
                  className="w-4 h-4 object-contain shrink-0 mt-0.5"
                />
              )}
              <p className="text-[#292D3A]/85 dark:text-[#CBD0DC] leading-relaxed">
                <strong className="text-[#292D3A] dark:text-[#ECEBE6]">{t.title}:</strong> {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Expandable Details */}
        <details className="group pt-1">
          <summary className="cursor-pointer font-sans text-xs font-semibold text-[#315D9C] dark:text-[#79ACE0] hover:text-[#254677] dark:hover:text-[#9EC5EB] transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315D9C] rounded py-1 select-none">
            <span>Chi tiết hồ sơ mở rộng & thông tin liên quan</span>
            <ChevronDown size={14} className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="mt-3 pt-3 border-t border-[#292D3A]/10 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#292D3A]/80 dark:text-[#A1A6B3]">
            {persona.details.map((d, idx) => (
              <div key={idx} className={d.colSpan2 ? 'sm:col-span-2' : ''}>
                <span className="font-sans text-[10px] text-[#292D3A]/60 dark:text-[#7A808E] font-medium block uppercase tracking-wider">
                  {d.label}
                </span>
                <span
                  className={`font-sans text-xs font-semibold ${
                    d.valueClass || 'text-[#292D3A] dark:text-[#ECEBE6]'
                  }`}
                >
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </motion.div>
  );
};

/**
 * Editorial Chronicle Chapter Card
 */
const ChronicleChapterCard: React.FC<{
  chapter: LoreChapterItem;
  onZoom: (data: { src: string; title: string; desc: string }) => void;
}> = ({ chapter, onZoom }) => {
  return (
    <article id={chapter.id} className="relative scroll-mt-32 space-y-5 group">
      {/* Timeline Node Indicator on the rail */}
      <div className="absolute -left-[23px] sm:-left-[39px] top-1.5 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-white dark:bg-[#141517] border-4 border-[#315D9C] dark:border-[#79ACE0] shadow-xs group-hover:scale-125 transition-transform duration-200" />
      </div>

      {/* Chapter Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded-md bg-[#315D9C]/10 dark:bg-[#79ACE0]/15 text-[#315D9C] dark:text-[#79ACE0] font-mono text-xs font-bold uppercase tracking-wider">
            {chapter.chapterNumber}
          </span>
          <span className="text-xs sm:text-sm font-mono font-semibold text-[#292D3A]/60 dark:text-[#7A808E]">
            {chapter.period}
          </span>
        </div>
      </div>

      <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-[#292D3A] dark:text-[#ECEBE6] group-hover:text-[#315D9C] dark:group-hover:text-[#79ACE0] transition-colors duration-200">
        {chapter.title}
      </h4>

      {/* Editorial Card */}
      <div className="bg-white dark:bg-[#1B1D21] border border-[#292D3A]/10 dark:border-white/[0.08] rounded-3xl overflow-hidden shadow-xs hover:border-[#315D9C]/40 dark:hover:border-[#79ACE0]/30 hover:shadow-sm transition-all duration-200">
        {/* Chapter Image with Lightbox Zoom Trigger */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-900 group/img">
          <img
            src={chapter.image}
            alt={chapter.imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover/img:scale-[1.02] transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <button
            type="button"
            onClick={() =>
              onZoom({
                src: chapter.image,
                title: `${chapter.chapterNumber} • ${chapter.title}`,
                desc: `Tư liệu hình ảnh lịch sử giai đoạn ${chapter.period}`,
              })
            }
            aria-label={`Phóng to ảnh ${chapter.title}`}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-[#315D9C] text-white backdrop-blur-md text-xs font-sans font-medium transition-colors duration-180 cursor-pointer shadow-md"
          >
            <Maximize2 size={13} />
            <span>Xem ảnh gốc</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-5">
          {chapter.quote && (
            <div className="p-4 bg-[#FAF7EE] dark:bg-[#1E1C18] rounded-2xl border border-[#C9A95C]/35 dark:border-[#D4B86A]/25">
              <p className="font-sans italic text-xs sm:text-sm text-[#292D3A] dark:text-[#ECEBE6] font-normal leading-relaxed">
                "{chapter.quote.text}"
              </p>
              <span className="font-sans text-[10px] text-[#C9A95C] dark:text-[#D4B86A] font-semibold tracking-wider block mt-1.5 uppercase">
                {chapter.quote.source}
              </span>
            </div>
          )}

          <div className="space-y-4 text-xs sm:text-sm font-sans text-[#292D3A]/85 dark:text-[#CBD0DC] leading-relaxed">
            {chapter.paragraphs.map((p, pIdx) => (
              <div key={pIdx} className="space-y-1">
                <span className="font-semibold text-sm sm:text-base text-[#292D3A] dark:text-[#ECEBE6] block">
                  {p.heading}
                </span>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const LoreSection: React.FC = () => {
  const [activePersona, setActivePersona] = useState<'suri' | 'irus'>('suri');
  const [activeChapterTab, setActiveChapterTab] = useState<string>('chapter-1');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const isSuri = activePersona === 'suri';

  const scrollToChapter = (chapterId: string) => {
    setActiveChapterTab(chapterId);
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="lore"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#FAFAF7] dark:bg-[#141517] text-[#1E232F] dark:text-[#ECEBE6] overflow-hidden transition-colors duration-300"
    >
      {/* Background Motifs & Atmospheric Particles */}
      <div className="absolute inset-0 bg-celestial-wave opacity-25 dark:opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-water-ripple opacity-15 dark:opacity-10 pointer-events-none" />
      <WaterParticles count={10} palette="water" />
      <FloatingSlimeBubbles count={7} variant="mixed" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20 sm:space-y-28">
        {/* =====================================================================
            SECTION HEADER
           ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3 pb-6 border-b border-[#292D3A]/10 dark:border-white/[0.08]"
        >
          <div className="flex items-center gap-2">
            <LiquidBadge text="LORE ARCHIVE // HỒ SƠ & BIÊN NIÊN SỬ" variant="cyan" live />
          </div>

          <BlurText
            text="Hồ sơ nhân vật & Biên niên sử thế giới quan"
            as="h2"
            align="left"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#292D3A] dark:text-[#ECEBE6] tracking-tight"
          />

          <p className="font-sans text-sm sm:text-base text-[#292D3A]/75 dark:text-[#A1A6B3] max-w-3xl leading-relaxed pt-1">
            Hơn 5 năm đồng hành cùng cộng đồng Slayers: từ tiền kiếp Irus bị phong ấn, những ngày shipper bươn chải của Suwi, cho đến tiệm cafe 3D ấm cúng của Suri.
          </p>
        </motion.div>

        {/* =====================================================================
            TẦNG 1: HỒ SƠ BẢN NGÃ & THIẾT LẬP NHÂN VẬT (CHARACTER DOSSIER)
           ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {/* Header & Persona Tabs Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Compass size={15} className="text-[#315D9C] dark:text-[#79ACE0]" />
                <span className="text-xs font-mono font-semibold text-[#315D9C] dark:text-[#79ACE0] uppercase tracking-wider">
                  Thiết lập nhân vật
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
                Hồ sơ bản ngã & Thiết lập nhân vật
              </h3>
            </div>

            {/* Persona Switcher Tabs */}
            <div
              role="tablist"
              aria-label="Chọn bản thể nhân vật"
              className="flex items-center p-1 rounded-full bg-white dark:bg-[#1B1D21] border border-[#292D3A]/15 dark:border-white/[0.08] shadow-xs self-start sm:self-auto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={isSuri}
                aria-controls="persona-panel-suri"
                id="persona-tab-suri"
                onClick={() => setActivePersona('suri')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315D9C] dark:focus-visible:ring-[#79ACE0] ${
                  isSuri
                    ? 'bg-[#315D9C] text-white shadow-xs dark:bg-[#2A5288]'
                    : 'text-[#292D3A]/70 dark:text-[#A1A6B3] hover:text-[#315D9C] dark:hover:text-[#79ACE0]'
                }`}
              >
                <Droplets size={14} className={isSuri ? 'text-sky-200' : 'text-[#315D9C] dark:text-[#79ACE0]'} aria-hidden="true" />
                <span>Suri (Slime Nước)</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={!isSuri}
                aria-controls="persona-panel-irus"
                id="persona-tab-irus"
                onClick={() => setActivePersona('irus')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7660A7] dark:focus-visible:ring-[#A593D1] ${
                  !isSuri
                    ? 'bg-[#7660A7] text-white shadow-xs dark:bg-[#584482]'
                    : 'text-[#292D3A]/70 dark:text-[#A1A6B3] hover:text-[#7660A7] dark:hover:text-[#A593D1]'
                }`}
              >
                <Zap size={14} className={!isSuri ? 'text-amber-200' : 'text-[#7660A7] dark:text-[#A593D1]'} aria-hidden="true" />
                <span>Irus (Slime Sấm Sét)</span>
              </button>
            </div>
          </div>

          {/* Dossier Card Container */}
          <div className="bg-white dark:bg-[#1B1D21] border border-[#292D3A]/10 dark:border-white/[0.08] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden transition-all duration-300">
            {/* Ambient Persona Glow */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-500 opacity-20 dark:opacity-15 ${
                LORE_PERSONAS[activePersona].glowColor
              }`}
            />

            <AnimatePresence mode="wait">
              <PersonaDossierCard key={activePersona} persona={LORE_PERSONAS[activePersona]} />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* =====================================================================
            TẦNG 2: BIÊN NIÊN SỬ CỐT TRUYỆN DẠNG NHẬT KÝ (CHRONICLE LOG)
           ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Chronicle Section Header */}
          <div className="space-y-2 border-b border-[#292D3A]/10 dark:border-white/[0.08] pb-4">
            <span className="text-xs font-mono font-semibold text-[#315D9C] dark:text-[#79ACE0] uppercase tracking-wider block">
              Dòng thời gian
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
              Biên niên sử phát triển & Cột mốc lịch sử
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#292D3A]/70 dark:text-[#A1A6B3]">
              Bốn chương hành trình ghi lại sự biến chuyển của Suri Mukeki từ khởi nguyên đến nay.
            </p>
          </div>

          {/* Quick-jump Year Navigation */}
          <div className="sticky top-20 z-20 py-2.5 px-3 rounded-2xl bg-[#FAFAF7]/90 dark:bg-[#141517]/90 backdrop-blur-md border border-[#292D3A]/10 dark:border-white/[0.08] shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono font-semibold uppercase text-[#292D3A]/60 dark:text-[#7A808E] shrink-0 pl-1 mr-1 hidden sm:inline">
              Nhảy nhanh:
            </span>
            {LORE_CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => scrollToChapter(ch.id)}
                className={`px-3 py-1.5 rounded-xl font-sans text-xs font-semibold whitespace-nowrap transition-all duration-180 cursor-pointer flex items-center gap-1.5 ${
                  activeChapterTab === ch.id
                    ? 'bg-[#315D9C] text-white shadow-xs dark:bg-[#2A5288]'
                    : 'bg-white dark:bg-[#1B1D21] text-[#292D3A]/80 dark:text-[#A1A6B3] hover:text-[#315D9C] dark:hover:text-[#79ACE0] border border-[#292D3A]/10 dark:border-white/[0.06]'
                }`}
              >
                <span>{ch.period}</span>
                <span className="opacity-70 font-normal">({ch.chapterNumber})</span>
              </button>
            ))}
          </div>

          {/* 1-Column Editorial Chronicle Feed */}
          <div className="relative pl-4 sm:pl-8 border-l-2 border-[#315D9C]/25 dark:border-[#79ACE0]/20 space-y-12 sm:space-y-16">
            {LORE_CHAPTERS.map((chapter, idx) => (
              <ScrollReveal key={chapter.id} delay={idx * 0.08} duration={0.45}>
                <ChronicleChapterCard chapter={chapter} onZoom={setLightboxImage} />
              </ScrollReveal>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Preview Modal */}
      <ImageLightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
};

export default LoreSection;

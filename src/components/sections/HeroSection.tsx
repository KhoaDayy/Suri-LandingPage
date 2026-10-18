import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, MessageSquare, Twitter, ArrowUpRight, Mail } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidBadge } from '../ui/LiquidBadge';
import { WaterParticles } from '../ui/WaterParticles';
import { HERO_DATA, SURI_DATA } from '../../data/suriData';

export const HeroSection: React.FC = () => {

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#FAFAF7] dark:bg-[#141517] text-[#1E232F] dark:text-[#ECEBE6] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-0 transition-colors duration-300"
    >
      {/* =========================================================================
          KEY VISUAL PANORAMIC HEADER BACKDROP
          Luminous aquatic fantasy key visual with controlled directional contrast
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Scenic Panoramic Key Art Background - Preserving vivid colors & linework */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/suri/hero-background.webp"
            alt="Suri Mukeki Key Visual Backdrop"
            className="w-full h-full object-cover object-[70%_25%] sm:object-[center_28%] scale-105 sm:scale-108 lg:scale-110 origin-center opacity-65 sm:opacity-60 dark:opacity-40 transition-opacity duration-700"
          />
        </div>

        {/* Directional Calm Veil: Smooth, subtle white-to-transparent gradient behind content area, strongest on far left and fading naturally toward center */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full sm:w-[85%] lg:w-[65%] xl:w-[60%] bg-gradient-to-r from-[#FAFAF7] via-[#FAFAF7]/95 via-35% via-[#FAFAF7]/70 via-65% to-transparent dark:from-[#141517] dark:via-[#141517]/95 dark:via-35% dark:via-[#141517]/70 dark:via-65% dark:to-transparent"
        />

        {/* Soft Localized Typography Backlight: Restrained reading zone directly behind editorial headline */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-0 w-[640px] h-[520px] -translate-y-1/3 pointer-events-none bg-[radial-gradient(ellipse_at_20%_40%,_rgba(250,250,247,0.85)_0%,_rgba(250,250,247,0.4)_50%,_transparent_75%)] dark:bg-[radial-gradient(ellipse_at_20%_40%,_rgba(20,21,23,0.9)_0%,_rgba(20,21,23,0.4)_50%,_transparent_75%)]"
        />

        {/* Subtle Top & Bottom Seamless Transitions */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FAFAF7] dark:from-[#141517] via-[#FAFAF7]/70 dark:via-[#141517]/70 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#FAFAF7] dark:from-[#141517] via-[#FAFAF7]/75 dark:via-[#141517]/75 to-transparent" />

        {/* Delicate Celestial Runes Motif */}
        <div className="absolute inset-0 bg-celestial-wave opacity-10 dark:opacity-10" />

        {/* Floating Water & Celestial Particles */}
        <WaterParticles count={8} palette="mixed" />
      </div>

      {/* =========================================================================
          MAIN HERO EDITORIAL STAGE
         ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-6 sm:py-10">
        
        {/* Content Grid: Narrative on Left, Character on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Identity, Tagline, Story & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-20">
            

            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3.5 inline-flex items-center gap-2"
            >
              <LiquidBadge text="LIVE TRANSMISSION" variant="cyan" />
            </motion.div>

            {/* Grand Display Headline: SURI MUKEKI */}
            <div className="relative select-none w-full">
              <BlurText
                text="SURI MUKEKI"
                as="h1"
                align="left"
                duration={0.48}
                delay={0.05}
                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.5rem] font-bold text-[#1E293B] dark:text-[#ECEBE6] leading-[0.98] tracking-tight"
              />

              {/* Tagline Accent Pill: Refined uppercase subtitle with improved letter spacing and reduced visual weight */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 flex items-center gap-3"
              >
                <span className="h-[1px] w-6 bg-[#315D9C]/30 dark:bg-[#79ACE0]/35" />
                <span className="font-sans tracking-[0.16em] text-xs sm:text-[12.5px] text-[#244E82] dark:text-[#79ACE0] uppercase font-medium">
                  Nàng Slime Nước • Cô Chủ Quán Cafe 3D & Sứ Giả Suwi
                </span>
                <span className="h-[1px] w-6 bg-[#315D9C]/30 dark:bg-[#79ACE0]/35" />
              </motion.div>
            </div>

            {/* Narrative Editorial Prose with generous whitespace */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[15px] sm:text-base font-normal text-[#334155] dark:text-[#A1A6B3] max-w-[540px] leading-[1.68] font-sans"
            >
              Suri Mukeki là VTuber độc lập tại Việt Nam, thường xuyên livestream tại tiệm cafe 3D ấm cúng, chơi game, trò chuyện, ca hát và tâm sự cùng cộng đồng Sureiya.
            </motion.p>

            {/* Official Calls-To-Action */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-3.5 w-full sm:w-auto"
            >
              {/* Primary YouTube CTA */}
              <a
                href={HERO_DATA.ctas.primary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-11 justify-center inline-flex items-center gap-2.5 px-6 rounded-full bg-[#315D9C] hover:bg-[#254778] active:bg-[#1D385F] text-white font-sans text-sm font-medium border border-[#315D9C] shadow-[0_4px_14px_rgba(49,93,156,0.24)] hover:shadow-[0_6px_18px_rgba(49,93,156,0.32)] transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315D9C] focus-visible:ring-offset-2"
              >
                <Youtube size={16} className="text-[#FF4A4A] fill-current" />
                <span>Xem trên YouTube</span>
                <ArrowUpRight size={14} className="opacity-80" />
              </a>

              {/* Discord Community CTA */}
              <a
                href={HERO_DATA.ctas.secondary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial h-11 justify-center inline-flex items-center gap-2 px-5 rounded-full bg-white dark:bg-[#1B1D21] hover:bg-[#F8FAFC] dark:hover:bg-[#22252B] text-[#334155] dark:text-[#ECEBE6] font-sans text-sm font-medium border border-[#CBD5E1] dark:border-white/10 hover:border-[#94A3B8] dark:hover:border-white/20 hover:text-[#1E293B] dark:hover:text-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-none transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315D9C] focus-visible:ring-offset-2"
              >
                <MessageSquare size={16} className="text-[#315D9C] dark:text-[#79ACE0]" />
                <span className="whitespace-nowrap">Tham gia Discord</span>
              </a>

              {/* X / Twitter CTA */}
              <a
                href={SURI_DATA.officialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial h-11 justify-center inline-flex items-center gap-2 px-5 rounded-full bg-white dark:bg-[#1B1D21] hover:bg-[#F8FAFC] dark:hover:bg-[#22252B] text-[#334155] dark:text-[#ECEBE6] font-sans text-sm font-medium border border-[#CBD5E1] dark:border-white/10 hover:border-[#94A3B8] dark:hover:border-white/20 hover:text-[#1E293B] dark:hover:text-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-none transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315D9C] focus-visible:ring-offset-2"
                title="Follow on X"
              >
                <Twitter size={15} className="text-[#334155] dark:text-[#ECEBE6]" />
                <span className="whitespace-nowrap">Theo dõi trên X</span>
              </a>

              {/* Official Contact & Carrd CTA */}
              <a
                href="#contact"
                className="flex-1 sm:flex-initial h-11 justify-center inline-flex items-center gap-2 px-5 rounded-full bg-white dark:bg-[#1B1D21] hover:bg-[#FAF7EE] dark:hover:bg-[#23201B] text-[#334155] dark:text-[#ECEBE6] font-sans text-sm font-medium border border-[#C9A95C]/40 dark:border-[#D4B86A]/30 hover:border-[#C9A95C] dark:hover:border-[#D4B86A] hover:text-[#C9A95C] dark:hover:text-[#D4B86A] shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-none transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A95C] focus-visible:ring-offset-2"
                title="Danh thiếp Carrd & Kênh liên hệ"
              >
                <Mail size={15} className="text-[#C9A95C] dark:text-[#D4B86A]" />
                <span className="whitespace-nowrap">Danh thiếp & Liên hệ</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Character Visual Showcase (Primary Focal Point) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[580px]">
            
            {/* Luminous Soft Radial Halo & Celestial Dial */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[340px] sm:w-[410px] lg:w-[460px] h-[340px] sm:h-[410px] lg:h-[460px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.72)_0%,_rgba(234,243,251,0.35)_45%,_transparent_72%)] dark:bg-[radial-gradient(circle,_rgba(121,172,224,0.08)_0%,_rgba(27,29,33,0.35)_45%,_transparent_72%)]" />
              <div className="absolute w-[310px] sm:w-[380px] lg:w-[430px] h-[310px] sm:h-[380px] lg:h-[430px] rounded-full border border-[#C9A95C]/22 dark:border-[#D4B86A]/20 border-dashed animate-[spin_120s_linear_infinite]" />
              <div className="absolute w-[260px] sm:w-[320px] lg:w-[370px] h-[260px] sm:h-[320px] lg:h-[370px] rounded-full border border-[#75B8E6]/28 dark:border-[#79ACE0]/20" />
            </div>

            {/* Foreground Character Artwork */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px] flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="w-full flex justify-center"
              >
                <img
                  src="/images/suri/hero-character.webp"
                  alt="Suri Mukeki characterImage"
                  className="w-full h-auto max-h-[420px] sm:max-h-[500px] lg:max-h-[600px] object-contain drop-shadow-[0_22px_44px_rgba(49,93,156,0.25)] drop-shadow-[0_4px_14px_rgba(201,169,92,0.18)] select-none pointer-events-none"
                />
              </motion.div>
            </motion.div>

            {/* Companion WingWing Badge with playful spring hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
              transition={{ duration: 0.35 }}
              className="absolute bottom-2 right-2 sm:right-4 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#1B1D21]/95 backdrop-blur-md border border-[#75B8E6]/35 dark:border-white/[0.08] shadow-sm select-none cursor-pointer group"
            >
              <img
                src="/images/suri/wingwing.png"
                alt="Tinh linh WingWing"
                className="w-5 h-5 object-contain group-hover:scale-115 transition-transform duration-200"
              />
              <span className="font-sans text-xs font-semibold text-[#1E293B] dark:text-[#ECEBE6]">
                Tinh linh WingWing
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          STATISTICS SECTION (Quick Information Strip)
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 w-full bg-white/75 dark:bg-[#181A1E]/80 backdrop-blur-md border-t border-b border-slate-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-white/[0.08] py-4 sm:py-5">
            
            {/* Stat 1: Community Subscribers */}
            <div className="group transition-colors duration-200 hover:bg-slate-50/60 dark:hover:bg-white/[0.02] rounded-lg px-4 sm:px-6 py-3 sm:py-2 flex flex-col justify-center">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Người đăng ký
              </span>
              <div className="flex items-baseline gap-2 mt-1.5">
                <span className="font-sans text-2xl sm:text-[1.75rem] font-semibold text-[#1E293B] dark:text-[#ECEBE6] tracking-tight">
                  51,400+
                </span>
                <span className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">Thành viên</span>
              </div>
              <span className="font-sans text-[11.5px] text-slate-400 dark:text-slate-500 mt-0.5">Cộng đồng Sureiya</span>
            </div>

            {/* Stat 2: Active Models (3D & Chibi) */}
            <div className="group transition-colors duration-200 hover:bg-slate-50/60 dark:hover:bg-white/[0.02] rounded-lg px-4 sm:px-6 py-3 sm:py-2 flex flex-col justify-center">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Mô hình hiện tại
              </span>
              <div className="flex items-baseline gap-2 mt-1.5">
                <span className="font-sans text-2xl sm:text-[1.75rem] font-semibold text-[#1E293B] dark:text-[#ECEBE6] tracking-tight">
                  Model 3D
                </span>
                <span className="font-sans text-xs text-[#315D9C] dark:text-[#79ACE0] font-medium">& Chibi</span>
              </div>
              <span className="font-sans text-[11.5px] text-slate-400 dark:text-slate-500 mt-0.5">Sử dụng chính trên stream</span>
            </div>

            {/* Stat 3: Physical Avatar Attributes */}
            <div className="group transition-colors duration-200 hover:bg-slate-50/60 dark:hover:bg-white/[0.02] rounded-lg px-4 sm:px-6 py-3 sm:py-2 flex flex-col justify-center">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Vóc dáng
              </span>
              <div className="flex items-baseline gap-2 mt-1.5">
                <span className="font-sans text-2xl sm:text-[1.75rem] font-semibold text-[#1E293B] dark:text-[#ECEBE6] tracking-tight">
                  155 cm
                </span>
                <span className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">/ 40 kg</span>
              </div>
              <span className="font-sans text-[11.5px] text-slate-400 dark:text-slate-500 mt-0.5">Thiết lập nhân vật</span>
            </div>

            {/* Stat 4: Genesis & Debut Day */}
            <div className="group transition-colors duration-200 hover:bg-slate-50/60 dark:hover:bg-white/[0.02] rounded-lg px-4 sm:px-6 py-3 sm:py-2 flex flex-col justify-center">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Ngày ra mắt
              </span>
              <div className="flex items-baseline gap-2 mt-1.5">
                <span className="font-sans text-2xl sm:text-[1.75rem] font-semibold text-[#1E293B] dark:text-[#ECEBE6] tracking-tight">
                  17/04/2021
                </span>
              </div>
              <span className="font-sans text-[11.5px] text-slate-400 dark:text-slate-500 mt-0.5">Debut chính thức</span>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;



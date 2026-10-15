import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Zap, BookOpen } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidBadge } from '../ui/LiquidBadge';
import { LORE_DATA } from '../../data/suriData';

export const LoreSection: React.FC = () => {
  const [activePersona, setActivePersona] = useState<'suri' | 'irus'>('suri');
  const isSuri = activePersona === 'suri';

  return (
    <section
      id="lore"
      className={`relative min-h-screen py-24 px-4 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500 border-b-4 border-[#282436] ${
        isSuri ? 'bg-[#FFF5EE] text-[#282436]' : 'bg-[#282436] text-[#FFF5EE]'
      }`}
    >
      {/* Decorative Halftone / Dot Texture */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-25 ${
          isSuri ? 'bg-halftone-subtle' : 'bg-halftone-pink'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-current pb-6">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65E4E0] text-[#282436] font-display text-xs border-2 border-[#282436] shadow-[2px_2px_0px_#282436] mb-3">
              <BookOpen size={14} />
              <span>{LORE_DATA.sectionTag} • 記憶の書</span>
            </div>

            <div className="w-full">
              <BlurText
                text={LORE_DATA.headline}
                as="h2"
                align="left"
                className={`font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.92] ${
                  isSuri ? 'text-[#282436]' : 'text-[#FFE36E]'
                }`}
              />
            </div>

            <p className={`mt-3 max-w-2xl text-sm sm:text-base font-medium leading-relaxed ${
              isSuri ? 'text-[#282436]/80' : 'text-[#FFF5EE]/80'
            }`}>
              {LORE_DATA.leadParagraph}
            </p>
          </div>

          {/* Persona Switcher Buttons (Manga Character Select Style) */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActivePersona('suri')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-xs sm:text-sm border-3 border-[#282436] transition-all cursor-pointer ${
                isSuri
                  ? 'bg-[#65E4E0] text-[#282436] shadow-[4px_4px_0px_#282436] scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Droplets size={16} className={isSuri ? 'text-[#282436]' : 'text-[#65E4E0]'} />
              <span>SURI // WATER SLIME</span>
            </button>

            <button
              type="button"
              onClick={() => setActivePersona('irus')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-xs sm:text-sm border-3 border-[#282436] transition-all cursor-pointer ${
                !isSuri
                  ? 'bg-[#FFE36E] text-[#282436] shadow-[4px_4px_0px_#282436] scale-105'
                  : 'bg-white/80 text-[#282436]/70 hover:bg-white'
              }`}
            >
              <Zap size={16} className={!isSuri ? 'text-[#282436]' : 'text-[#FFE36E]'} />
              <span>IRUS // THUNDER ALTER</span>
            </button>
          </div>
        </div>

        {/* Dynamic Persona Spotlight Banner (Visual Novel Character Dossier) */}
        <AnimatePresence mode="wait">
          {isSuri ? (
            <motion.div
              key="persona-suri"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-16 bg-[#FFF5EE] border-4 border-[#282436] rounded-3xl shadow-[8px_8px_0px_#282436] overflow-hidden p-6 sm:p-8 lg:p-10 relative text-[#282436]"
            >
              {/* Halftone Top Banner */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#FF79AC] border-b-2 border-[#282436] flex items-center justify-between px-6 font-mono text-xs font-bold">
                <span>// DOSSIER 01: SURI MUKEKI (無敵スリ)</span>
                <span>STATUS: CELESTIAL WATER SLIME</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
                {/* Character Cutout */}
                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="w-full max-w-[340px] sm:max-w-[400px] relative">
                    <img
                      src="/images/characters/suri_cutout_transparent.png"
                      alt="Suri Mukeki Water Slime Vessel"
                      className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_10px_20px_rgba(40,36,54,0.2)]"
                    />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#FFE36E] border-2 border-[#282436] shadow-[3px_3px_0px_#282436] rounded-full font-display text-xs font-black whitespace-nowrap">
                      ★ WATER SLIME // 155 CM
                    </div>
                  </div>
                </div>

                {/* Persona Data Dossier */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded bg-[#65E4E0] border-2 border-[#282436] font-display text-xs font-bold shadow-[2px_2px_0px_#282436]">
                      WATER SLIME GENESIS
                    </span>
                    <span className="px-3 py-1 rounded bg-[#FF79AC] border-2 border-[#282436] font-display text-xs font-bold shadow-[2px_2px_0px_#282436]">
                      CELESTIAL CYBER-COURIER
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-black text-[#282436] leading-tight">
                    Suri Mukeki (無敵スリ)
                  </h3>

                  <p className="mt-3 text-sm sm:text-base font-medium text-[#282436]/85 leading-relaxed">
                    Chuyển sinh từ một khối thủy tinh (water slime) trôi dạt tại hồ nước ma thuật. Nhờ năng lượng dị giới, Suri ngưng tụ thành hình hài thiếu nữ miêu nhân với đôi cánh thiên thần cơ khí, trở thành sứ giả vận chuyển tốc độ cao xuyên không gian.
                  </p>

                  {/* Attributes Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-6">
                    <div className="p-3 bg-[#FFE36E]/40 border-2 border-[#282436] rounded-xl shadow-[2px_2px_0px_#282436]">
                      <span className="font-mono text-[10px] text-[#282436]/60 font-bold block uppercase">Chủng tộc</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#282436]">Water Slime / Angel</span>
                    </div>
                    <div className="p-3 bg-[#65E4E0]/40 border-2 border-[#282436] rounded-xl shadow-[2px_2px_0px_#282436]">
                      <span className="font-mono text-[10px] text-[#282436]/60 font-bold block uppercase">Chiều cao</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#282436]">155 cm / 40 kg</span>
                    </div>
                    <div className="p-3 bg-[#FF79AC]/40 border-2 border-[#282436] rounded-xl shadow-[2px_2px_0px_#282436]">
                      <span className="font-mono text-[10px] text-[#282436]/60 font-bold block uppercase">Debut Day</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#282436]">April 17, 2021 (17/04)</span>
                    </div>
                    <div className="p-3 bg-[#B7A1FF]/40 border-2 border-[#282436] rounded-xl shadow-[2px_2px_0px_#282436]">
                      <span className="font-mono text-[10px] text-[#282436]/60 font-bold block uppercase">Sinh nhật</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#282436]">October 30 (30/10)</span>
                    </div>
                  </div>

                  {/* Fanbase & Pudding Sweet Tooth Trivia */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#282436]/70 mr-1">TRIVIA DOSSIER:</span>
                    <span className="px-3 py-1 bg-white border-2 border-[#282436] rounded-lg text-xs font-bold shadow-[2px_2px_0px_#282436]">
                      Fanbase: Sureiya / Slayer
                    </span>
                    <span className="px-3 py-1 bg-[#FFE36E] border-2 border-[#282436] rounded-lg text-xs font-bold shadow-[2px_2px_0px_#282436]">
                      🍮 Favorite Food: Caramel Pudding (Flan) & bánh ngọt
                    </span>
                    <span className="px-3 py-1 bg-[#FF79AC] border-2 border-[#282436] rounded-lg text-xs font-bold shadow-[2px_2px_0px_#282436]">
                      Energy: Chaotic Cute & Sweet Tooth
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="persona-irus"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-16 bg-[#282436] border-4 border-[#FFE36E] rounded-3xl shadow-[8px_8px_0px_#FFE36E] overflow-hidden p-6 sm:p-8 lg:p-10 relative text-[#FFF5EE]"
            >
              {/* Halftone Top Banner */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#FFE36E] text-[#282436] border-b-2 border-[#282436] flex items-center justify-between px-6 font-mono text-xs font-bold">
                <span>// DOSSIER 02: IRUS ALTER (雷帝・アイリス)</span>
                <span>STATUS: SEALED LIGHTNING MONARCH (300 YEARS)</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
                {/* Character Cutout for Irus */}
                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="w-full max-w-[340px] sm:max-w-[400px] relative">
                    <img
                      src="/images/characters/irus_alter_full.webp"
                      alt="Irus Alter Lightning Monarch"
                      className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_10px_25px_rgba(255,227,110,0.3)]"
                    />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#FF79AC] text-[#282436] border-2 border-[#282436] shadow-[3px_3px_0px_#282436] rounded-full font-display text-xs font-black whitespace-nowrap">
                      ⚡ THUNDER MONARCH // 172 CM
                    </div>
                  </div>
                </div>

                {/* Irus Data Dossier */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded bg-[#FFE36E] text-[#282436] border-2 border-[#282436] font-display text-xs font-bold shadow-[2px_2px_0px_#282436]">
                      300-YEAR LIGHTNING SEAL
                    </span>
                    <span className="px-3 py-1 rounded bg-[#B7A1FF] text-[#282436] border-2 border-[#282436] font-display text-xs font-bold shadow-[2px_2px_0px_#282436]">
                      ELEMENTAL ALTER EGO
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-black text-[#FFE36E] leading-tight">
                    Irus Alter (雷帝アイリス)
                  </h3>

                  <p className="mt-3 text-sm sm:text-base font-medium text-[#FFF5EE]/90 leading-relaxed">
                    Nữ vương lôi miêu hoàng tộc mang sức mạnh sấm sét (lightning) hủy diệt. Bị phong ấn hơn 300 năm trong cổ thạch di tích, linh hồn Irus thức tỉnh và cùng tồn tại song song bên trong thể xác Suri, chỉ bộc lộ khi dòng điện cảm xúc đạt đỉnh cực hạn.
                  </p>

                  {/* Attributes Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-6">
                    <div className="p-3 bg-white/10 border-2 border-[#FFE36E] rounded-xl shadow-[2px_2px_0px_#FFE36E]">
                      <span className="font-mono text-[10px] text-[#FFE36E]/80 font-bold block uppercase">Chủng tộc</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-white">Thunder Sovereign</span>
                    </div>
                    <div className="p-3 bg-white/10 border-2 border-[#FFE36E] rounded-xl shadow-[2px_2px_0px_#FFE36E]">
                      <span className="font-mono text-[10px] text-[#FFE36E]/80 font-bold block uppercase">Chiều cao</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-white">172 cm (Queenly)</span>
                    </div>
                    <div className="p-3 bg-white/10 border-2 border-[#FFE36E] rounded-xl shadow-[2px_2px_0px_#FFE36E]">
                      <span className="font-mono text-[10px] text-[#FFE36E]/80 font-bold block uppercase">Nguyên tố</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#FFE36E]">Plasma / Lightning (Sấm sét)</span>
                    </div>
                    <div className="p-3 bg-white/10 border-2 border-[#FFE36E] rounded-xl shadow-[2px_2px_0px_#FFE36E]">
                      <span className="font-mono text-[10px] text-[#FFE36E]/80 font-bold block uppercase">Phong ấn</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#FF79AC]">300 năm phong ấn</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#FFE36E] mr-1">DOMINANCE TRAITS:</span>
                    <span className="px-3 py-1 bg-[#FFE36E] text-[#282436] border-2 border-[#282436] rounded-lg text-xs font-bold">
                      ⚡ Royal Thunder Authority
                    </span>
                    <span className="px-3 py-1 bg-[#B7A1FF] text-[#282436] border-2 border-[#282436] rounded-lg text-xs font-bold">
                      👑 Queen of High Voltage
                    </span>
                    <span className="px-3 py-1 bg-[#FF79AC] text-[#282436] border-2 border-[#282436] rounded-lg text-xs font-bold">
                      ⚔️ Dual Soul Symphony
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3 Origin Chronicles (Manga Chapter Editorial Panels) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-md bg-[#FFE36E] text-[#282436] font-display text-xs font-bold border-2 border-[#282436] shadow-[2px_2px_0px_#282436]">
              ORIGIN CHRONICLES // BIÊN NIÊN KÝ
            </span>
            <span className="font-mono text-xs font-bold text-current opacity-70">
              3 CHƯƠNG KÝ ỨC DỊ GIỚI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chapter 1: Water Slime Genesis */}
            <div className="pop-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden bg-[#FFF5EE] text-[#282436]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#65E4E0] border-b-2 border-l-2 border-[#282436] font-display text-[10px] font-bold">
                CHAPTER 01
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#65E4E0] border-2 border-[#282436] flex items-center justify-center font-display text-lg font-black mb-4 shadow-[2px_2px_0px_#282436]">
                  💧
                </div>
                <h4 className="font-display text-xl font-bold text-[#282436] mb-2">
                  Thủy Tinh Chuyển Sinh
                </h4>
                <p className="text-xs sm:text-sm font-medium text-[#282436]/80 leading-relaxed">
                  Nguyên thân là một khối nước ma thuật (water slime) trôi dạt vô định tại lòng hồ dị giới, hấp thụ tinh hoa vũ trụ để tái sinh thành sứ giả giao liên tốc độ cao.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-[#282436]/15 font-mono text-[11px] font-bold text-[#282436]/60">
                // GENESIS REINCARNATION
              </div>
            </div>

            {/* Chapter 2: The Enigmatic Birthday Note from "W" */}
            <div className="pop-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden bg-[#FFE36E] text-[#282436]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#FF79AC] border-b-2 border-l-2 border-[#282436] font-display text-[10px] font-bold">
                CHAPTER 02
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FF79AC] border-2 border-[#282436] flex items-center justify-center font-display text-lg font-black mb-4 shadow-[2px_2px_0px_#282436]">
                  ✉️
                </div>
                <h4 className="font-display text-xl font-bold text-[#282436] mb-2">
                  Bức Thư Sinh Nhật Ký Tên "W"
                </h4>
                <div className="p-3 bg-white/90 border-2 border-[#282436] rounded-xl shadow-[2px_2px_0px_#282436] mb-3">
                  <p className="font-serif italic text-xs sm:text-sm text-[#282436] font-semibold">
                    "Chúc mừng sinh nhật Suri — Hãy giữ vững nụ cười và đôi cánh tự do này nhé."
                  </p>
                  <span className="font-mono text-[10px] font-bold text-[#282436]/70 block text-right mt-1">
                    — Ký tên: W [NOTE-W]
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#282436]/80 leading-relaxed">
                  Mảnh giấy da cổ cùng viên ngọc ước nguyện kỷ niệm ngày tái sinh (October 30), lưu giữ manh mối bí ẩn về đấng sáng tạo.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-[#282436]/15 font-mono text-[11px] font-bold text-[#282436]/60">
                // CLASSIFIED RECORD // NOTE-W
              </div>
            </div>

            {/* Chapter 3: Irus 300-Year Lightning Seal */}
            <div className="pop-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden bg-[#B7A1FF] text-[#282436]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#FFE36E] border-b-2 border-l-2 border-[#282436] font-display text-[10px] font-bold">
                CHAPTER 03
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FFE36E] border-2 border-[#282436] flex items-center justify-center font-display text-lg font-black mb-4 shadow-[2px_2px_0px_#282436]">
                  ⚡
                </div>
                <h4 className="font-display text-xl font-bold text-[#282436] mb-2">
                  Lôi Miêu Hoàng Tộc & 300 Năm Phong Ấn
                </h4>
                <p className="text-xs sm:text-sm font-medium text-[#282436]/80 leading-relaxed">
                  Irus — nữ hoàng mang lôi điện sấm sét (lightning) tối thượng bị phong ấn hơn 300 năm. Dưới sự cộng hưởng của tình bạn và âm nhạc, hai tâm hồn hòa vào làm một.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-[#282436]/15 font-mono text-[11px] font-bold text-[#282436]/60">
                // IRUS 300-YEAR LIGHTNING SEAL
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Liquid Test Hook for T1-BRAND compatibility */}
        <div className="hidden" aria-hidden="true">
          <LiquidBadge text="LORE ARCHIVE" variant="cyan" />
        </div>
      </div>
    </section>
  );
};

export default LoreSection;

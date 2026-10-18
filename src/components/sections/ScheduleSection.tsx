import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Play,
  Radio,
  Disc3,
  Mic2,
  Gamepad2,
  Heart,
  Headphones,
  Sparkles,
  Volume2,
  ExternalLink,
  Search,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { ScrollReveal } from '../ui/ScrollReveal';
import { VideoModal } from '../modals/VideoModal';
import { TiltCard } from '../effects/TiltCard';
import { FloatingSlimeBubbles } from '../effects/FloatingSlimeBubbles';
import { SCHEDULE_DATA } from '../../data/suriData';
import type { MusicCoverShowcase } from '../../types';

export const ScheduleSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<MusicCoverShowcase | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const streamCategories = [
    {
      title: 'Gaming & Trò chơi',
      category: 'Gaming / FPS',
      icon: <Gamepad2 size={16} className="text-[#315D9C]" />,
      desc: 'Where Winds Meet, League of Legends, Valorant và các tựa game phiêu lưu cùng người xem.',
    },
    {
      title: 'Tâm tình & Hòm thư',
      category: 'Free Talk / Marshmallow',
      icon: <Heart size={16} className="text-[#FF79AC]" />,
      desc: 'Tâm sự đêm muộn, giải đáp thư Marshmallow và đọc chia sẻ từ cộng đồng Sureiya.',
    },
    {
      title: 'Đêm nhạc & Ca hát',
      category: 'Singing / Music',
      icon: <Mic2 size={16} className="text-[#C9A95C]" />,
      desc: 'Đêm nhạc acoustic, cover J-Pop, tình ca Việt Nam và hát theo yêu cầu khán giả.',
    },
    {
      title: '3D ASMR & Thư giãn',
      category: 'ASMR / Binaural',
      icon: <Headphones size={16} className="text-[#7660A7]" />,
      desc: 'Thư giãn với micro KU100 3D binaural, thì thầm và âm thanh giọt nước vỗ về giấc ngủ.',
    },
    {
      title: 'Cosplay, Tarot & Giao lưu',
      category: 'Giao lưu cộng đồng',
      icon: <Sparkles size={16} className="text-[#70D7E1]" />,
      desc: 'Điểm lại fanart #Surillust, xem bói bài tarot, cosplay và party games ngập tràn tiếng cười.',
    },
  ];

  const coversList: MusicCoverShowcase[] = SCHEDULE_DATA.covers || [];

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'jpop', label: 'J-Pop & Anime' },
    { id: 'game-ost', label: 'Game OST & US-UK' },
    { id: 'vpop', label: 'V-Pop & Ballad' },
    { id: 'collab', label: 'Collab & Special' },
  ];

  const filteredCovers = useMemo(() => {
    return coversList.filter((cover) => {
      const matchesCategory = activeCategory === 'all' || cover.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cover.title.toLowerCase().includes(q) ||
        (cover.artist && cover.artist.toLowerCase().includes(q)) ||
        (cover.originalArtist && cover.originalArtist.toLowerCase().includes(q)) ||
        (cover.badge && cover.badge.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [coversList, activeCategory, searchQuery]);

  const INITIAL_VISIBLE_COUNT = 6;
  const shouldLimit = !isExpanded && !searchQuery.trim() && activeCategory === 'all';
  const displayedCovers = shouldLimit ? filteredCovers.slice(0, INITIAL_VISIBLE_COUNT) : filteredCovers;

  return (
    <section
      id="schedule"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#FAFAF7] dark:bg-[#141517] text-[#292D3A] dark:text-[#ECEBE6] overflow-hidden transition-colors duration-300"
    >
      {/* Background Celestial Motifs */}
      <div className="absolute inset-0 bg-celestial-wave opacity-20 dark:opacity-10 pointer-events-none" />
      <FloatingSlimeBubbles count={8} variant="celestial" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto space-y-14 sm:space-y-16"
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#292D3A]/10 dark:border-white/[0.08]">
          <div>
            <BlurText
              text="Kho nhạc & Nội dung phát sóng"
              as="h2"
              align="left"
              duration={0.48}
              delay={0.05}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#292D3A] dark:text-[#ECEBE6]"
            />

            <p className="mt-2 text-sm sm:text-base font-sans text-[#292D3A]/75 dark:text-[#A1A6B3] max-w-2xl">
              Tuyển tập các ca khúc cover nổi bật và các mảng nội dung livestream yêu thích của Suri Mukeki.
            </p>
          </div>

          {/* Timezone & Typical Schedule Indicator Hub */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <div className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#1B1D21] border border-[#292D3A]/10 dark:border-white/[0.08] shadow-sm flex items-center gap-3">
              <Clock size={16} className="text-[#315D9C] dark:text-[#79ACE0]" />
              <div>
                <span className="font-sans text-[10px] text-[#292D3A]/60 dark:text-[#7A808E] font-medium block uppercase tracking-wider">
                  Khung giờ quen thuộc
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
                  20:00 ICT (Tuỳ ngày)
                </span>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#1B1D21] border border-[#292D3A]/10 dark:border-white/[0.08] shadow-sm flex items-center gap-3">
              <Radio size={16} className="text-[#C9A95C] dark:text-[#D4B86A]" />
              <div>
                <span className="font-sans text-[10px] text-[#292D3A]/60 dark:text-[#7A808E] font-medium block uppercase tracking-wider">
                  Múi giờ phát sóng
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
                  UTC+7 / ICT (Giờ Việt Nam)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Broadcast Notice Banner */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#1B1D21] border border-[#75B8E6]/40 dark:border-[#79ACE0]/25 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#EAF3FB] dark:bg-[#181F2A] text-[#315D9C] dark:text-[#79ACE0] shrink-0 mt-0.5">
              <Radio size={24} />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-display text-base sm:text-lg font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
                Lịch phát sóng linh hoạt
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#292D3A]/75 dark:text-[#A1A6B3] leading-relaxed max-w-3xl">
                Suri Mukeki lên sóng linh hoạt theo tuần (thường vào <strong className="dark:text-[#ECEBE6]">20:00 UTC+7</strong> tuỳ ngày). Lịch cụ thể từng buổi được thông báo trước trên máy chủ Discord, tab Cộng đồng YouTube và trang Facebook.
              </p>
            </div>
          </div>
          <a
            href="https://discord.gg/surimukeki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#315D9C] dark:bg-[#2A5288] text-white font-sans text-xs font-semibold hover:bg-[#254778] dark:hover:bg-[#3463a3] hover:-translate-y-[1px] hover:shadow-md transition-all duration-180 shrink-0 shadow-sm self-start md:self-center"
          >
            <span>Nhận thông báo lịch trên Discord</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Stream Content Pillars (Các mảng nội dung phát sóng) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#292D3A]/10 dark:border-white/[0.08]">
            <h3 className="font-display text-xl font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
              Nội dung phát sóng
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {streamCategories.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} duration={0.35} className="h-full">
                <TiltCard className="rounded-xl h-full" maxTilt={6}>
                  <div
                    className="card-shimmer p-4 rounded-xl bg-white dark:bg-[#1B1D21] border border-[#292D3A]/10 dark:border-white/[0.08] shadow-sm flex flex-col justify-between hover:border-[#315D9C] dark:hover:border-[#79ACE0]/50 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group h-full"
                  >
                    <div>
                      <div className="flex items-start justify-between pb-2 border-b border-[#292D3A]/10 dark:border-white/[0.08] mb-2.5">
                        <div>
                          <span className="font-sans text-sm font-semibold text-[#292D3A] dark:text-[#ECEBE6] block">
                            {item.title}
                          </span>
                          <span className="font-sans text-[11px] text-[#315D9C] dark:text-[#79ACE0] font-medium">
                            {item.category}
                          </span>
                        </div>
                        <span className="shrink-0 mt-0.5">
                          {item.icon}
                        </span>
                      </div>

                      <p className="text-xs text-[#292D3A]/70 dark:text-[#A1A6B3] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Curated Music Cover Showcase Catalog */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#292D3A]/10 dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Disc3 size={18} className="text-[#315D9C] dark:text-[#79ACE0]" />
              <h3 className="font-display text-xl font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
                Các bản cover nổi bật
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-sans text-xs text-[#C9A95C] dark:text-[#D4B86A] font-semibold">
                {coversList.length} ca khúc
              </span>
              <a
                href={SCHEDULE_DATA.playlistUrl || "https://www.youtube.com/playlist?list=PL7hTl8MTOo99iAQ0D31GQpB2bBn0ClCW9"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#315D9C]/10 dark:bg-[#79ACE0]/10 text-[#315D9C] dark:text-[#79ACE0] hover:bg-[#315D9C] dark:hover:bg-[#2A5288] hover:text-white dark:hover:text-[#ECEBE6] transition-all text-xs font-sans font-medium"
              >
                <span>Xem trên YouTube</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Filter Bar & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Bộ lọc thể loại âm nhạc">
              {categories.map((cat) => {
                const count =
                  cat.id === 'all'
                    ? coversList.length
                    : coversList.filter((c) => c.category === cat.id).length;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all duration-180 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315D9C] dark:focus-visible:ring-[#79ACE0] ${
                      isActive
                        ? 'bg-[#315D9C] dark:bg-[#2A5288] text-white shadow-sm'
                        : 'bg-white dark:bg-[#1B1D21] border border-[#292D3A]/10 dark:border-white/[0.08] text-[#292D3A]/70 dark:text-[#A1A6B3] hover:border-[#315D9C]/40 dark:hover:border-[#79ACE0]/40 hover:text-[#315D9C] dark:hover:text-[#79ACE0]'
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#292D3A]/40 dark:text-[#7A808E] pointer-events-none" />
              <input
                type="text"
                placeholder="Tìm bài hát, ca sĩ..."
                aria-label="Tìm kiếm bài hát hoặc ca sĩ"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-[#1B1D21] border border-[#292D3A]/15 dark:border-white/[0.08] focus:outline-none focus:border-[#315D9C] dark:focus:border-[#79ACE0] focus-visible:ring-2 focus-visible:ring-[#315D9C] dark:focus-visible:ring-[#79ACE0] text-[#292D3A] dark:text-[#ECEBE6] placeholder-[#292D3A]/40 dark:placeholder-[#7A808E] transition-colors duration-180"
              />
            </div>
          </div>

          {/* Cards Grid */}
          {displayedCovers.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-[#1B1D21] rounded-xl border border-[#292D3A]/10 dark:border-white/[0.08] text-[#292D3A]/60 dark:text-[#A1A6B3] font-sans text-sm">
              Không tìm thấy bài hát nào phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedCovers.map((cover, idx) => (
                <ScrollReveal key={cover.id} delay={(idx % 3) * 0.06} duration={0.35} className="h-full">
                  <TiltCard className="rounded-xl h-full" maxTilt={6}>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedVideo(cover)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedVideo(cover);
                        }
                      }}
                      aria-label={`Xem video bản cover ${cover.title} của Suri Mukeki`}
                      className="card-shimmer rounded-xl border border-[#292D3A]/10 dark:border-white/[0.08] bg-white dark:bg-[#1B1D21] overflow-hidden shadow-sm hover:border-[#315D9C] dark:hover:border-[#79ACE0]/50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315D9C] dark:focus-visible:ring-[#79ACE0] focus-visible:ring-offset-2 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer group flex flex-col justify-between text-left h-full"
                    >
                      {/* Video Thumbnail Preview */}
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                        <img
                          src={`https://img.youtube.com/vi/${cover.youtubeId}/hqdefault.jpg`}
                          alt={cover.title}
                          className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-200" />

                        {/* Badge Overlay Top Left */}
                        {cover.badge && (
                          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[#79ACE0] border border-white/10 font-sans text-[9px] font-semibold uppercase tracking-wider">
                            {cover.badge}
                          </div>
                        )}

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-white/90 dark:bg-[#22252B]/90 text-[#315D9C] dark:text-[#79ACE0] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#315D9C] dark:group-hover:bg-[#2A5288] group-hover:text-white dark:group-hover:text-[#ECEBE6] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <Play size={18} className="fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Release Date */}
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-sans text-[10px] font-medium">
                          {cover.releaseDate}
                        </div>
                      </div>

                      {/* Cover Details */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-sans text-base font-semibold text-[#292D3A] dark:text-[#ECEBE6] group-hover:text-[#315D9C] dark:group-hover:text-[#79ACE0] transition-colors duration-180 leading-snug line-clamp-1">
                            {cover.title}
                          </h3>
                          <span className="font-sans text-xs text-[#292D3A]/60 dark:text-[#7A808E] font-medium block mt-0.5 truncate">
                            Bản gốc: {cover.originalArtist || cover.artist}
                          </span>
                          <p className="text-xs text-[#292D3A]/75 dark:text-[#A1A6B3] mt-1.5 leading-relaxed font-sans line-clamp-2">
                            {cover.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-[#292D3A]/10 dark:border-white/[0.08] flex items-center justify-between text-xs font-sans font-semibold text-[#315D9C] dark:text-[#79ACE0]">
                          <span className="flex items-center gap-1.5">
                            <Volume2 size={13} />
                            Nghe ngay
                          </span>
                          <span className="font-sans text-[11px] text-[#C9A95C] dark:text-[#D4B86A] truncate max-w-[55%] text-right">
                            {cover.sweetDrink}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Show More / Show Less Controls */}
          {shouldLimit && filteredCovers.length > INITIAL_VISIBLE_COUNT && (
            <div className="flex justify-center pt-3">
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white dark:bg-[#1B1D21] border border-[#292D3A]/15 dark:border-white/[0.08] text-[#315D9C] dark:text-[#79ACE0] font-sans text-xs font-semibold hover:border-[#315D9C] dark:hover:border-[#79ACE0] hover:bg-[#315D9C]/5 dark:hover:bg-[#79ACE0]/10 hover:-translate-y-[1px] shadow-sm transition-all duration-180 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <span>Xem thêm {filteredCovers.length - INITIAL_VISIBLE_COUNT} bài hát</span>
                <ChevronDown size={15} />
              </button>
            </div>
          )}

          {isExpanded && !searchQuery.trim() && activeCategory === 'all' && (
            <div className="flex justify-center pt-3">
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white dark:bg-[#1B1D21] border border-[#292D3A]/15 dark:border-white/[0.08] text-[#292D3A]/70 dark:text-[#A1A6B3] font-sans text-xs font-semibold hover:border-[#315D9C] dark:hover:border-[#79ACE0] hover:text-[#315D9C] dark:hover:text-[#79ACE0] hover:-translate-y-[1px] shadow-sm transition-all duration-180 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <span>Thu gọn danh sách</span>
                <ChevronUp size={15} />
              </button>
            </div>
          )}
        </div>

        {/* Video Player Modal */}
        <VideoModal
          video={selectedVideo}
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />

      </motion.div>
    </section>
  );
};

export default ScheduleSection;

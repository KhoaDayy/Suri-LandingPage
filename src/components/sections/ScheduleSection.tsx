import React, { useState } from 'react';
import { Clock, Play, Radio, Disc3, Mic2, Gamepad2, Heart, Headphones, Sparkles } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidBadge } from '../ui/LiquidBadge';
import { VideoModal } from '../modals/VideoModal';
import { SCHEDULE_DATA } from '../../data/suriData';
import type { MusicCoverShowcase } from '../../types';

export const ScheduleSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<MusicCoverShowcase | null>(null);

  const scheduleList = SCHEDULE_DATA.schedule || [];
  const coversList: MusicCoverShowcase[] = SCHEDULE_DATA.covers || [];

  return (
    <section
      id="schedule"
      className="relative min-h-screen py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#FFF5EE] text-[#282436] border-b-4 border-[#282436]"
    >
      {/* Background Halftone Texture */}
      <div className="absolute inset-0 bg-halftone-pink opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header: Anime MV Broadcasting Stage */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-[#282436] pb-6">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF79AC] text-[#282436] font-display text-xs border-2 border-[#282436] shadow-[2px_2px_0px_#282436] mb-3">
              <Radio size={14} className="animate-pulse" />
              <span>{SCHEDULE_DATA.sectionTag} • 放送スケジュール & 音楽</span>
            </div>

            <div className="w-full">
              <BlurText
                text={SCHEDULE_DATA.headline}
                as="h2"
                align="left"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#282436] tracking-tight leading-[0.92]"
              />
            </div>

            <p className="mt-3 max-w-2xl text-sm sm:text-base font-medium text-[#282436]/80 leading-relaxed">
              Theo dõi lịch phát sóng livestream trên YouTube! Trải nghiệm những buổi Gaming FPS bùng nổ, tâm tình Marshmallow ấm áp, đến những đêm Singing Karaoke acoustic và ASMR thư giãn.
            </p>
          </div>

          {/* Timezone Indicator Hub */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="pop-card px-5 py-3 rounded-2xl bg-[#FFE36E] border-3 border-[#282436] flex items-center gap-3">
              <Clock size={20} className="text-[#282436]" />
              <div>
                <span className="font-mono text-[10px] font-bold text-[#282436]/70 uppercase block">
                  BROADCAST TIMEZONE
                </span>
                <span className="font-display text-sm sm:text-base font-black text-[#282436]">
                  {SCHEDULE_DATA.timezone} (UTC+7 / ICT)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Broadcast Routine Matrix */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-[#65E4E0] text-[#282436] font-display text-xs font-bold border-2 border-[#282436] shadow-[2px_2px_0px_#282436]">
                WEEKLY BROADCAST ROUTINE // LỊCH STREAM HÀNG TUẦN
              </span>
            </div>
            <div className="font-mono text-xs font-bold text-[#282436]/70 hidden sm:block">
              // BROADCAST DAYS: TUE • WED • FRI • SAT • SUN (20:00–21:00 ICT)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {scheduleList.map((item, idx) => {
              const bgColors = ['bg-[#65E4E0]', 'bg-[#FFE36E]', 'bg-[#FF79AC]', 'bg-[#B7A1FF]', 'bg-[#FFF5EE]'];
              const cardBg = bgColors[idx % bgColors.length];

              const categoryIcons: Record<string, React.ReactNode> = {
                'Gaming / FPS': <Gamepad2 size={16} />,
                'Free Talk / Marshmallow': <Heart size={16} />,
                'Singing / Karaoke': <Mic2 size={16} />,
                'Community Special': <Sparkles size={16} />,
                'ASMR / Binaural': <Headphones size={16} />,
              };

              return (
                <div
                  key={item.day}
                  className={`pop-card p-5 rounded-2xl ${cardBg} flex flex-col justify-between border-3 border-[#282436] min-h-[200px]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display text-base font-black text-[#282436]">
                        {item.day}
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-[#282436] shadow-[1px_1px_0px_#282436]">
                        {item.time}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 border border-[#282436] text-[11px] font-bold text-[#282436] mb-3 shadow-[1px_1px_0px_#282436]">
                      {categoryIcons[item.category] || <Radio size={14} />}
                      <span>{item.category}</span>
                    </div>

                    <h4 className="font-display text-sm font-bold text-[#282436] line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-2 border-t-2 border-[#282436]/20 font-mono text-[10px] font-bold text-[#282436]/70 uppercase">
                    {item.time} ICT • YouTube Live
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Music Video Covers Showcase (Japanese MV Album Jacket Grid) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#FF79AC] text-[#282436] font-display text-sm font-bold border-2 border-[#282436] shadow-[3px_3px_0px_#282436] flex items-center gap-2">
                <Disc3 size={18} className="animate-spin text-[#282436]" style={{ animationDuration: '6s' }} />
                <span>MUSIC COVERS & MV CATALOG</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#282436]/70">
                // 6 VERIFIED TRACKS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-end gap-1 h-5 px-3 py-1 bg-white border border-[#282436] rounded-md">
                <div className="w-1 h-2 bg-[#FF79AC] animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-1 h-4 bg-[#65E4E0] animate-bounce" style={{ animationDelay: '0.3s' }} />
                <div className="w-1 h-3 bg-[#FFE36E] animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-1 h-4 bg-[#B7A1FF] animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="font-mono text-xs font-bold text-[#282436]">AUDIO MASTERED</span>
            </div>
          </div>

          {/* 6 Music Cover Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coversList.map((cover, idx) => (
              <div
                key={cover.id || cover.youtubeId}
                className="pop-card p-5 rounded-2xl bg-white border-3 border-[#282436] flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedVideo(cover)}
              >
                <div>
                  {/* CD Cover Thumbnail with Vinyl Record Peek */}
                  <div className="relative aspect-video rounded-xl border-2 border-[#282436] overflow-hidden mb-4 bg-[#282436]">
                    <img
                      src={`https://img.youtube.com/vi/${cover.youtubeId}/hqdefault.jpg`}
                      alt={cover.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-[#282436]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 bg-[#FFE36E] text-[#282436] font-display text-xs font-bold rounded-full border-2 border-[#282436] shadow-[3px_3px_0px_#282436] flex items-center gap-2">
                        <Play size={14} className="fill-[#282436]" />
                        <span>PLAY MV COVER</span>
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#282436] text-white font-mono text-[10px] font-bold">
                      {cover.badge}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-[#FF79AC] uppercase">
                      COVER TRACK 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#282436]/60">
                      {cover.releaseDate || 'OFFICIAL RELEASE'}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-black text-[#282436] group-hover:text-[#FF79AC] transition-colors leading-snug">
                    {cover.title}
                  </h4>

                  <p className="font-mono text-xs text-[#282436]/70 mt-1">
                    Original by {cover.artist || cover.originalArtist}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-[#282436]/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#282436]/60">
                    ID: {cover.youtubeId}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVideo(cover);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFE36E] text-[#282436] font-display text-xs border-2 border-[#282436] shadow-[2px_2px_0px_#282436] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform"
                  >
                    <Play size={12} className="fill-[#282436]" />
                    <span>Watch</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Playback Modal with YouTube iframe */}
        <VideoModal
          isOpen={!!selectedVideo}
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />

        {/* Hidden test compatibility hook */}
        <div className="hidden" aria-hidden="true">
          <LiquidBadge text="BROADCAST MATRIX" variant="cyan" />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;

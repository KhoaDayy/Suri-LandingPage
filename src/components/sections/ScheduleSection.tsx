import React, { useState } from 'react';
import { Calendar, Clock, Play, Music, Sparkles, Radio } from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { LiquidCard } from '../ui/LiquidCard';
import { LiquidBadge } from '../ui/LiquidBadge';
import { VideoModal } from '../modals/VideoModal';
import { SCHEDULE_DATA } from '../../data/suriData';
import type { MusicCoverShowcase } from '../../types';

export const ScheduleSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<MusicCoverShowcase | null>(null);

  const scheduleList = SCHEDULE_DATA.schedule || SCHEDULE_DATA.routine || [];
  const coversList = SCHEDULE_DATA.covers || [];

  return (
    <section
      id="schedule"
      className="relative min-h-screen overflow-hidden bg-black text-white py-24 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 h-[550px] w-[550px] rounded-full bg-cyan-600/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <LiquidBadge
                text={SCHEDULE_DATA.sectionTag}
                variant="cyan"
                size="sm"
                live={false}
              />
            </div>

            <BlurText
              text={SCHEDULE_DATA.headline}
              as="h2"
              align="left"
              className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-[0.95]"
            />

            <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/75 font-body font-light leading-relaxed">
              Join the live broadcasts on YouTube! From high-octane FPS gaming nights and heartfelt Marshmallow fan-mail unboxings to midnight acoustic singing and binaural relaxation.
            </p>
          </div>

          {/* Timezone Badge */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="liquid-glass-strong rounded-2xl px-5 py-3 border border-white/15 flex items-center gap-3">
              <Clock size={18} className="text-cyan-400 shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-white/50 uppercase block">Timezone Hub</span>
                <span className="text-xs sm:text-sm font-mono font-semibold text-cyan-300">
                  {SCHEDULE_DATA.timezone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Broadcast Routine Matrix */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Calendar size={18} className="text-cyan-400" />
            <h3 className="font-heading italic text-2xl sm:text-3xl font-bold text-white">
              Weekly Broadcast Routine Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {scheduleList.map((item, idx) => (
              <LiquidCard
                key={item.day}
                variant="subtle"
                glow={idx === 2 ? 'cyan' : idx === 3 ? 'violet' : 'none'}
                className="p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Day & Time */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                    <span className="font-bold text-white tracking-wider uppercase">
                      {item.day}
                    </span>
                    <span className="text-cyan-300 font-semibold">{item.time}</span>
                  </div>

                  {/* Badge & Category */}
                  <div className="mt-3.5 mb-2">
                    <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-0.5 text-[10px] font-mono text-cyan-300 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-heading italic text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-white/70 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span className="uppercase">{item.category}</span>
                  <Radio size={12} className="text-cyan-400/80 animate-pulse" />
                </div>
              </LiquidCard>
            ))}
          </div>
        </div>

        {/* Verified Music Cover Song Highlights & Modal Trigger */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Music size={18} className="text-cyan-400" />
              <h3 className="font-heading italic text-2xl sm:text-3xl font-bold text-white">
                Music Cover Highlights & Media Archive
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50">
              CLICK ANY TRACK TO LAUNCH CINEMATIC PLAYER
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coversList.map((cover) => (
              <LiquidCard
                key={cover.id}
                variant="subtle"
                glow="none"
                hoverEffect={true}
                onClick={() => setSelectedVideo(cover)}
                className="p-6 flex flex-col justify-between group cursor-pointer border border-white/10 hover:border-cyan-500/40"
              >
                <div>
                  {/* Top Bar: Badge & Drink Pairing */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-cyan-500/15 border border-cyan-500/30 px-2.5 py-0.5 text-[10px] font-mono font-medium text-cyan-300 uppercase">
                      {cover.badge}
                    </span>
                    {cover.releaseDate && (
                      <span className="text-[11px] font-mono text-white/40">
                        {cover.releaseDate}
                      </span>
                    )}
                  </div>

                  {/* Title & Artist */}
                  <h4 className="font-heading italic text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {cover.title}
                  </h4>

                  <p className="text-xs font-mono text-white/60 mb-3">
                    Original by {cover.originalArtist || cover.artist}
                  </p>

                  <p className="text-xs text-white/75 font-body leading-relaxed mb-4">
                    {cover.description}
                  </p>

                  {/* Drink Pairing Note */}
                  <div className="liquid-glass p-2.5 rounded-xl border border-white/5 flex items-center gap-2 text-xs text-amber-200">
                    <Sparkles size={14} className="text-amber-300 shrink-0" />
                    <span className="truncate">{cover.sweetDrink}</span>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium">
                    <Play size={14} className="fill-current" />
                    <span>PLAY COVER</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40">
                    ID: {cover.youtubeId}
                  </span>
                </div>
              </LiquidCard>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};

export default ScheduleSection;

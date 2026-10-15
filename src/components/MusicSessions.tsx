import React from 'react';
import { Music, Play, Disc3, ExternalLink } from 'lucide-react';
import { MUSIC_COVERS, CoverItem } from '../data/suriData';

interface MusicSessionsProps {
  onPlayCover: (cover: CoverItem) => void;
}

export const MusicSessions: React.FC<MusicSessionsProps> = ({ onPlayCover }) => {
  return (
    <section id="music" className="relative min-h-screen py-24 bg-[#09080E] border-t border-lavender-400/20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-plum-800/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-roseAccent-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-charcoal-800 border border-lavender-400/30 text-lavender-200 font-display text-xs tracking-widest uppercase shadow-lg shadow-plum-900/30">
            <Music className="w-3.5 h-3.5 text-roseAccent-400" />
            <span>06 // TUYỂN TẬP CA KHÚC // COVER SESSIONS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-gothic tracking-wider text-ivory-100 uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            COVER <span className="text-roseAccent-400 text-glow-rose">SESSIONS</span>
          </h2>
          <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-lavender-300 max-w-xl mx-auto uppercase">
            NHỮNG GIAI ĐIỆU CHẠM ĐẾN TRÁI TIM — QUA GIỌNG HÁT SURI MUKEKI
          </p>
        </div>

        {/* Cover Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MUSIC_COVERS.map((cover, idx) => (
            <div
              key={cover.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-lavender-400/20 shadow-2xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Visual Cover Poster with Play Trigger */}
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden bg-charcoal-950 border border-lavender-400/20 cursor-pointer shadow-inner flex items-center justify-center group-hover:border-roseAccent-500/50 transition-colors"
                  onClick={() => onPlayCover(cover)}
                  title={`Phát bài hát: ${cover.title}`}
                >
                  {/* YouTube Thumbnail Background */}
                  <img
                    src={`https://img.youtube.com/vi/${cover.youtubeId}/hqdefault.jpg`}
                    alt={cover.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-charcoal-950/20 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-roseAccent-500 via-plum-700 to-lavender-500 p-0.5 shadow-[0_0_25px_rgba(157,83,105,0.7)] group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-[#110E18] rounded-full flex items-center justify-center">
                        <Play size={20} className="text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Badge & Track Number */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-charcoal-900/90 text-lavender-200 border border-lavender-400/30 uppercase tracking-widest backdrop-blur-sm">
                      {cover.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-charcoal-900/90 text-ivory-300 font-bold backdrop-blur-sm">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Track Information */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-lavender-400">
                    <span className="truncate">Nguyên tác: {cover.originalArtist}</span>
                    <span>{cover.releaseDate}</span>
                  </div>

                  <h3 className="text-xl font-gothic text-ivory-100 group-hover:text-roseAccent-300 transition-colors">
                    {cover.title}
                  </h3>

                  <p className="font-editorial text-sm text-ivory-300/85 leading-relaxed line-clamp-2">
                    {cover.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-lavender-400/15 flex items-center justify-between">
                <button
                  onClick={() => onPlayCover(cover)}
                  className="inline-flex items-center space-x-2 text-xs font-display tracking-widest uppercase text-roseAccent-400 hover:text-roseAccent-300 font-bold"
                >
                  <Disc3 size={15} className="animate-spin" />
                  <span>NGHE TRỰC TIẾP</span>
                </button>
                <a
                  href={`https://www.youtube.com/watch?v=${cover.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender-400 hover:text-white transition"
                  title="Mở trên YouTube"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

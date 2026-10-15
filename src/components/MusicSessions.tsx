import React from 'react';
import { Music, Play, Disc3, ExternalLink, Coffee } from 'lucide-react';
import { MUSIC_COVERS, CoverItem } from '../data/suriData';

interface MusicSessionsProps {
  onPlayCover: (cover: CoverItem) => void;
}

export const MusicSessions: React.FC<MusicSessionsProps> = ({ onPlayCover }) => {
  return (
    <section id="music" className="relative min-h-screen py-24 bg-[#FBF8F3] border-t border-taro-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-taro-200/35 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-berry-200/25 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-pudding-200/30 blur-[130px] rounded-full pointer-events-none" />

      {/* Floating Kawaii Musical Elements */}
      <div className="absolute top-20 right-12 text-3xl opacity-75 pointer-events-none select-none animate-float-slow">
        🎶
      </div>
      <div className="absolute bottom-24 left-12 text-3xl opacity-70 pointer-events-none select-none animate-float-soft">
        🍮
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs tracking-wider uppercase shadow-sm">
            <Music className="w-4 h-4 text-berry-500" />
            <span>06 // THỰC ĐƠN ÂM NHẠC & JUKEBOX // MUSIC SESSIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-sm">
            CAFE <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry-500 to-taro-500">JUKEBOX</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate-600 max-w-2xl mx-auto">
            Thưởng thức những bản cover ngọt ngào của Suri Mukeki, mỗi ca khúc được gửi gắm kèm một món thức uống đặc biệt từ tiệm cafe slime!
          </p>
        </div>

        {/* Music Covers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MUSIC_COVERS.map((cover, idx) => (
            <div
              key={cover.id}
              className="cafe-card cafe-card-hover rounded-4xl p-6 border border-taro-200/80 shadow-cafe flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Cute top corner badge */}
              <div className="space-y-4">
                {/* Visual Cover Poster with Play Trigger */}
                <div
                  className="relative aspect-video rounded-3xl overflow-hidden bg-taro-100/50 border border-taro-200 cursor-pointer shadow-inner flex items-center justify-center group-hover:border-berry-300 transition-colors"
                  onClick={() => onPlayCover(cover)}
                  title={`Phát bài hát: ${cover.title}`}
                >
                  {/* YouTube Thumbnail Background */}
                  <img
                    src={`https://img.youtube.com/vi/${cover.youtubeId}/hqdefault.jpg`}
                    alt={cover.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-chocolate-950/30 group-hover:bg-chocolate-950/15 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 p-1 shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-tr from-berry-500 to-taro-500 rounded-full flex items-center justify-center shadow-md">
                        <Play size={20} className="text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Badge & Track Number */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/95 text-chocolate-800 font-bold border border-taro-200 uppercase tracking-wider backdrop-blur-sm shadow-xs">
                      {cover.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-chocolate-900/80 text-white font-bold backdrop-blur-sm">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Track Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-chocolate-500">
                    <span className="truncate">Tác giả: {cover.originalArtist}</span>
                    <span>{cover.releaseDate}</span>
                  </div>

                  <h3 className="text-xl font-kawaii font-extrabold text-chocolate-900 group-hover:text-berry-600 transition-colors">
                    {cover.title}
                  </h3>

                  <p className="font-sans text-xs text-chocolate-600 leading-relaxed line-clamp-2">
                    {cover.description}
                  </p>
                </div>

                {/* Sweet Drink Pairing Tag */}
                {cover.sweetDrink && (
                  <div className="p-3 rounded-2xl bg-cream-100/90 border border-pudding-200/80 flex items-center space-x-2.5 text-xs text-chocolate-800">
                    <Coffee size={15} className="text-pudding-600 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-chocolate-500 block leading-tight font-bold">
                        MÓN NƯỚC KÈM THEO
                      </span>
                      <span className="font-kawaii font-bold text-chocolate-900">
                        {cover.sweetDrink}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-taro-200/70 flex items-center justify-between">
                <button
                  onClick={() => onPlayCover(cover)}
                  className="inline-flex items-center space-x-2 text-xs font-display tracking-wider uppercase text-berry-600 hover:text-berry-700 font-bold bubble-btn"
                >
                  <Disc3 size={15} className="animate-spin text-taro-500" />
                  <span>NGHE BÀI HÁT</span>
                </button>
                <a
                  href={`https://www.youtube.com/watch?v=${cover.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white hover:bg-taro-50 border border-taro-200 text-chocolate-600 hover:text-chocolate-900 transition shadow-xs"
                  title="Mở xem trên YouTube"
                >
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

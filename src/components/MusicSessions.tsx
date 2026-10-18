import React, { useState } from 'react';
import { Music, Play, Disc3, ExternalLink, Coffee, Sparkles, Volume2 } from 'lucide-react';
import { MUSIC_COVERS, CoverItem } from '../data/suriData';

interface MusicSessionsProps {
  onPlayCover: (cover: CoverItem) => void;
}

export const MusicSessions: React.FC<MusicSessionsProps> = ({ onPlayCover }) => {
  const [activeTrack, setActiveTrack] = useState<CoverItem>(MUSIC_COVERS[0]);

  const handleSelectTrack = (track: CoverItem) => {
    setActiveTrack(track);
  };

  return (
    <section id="music" className="relative py-28 bg-[#FAF7F2] border-t border-taro-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-taro-200/35 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-berry-200/25 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-taro-200 text-taro-700 font-display text-xs font-bold tracking-wider uppercase shadow-xs">
            <Music className="w-4 h-4 text-berry-500" />
            <span>06 // MÁY HÁT ĐĨA THAN // VINYL JUKEBOX LOUNGE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-kawaii font-extrabold tracking-tight text-chocolate-900 drop-shadow-xs">
            VINYL <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry-500 to-taro-500">JUKEBOX</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate-600 max-w-2xl mx-auto">
            Thưởng thức các bản nhạc cover từ quán cafe. Chọn bất kỳ bài hát nào để nghe và xem món thức uống đi kèm.
          </p>
        </div>

        {/* Vinyl Player Deck & Tracklist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Interactive Vinyl Player Deck (5 Cols) */}
          <div className="lg:col-span-5 cafe-card rounded-5xl p-8 border-4 border-taro-200 shadow-2xl space-y-6 flex flex-col items-center text-center relative overflow-hidden bg-gradient-to-b from-white to-[#FDFBF7]">
            {/* Audio Visualizer Bars at Top */}
            <div className="flex items-center space-x-1.5 h-6">
              {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-full bg-gradient-to-t from-taro-400 to-berry-400 animate-pulse"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 120}ms`,
                    animationDuration: '900ms',
                  }}
                />
              ))}
            </div>

            {/* Realistic Vinyl Disc Graphic */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#1A1820] p-3 shadow-2xl flex items-center justify-center border-4 border-chocolate-800">
              {/* Vinyl Grooves Texture */}
              <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                <div className="w-5/6 h-5/6 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-4/6 h-4/6 rounded-full border border-white/10 flex items-center justify-center">
                    {/* Center Vinyl Label with Thumbnail */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-md relative">
                      <img
                        src={`https://img.youtube.com/vi/${activeTrack.youtubeId}/hqdefault.jpg`}
                        alt={activeTrack.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-chocolate-950/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white border-2 border-chocolate-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <button
                onClick={() => onPlayCover(activeTrack)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-tr from-berry-500 to-taro-500 text-white flex items-center justify-center shadow-lg bubble-btn hover:scale-110 transition-transform"
                title={`Phát video: ${activeTrack.title}`}
              >
                <Play size={24} className="fill-white ml-1" />
              </button>
            </div>

            {/* Currently Selected Track Info */}
            <div className="space-y-2 w-full">
              <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-taro-100 text-taro-800 border border-taro-200 uppercase">
                {activeTrack.badge}
              </span>
              <h3 className="font-kawaii text-2xl font-extrabold text-chocolate-900 truncate">
                {activeTrack.title}
              </h3>
              <p className="text-xs font-mono text-chocolate-500">
                Nguyên tác: {activeTrack.originalArtist} • {activeTrack.releaseDate}
              </p>
            </div>

            {/* Sweet Drink Pairing Card */}
            {activeTrack.sweetDrink && (
              <div className="w-full p-4 rounded-3xl bg-cream-100/90 border border-pudding-200/90 flex items-center justify-center space-x-3 text-xs text-chocolate-800">
                <Coffee size={18} className="text-pudding-600 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-mono uppercase text-chocolate-500 block font-bold">
                    COMBO THỨC UỐNG ĐẶC TRƯNG
                  </span>
                  <span className="font-kawaii font-extrabold text-chocolate-900 text-sm">
                    {activeTrack.sweetDrink}
                  </span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 pt-2 w-full">
              <button
                onClick={() => onPlayCover(activeTrack)}
                className="flex-grow py-3 rounded-full text-xs font-display font-bold tracking-wider text-white uppercase bg-gradient-to-r from-taro-500 via-berry-400 to-pudding-400 hover:brightness-105 shadow-md transition-all bubble-btn flex items-center justify-center space-x-2"
              >
                <Disc3 size={16} className="animate-spin" />
                <span>PHÁT MV TRỰC TIẾP</span>
              </button>

              <a
                href={`https://www.youtube.com/watch?v=${activeTrack.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-cream-100 border border-taro-200 text-chocolate-700 shadow-sm transition bubble-btn"
                title="Mở trên YouTube"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT: Jukebox Playlist Menu (7 Cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center justify-between px-2 text-xs font-mono text-chocolate-500 mb-2">
              <span className="font-bold uppercase tracking-wider flex items-center space-x-1.5">
                <Volume2 size={15} className="text-berry-500" />
                <span>DANH SÁCH BẢN COVER (NHẤP ĐỂ ĐẶT ĐĨA LÊN MÁY HÁT)</span>
              </span>
              <span className="text-taro-700 font-bold bg-taro-100 px-2.5 py-0.5 rounded-full">
                {MUSIC_COVERS.length} Bài Hát
              </span>
            </div>

            <div className="space-y-3">
              {MUSIC_COVERS.map((cover, idx) => {
                const isSelected = cover.id === activeTrack.id;
                return (
                  <div
                    key={cover.id}
                    onClick={() => handleSelectTrack(cover)}
                    className={`w-full p-4 sm:p-5 rounded-3xl border-2 transition-all duration-300 bubble-btn cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white border-berry-400 shadow-cafe-lg scale-102 ring-2 ring-berry-200/50'
                        : 'bg-white/80 border-taro-200/80 hover:bg-white hover:border-taro-300 text-chocolate-700 shadow-sm'
                    }`}
                  >
                    {/* Left: Thumbnail & Number */}
                    <div className="flex items-center space-x-3.5 min-w-0">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-taro-100 shrink-0 border border-taro-200">
                        <img
                          src={`https://img.youtube.com/vi/${cover.youtubeId}/hqdefault.jpg`}
                          alt={cover.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-chocolate-950/20 flex items-center justify-center">
                          <Play size={14} className="text-white fill-white" />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs font-bold text-berry-600">
                            #{String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cream-100 text-chocolate-600 font-bold border border-taro-200 uppercase">
                            {cover.badge}
                          </span>
                        </div>

                        <h4 className="font-kawaii text-base sm:text-lg font-extrabold text-chocolate-900 truncate mt-0.5">
                          {cover.title}
                        </h4>

                        <p className="text-xs font-sans text-chocolate-500 truncate">
                          {cover.originalArtist} • {cover.releaseDate}
                        </p>
                      </div>
                    </div>

                    {/* Right: Drink Combo & Play Trigger */}
                    <div className="hidden sm:flex flex-col items-end text-right shrink-0">
                      <span className="text-[10px] font-mono text-chocolate-400 font-bold uppercase">MÓN NƯỚC:</span>
                      <span className="text-xs font-kawaii font-bold text-chocolate-800">
                        {cover.sweetDrink}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note on Bottom */}
            <div className="p-4 rounded-3xl bg-cream-50 border border-taro-200 flex items-center space-x-2 text-xs font-sans text-chocolate-600 mt-4">
              <Sparkles size={16} className="text-pudding-500 shrink-0" />
              <span>
                Toàn bộ ca khúc đều có thể mở xem trực tiếp video YouTube chính thức của Suri Mukeki bằng nút "PHÁT MV".
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

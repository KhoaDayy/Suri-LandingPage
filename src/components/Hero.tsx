import React, { useState } from 'react';
import { Eye, Coffee, Glasses, Sparkles, Heart, ChevronDown, Award, Calendar, Users } from 'lucide-react';
import { SURI_DATA } from '../data/suriData';

interface HeroProps {
  onOpenArtPreview: (imgUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenArtPreview }) => {
  const [useNoGlasses, setUseNoGlasses] = useState<boolean>(false);
  const [showVipModal, setShowVipModal] = useState<boolean>(false);

  const currentCutout = useNoGlasses
    ? SURI_DATA.assets.heroCutoutNoGlasses
    : SURI_DATA.assets.heroCutout;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#F7F2E9] flex flex-col justify-between pt-24 pb-8"
    >
      {/* Cinematic Ambient Glows & Soft Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-taro-200/35 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[550px] h-[550px] bg-berry-200/25 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-24 left-10 w-[450px] h-[450px] bg-pudding-200/30 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Floating Cafe Icons */}
      <div className="absolute top-28 left-8 text-2xl lg:text-3xl animate-float-soft pointer-events-none select-none opacity-80">
        🍮
      </div>
      <div className="absolute top-44 right-14 text-2xl lg:text-3xl animate-float-slow pointer-events-none select-none opacity-75">
        🦋
      </div>
      <div className="absolute bottom-28 left-16 text-2xl lg:text-3xl animate-wiggle-gentle pointer-events-none select-none opacity-70">
        🌸
      </div>
      <div className="absolute bottom-36 right-20 text-2xl lg:text-3xl animate-float-soft pointer-events-none select-none opacity-80">
        🍰
      </div>

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 z-20 my-auto">
        {/* Left Column: Editorial Headline & Narrative */}
        <div className="w-full lg:w-7/12 space-y-6 text-center lg:text-left pt-2 lg:pt-0">
          {/* Status Capsule Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-taro-200 text-taro-700 shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-pudding-400 animate-ping" />
            <span className="font-display text-xs font-bold tracking-wider uppercase">
              ✦ OFFICIAL CHARACTER SHOWCASE • BÉ SLIME HỆ NƯỚC
            </span>
          </div>

          {/* Main Massive Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-kawaii font-extrabold tracking-tight text-chocolate-900 leading-[1.05] drop-shadow-xs">
              SURI <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry-500 via-taro-500 to-pudding-500">MUKEKI</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <span className="font-display text-sm sm:text-base font-bold tracking-wider text-taro-700 uppercase bg-taro-100/70 px-3 py-1 rounded-full">
                {SURI_DATA.title}
              </span>
              <span className="text-berry-400 text-sm">✦</span>
              <span className="font-story text-sm sm:text-base font-bold tracking-widest text-chocolate-600">
                {SURI_DATA.japaneseName}
              </span>
            </div>
          </div>

          {/* Emotional Quote Card */}
          <div className="relative bg-white/80 p-5 sm:p-6 rounded-3xl border border-taro-200/80 shadow-cafe max-w-2xl mx-auto lg:mx-0">
            <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-cream-100 border border-pudding-200 text-[10px] font-mono font-bold text-chocolate-500 uppercase tracking-widest">
              LỜI TÂM TÌNH TỪ CÔ CHỦ TIỆM
            </div>
            <p className="text-chocolate-800 text-base sm:text-lg font-story leading-relaxed italic">
              "{SURI_DATA.quote}"
            </p>
          </div>

          {/* Interactive Feature Controls: Glasses Toggle & VIP Stats Pill */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            {/* Glasses Toggle */}
            <button
              onClick={() => setUseNoGlasses(!useNoGlasses)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl border font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 bubble-btn shadow-sm ${
                useNoGlasses
                  ? 'bg-berry-50 border-berry-300 text-berry-600 ring-2 ring-berry-200/50'
                  : 'bg-white border-taro-200 text-chocolate-700 hover:bg-taro-50'
              }`}
              title="Chuyển đổi kiểu mắt kính của Model 3.0"
            >
              <Glasses size={16} className={useNoGlasses ? 'text-berry-500' : 'text-taro-600'} />
              <span>{useNoGlasses ? 'Mắt Biếc Không Kính 🌸' : 'Kính Gọng Tri Thức 👓'}</span>
            </button>

            {/* Quick VIP Card Drawer Trigger */}
            <button
              onClick={() => setShowVipModal(true)}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-cream-100 border border-taro-200 text-chocolate-700 font-display text-xs font-bold tracking-wider uppercase transition-all bubble-btn shadow-sm"
              title="Xem thông tin chi tiết hồ sơ nhân vật"
            >
              <Award size={16} className="text-pudding-500" />
              <span>Xem Thẻ Hội Viên VIP 👑</span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#motifs"
              className="px-8 py-3.5 rounded-full text-xs font-display font-bold tracking-wider text-white uppercase bg-gradient-to-r from-taro-500 via-berry-400 to-pudding-400 hover:brightness-105 shadow-md shadow-taro-400/30 transition-all duration-300 flex items-center space-x-2 bubble-btn"
            >
              <Coffee size={16} />
              <span>KHÁM PHÁ TIỆM CAFE</span>
            </a>

            <button
              onClick={() => onOpenArtPreview(currentCutout)}
              className="px-6 py-3.5 rounded-full text-xs font-display font-bold tracking-wider text-chocolate-700 uppercase bg-white hover:bg-cream-100 border border-taro-200 transition-all duration-300 flex items-center space-x-2 shadow-xs bubble-btn"
            >
              <Eye size={15} className="text-taro-500" />
              <span>PHÓNG TO TRANH GỐC</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Character Presentation Stage */}
        <div className="w-full lg:w-5/12 flex flex-col items-center justify-center relative">
          {/* Luminous Multi-tone Halo Background */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-pudding-200/50 via-taro-200/40 to-berry-200/40 absolute blur-3xl pointer-events-none" />

          {/* Character Stage with Floating Badges */}
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Top Floating Badge: Current Form */}
            <div className="absolute top-4 -left-2 sm:left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 border border-taro-200 shadow-md backdrop-blur-md text-[11px] font-mono font-bold text-chocolate-800 flex items-center space-x-1.5 animate-float-slow">
              <Sparkles size={13} className="text-pudding-500" />
              <span>Model 3.0 Active</span>
            </div>

            {/* Bottom Floating Badge: Creators */}
            <div className="absolute bottom-10 -right-2 sm:right-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 border border-taro-200 shadow-md backdrop-blur-md text-[11px] font-mono font-bold text-chocolate-800 flex items-center space-x-1.5 animate-float-soft">
              <Heart size={13} className="text-berry-500 fill-berry-500" />
              <span>Papa: T_blence • Mama: Sophiel</span>
            </div>

            {/* Transparent High-Res Cutout */}
            <img
              src={currentCutout}
              alt="Suri Mukeki Model 3.0 Key Visual"
              className="max-h-[520px] sm:max-h-[620px] w-auto object-contain filter drop-shadow-[0_20px_35px_rgba(43,35,56,0.18)] animate-float-soft cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
              onClick={() => onOpenArtPreview(currentCutout)}
              title="Nhấp để phóng to tranh gốc toàn màn hình"
            />

            {/* Subtitle Caption */}
            <div className="mt-2 text-center">
              <span className="text-[11px] font-display font-bold tracking-wider text-chocolate-500 uppercase bg-white/90 px-4 py-1.5 rounded-full border border-taro-200 shadow-xs">
                {useNoGlasses ? 'Tạo hình tháo kính mắt' : 'Tạo hình đeo kính trí thức tiêu chuẩn'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Anchor */}
      <div className="relative z-20 flex justify-center pt-2">
        <a
          href="#motifs"
          className="flex flex-col items-center space-y-1 text-chocolate-500 hover:text-taro-600 transition group"
        >
          <span className="text-[10px] font-display font-bold tracking-widest uppercase">KHÁM PHÁ CÁC MỤC BÊN DƯỚI</span>
          <ChevronDown size={18} className="animate-bounce text-berry-500 group-hover:text-berry-600" />
        </a>
      </div>

      {/* VIP Card Modal / Drawer */}
      {showVipModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-chocolate-950/75 backdrop-blur-md animate-fade-in"
          onClick={() => setShowVipModal(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-5xl p-6 sm:p-8 border-2 border-taro-200 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-taro-100 pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🍮</span>
                <div>
                  <h3 className="font-kawaii text-2xl font-extrabold text-chocolate-900">
                    THẺ HỘI VIÊN VIP QUÁN CAFE
                  </h3>
                  <p className="text-xs font-mono text-taro-600 font-bold">
                    MÃ SỐ: SUREIYA-VIP-001 • SURI MUKEKI
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowVipModal(false)}
                className="w-9 h-9 rounded-full bg-cream-100 hover:bg-berry-100 text-chocolate-700 hover:text-berry-700 flex items-center justify-center transition font-bold"
              >
                ✕
              </button>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-display text-xs">
              <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1">
                  <Calendar size={12} className="text-berry-500" />
                  <span>SINH NHẬT</span>
                </div>
                <div className="text-chocolate-900 font-extrabold text-sm">{SURI_DATA.profile.birthday}</div>
                <div className="text-taro-600 font-semibold text-[11px]">{SURI_DATA.profile.zodiac}</div>
              </div>

              <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">CHIỀU CAO</div>
                <div className="text-chocolate-900 font-extrabold text-sm">{SURI_DATA.profile.height}</div>
                <div className="text-taro-600 font-semibold text-[11px]">{SURI_DATA.profile.weight}</div>
              </div>

              <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">NGÀY DEBUT</div>
                <div className="text-chocolate-900 font-extrabold text-sm">{SURI_DATA.profile.debutDate}</div>
                <div className="text-mint-600 font-semibold text-[11px]">Independent VTuber</div>
              </div>

              <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1">
                  <Users size={12} className="text-taro-500" />
                  <span>FANBASE</span>
                </div>
                <div className="text-chocolate-900 font-extrabold text-sm">{SURI_DATA.profile.fanName}</div>
                <div className="text-berry-500 font-semibold text-[11px]">{SURI_DATA.profile.representativeEmojis}</div>
              </div>

              <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">NGUYÊN TỐ</div>
                <div className="text-chocolate-900 font-extrabold text-sm">Thủy Slime & Lôi Irus</div>
                <div className="text-taro-600 font-semibold text-[11px]">Lưỡng nguyên dị giới</div>
              </div>

              <div className="p-3.5 bg-cream-100/90 border border-pudding-200 rounded-2xl space-y-1">
                <div className="text-chocolate-400 text-[10px] font-bold tracking-wider uppercase">HASHTAG LIVE</div>
                <div className="text-berry-600 font-extrabold text-sm">{SURI_DATA.profile.hashtags.live}</div>
                <div className="text-mint-600 font-semibold text-[11px]">{SURI_DATA.profile.hashtags.fanart}</div>
              </div>
            </div>

            {/* Favorite Treats */}
            <div className="p-4 rounded-2xl bg-cream-100 border border-taro-200/60">
              <span className="text-[10px] font-bold text-chocolate-400 uppercase tracking-wider block mb-1.5">
                MÓN KHOÁI KHẨU CỦA CÔ CHỦ TIỆM:
              </span>
              <div className="flex flex-wrap gap-2">
                {SURI_DATA.profile.favoriteTreats.map((treat) => (
                  <span
                    key={treat}
                    className="px-3 py-1 rounded-full bg-white text-chocolate-700 font-display text-xs font-bold border border-taro-200 shadow-xs"
                  >
                    {treat}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowVipModal(false)}
                className="px-6 py-2.5 rounded-full bg-taro-600 hover:bg-taro-700 text-white font-display text-xs font-bold tracking-wider uppercase transition shadow-sm bubble-btn"
              >
                Đã hiểu, quay lại xem trang
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

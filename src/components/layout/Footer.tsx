import React, { useState, useRef, useEffect } from 'react';
import {
  Youtube,
  Twitter,
  MessageSquare,
  Sparkles,
  Facebook,
  ExternalLink,
  Heart,
  ArrowUp,
  Mail,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import { SOCIAL_LINKS, NAV_LINKS, CONTACT_INFO } from '../../data/suriData';
import { TiltCard } from '../effects/TiltCard';
import { TikTokIcon } from '../Icons';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = async () => {
    let success = false;
    try {
      if (typeof window !== 'undefined' && navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CONTACT_INFO.email);
        success = true;
      } else {
        // Fallback for non-secure contexts / legacy environments
        const textArea = document.createElement('textarea');
        textArea.value = CONTACT_INFO.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      success = false;
    }

    if (success) {
      setCopied(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2200);
    } else {
      // Graceful degradation: navigate directly to mailto
      window.location.href = CONTACT_INFO.mailto;
    }
  };

  const socialIcons: Record<string, React.ReactNode> = {
    YouTube: <Youtube size={17} className="text-[#FF4B4B]" />,
    Facebook: <Facebook size={17} className="text-[#315D9C]" />,
    'X (Twitter)': <Twitter size={17} className="text-[#75B8E6]" />,
    Discord: <MessageSquare size={17} className="text-[#7660A7]" />,
    TikTok: <TikTokIcon size={17} className="text-[#00F2FE]" />,
    Marshmallow: <Sparkles size={17} className="text-[#FF79AC]" />,
  };

  const officialHashtags = [
    { tag: '#SuriMukeki', label: 'Chung & Chính thức', category: 'Chính thức' },
    { tag: '#Suristream', label: 'Phát sóng trực tiếp', category: 'Phát sóng' },
    { tag: '#Surillust', label: 'Tranh vẽ & Sáng tạo', category: 'Fanart' },
    { tag: '#Sureiya', label: 'Cộng đồng người hâm mộ', category: 'Cộng đồng' },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-[#1A1D24] dark:bg-[#111215] text-[#E2E8F0] dark:text-[#A1A6B3] overflow-hidden pt-16 sm:pt-20 pb-12 border-t border-[#C9A95C]/20 dark:border-[#D4B86A]/20 transition-colors duration-300"
    >
      {/* Background Celestial Line Art */}
      <div className="absolute inset-0 bg-celestial-wave opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">

        {/* =====================================================================
            TOP HEADER ROW: BRAND IDENTITY & RETURN TO TOP
           ===================================================================== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10 dark:border-white/[0.08]">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="h-14 sm:h-16 flex items-center justify-center shrink-0">
              <img
                src="/images/icons/logo_suri.png"
                alt="Suri Mukeki Logo"
                className="h-full w-auto max-w-[160px] sm:max-w-[200px] object-contain drop-shadow-[0_4px_16px_rgba(117,184,230,0.3)]"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display font-bold text-2xl text-white dark:text-[#ECEBE6] tracking-tight">
                  SURI MUKEKI
                </h3>
                <span className="font-sans text-xs text-[#C9A95C] dark:text-[#D4B86A] font-medium tracking-wider">
                  無敵スリ
                </span>
              </div>
              <p className="font-sans text-xs text-white/60 dark:text-[#7A808E] mt-0.5 max-w-md">
                Suri Mukeki • VTuber Việt Nam hoạt động độc lập • Sứ Giả Suwi & Tiệm Cafe 3D.
              </p>
            </div>
          </div>

          {/* Navigation Links & Scroll to Top */}
          <div className="flex flex-wrap items-center gap-3">
            <nav className="flex flex-wrap items-center gap-1 font-sans text-xs" aria-label="Footer Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-white/70 dark:text-[#A1A6B3] hover:text-white dark:hover:text-[#ECEBE6] hover:bg-white/10 dark:hover:bg-white/[0.06] transition-colors duration-180"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 dark:bg-[#1B1D21] text-white dark:text-[#ECEBE6] border border-white/20 dark:border-white/[0.08] hover:bg-[#C9A95C] dark:hover:bg-[#D4B86A] hover:text-[#1A1D24] dark:hover:text-[#141517] hover:scale-105 transition-all duration-180 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
              aria-label="Về đầu trang"
              title="Về đầu trang"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* =====================================================================
            SPECIAL SECTION: OFFICIAL CONTACT & SOCIAL "CARRD"
            (Digital Business & Link-in-Bio Cardd Hub)
           ===================================================================== */}
        <div className="rounded-3xl border border-[#C9A95C]/30 dark:border-[#D4B86A]/25 bg-gradient-to-b from-[#222631]/90 to-[#181A20]/95 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Water/Gold Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#75B8E6]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[#C9A95C]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Carrd Header Persona Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="/images/suri/profile-avatar.webp"
                    alt="Suri Mukeki Avatar"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-[#C9A95C]/50 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#1A1D24]" title="Hoạt động" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#C9A95C] dark:text-[#D4B86A]">
                      Danh thiếp & Kênh liên hệ
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                    Suri Mukeki (無敵スリ)
                  </h4>
                  <p className="font-sans text-xs text-white/70 mt-0.5">
                    VTuber Độc Lập • Slime Nước • Quán Cafe 3D & Sứ Giả Suwi
                  </p>
                </div>
              </div>

              {/* Status Pill */}
              <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-xs flex items-center gap-2 self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Nhận hợp tác & sự kiện</span>
              </div>
            </div>

            {/* Email Contact Feature Card (Prominent Callout) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A95C]/50 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#75B8E6] uppercase tracking-wider">
                    <Mail size={14} />
                    <span>Hòm thư công việc</span>
                  </div>
                  <div className="flex items-center gap-3 pt-0.5">
                    <a
                      href={CONTACT_INFO.mailto}
                      className="font-mono text-base sm:text-lg font-bold text-white hover:text-[#75B8E6] transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  <p className="font-sans text-xs text-white/60 pt-0.5 max-w-xl leading-relaxed">
                    {CONTACT_INFO.businessNote}
                  </p>
                </div>

                {/* Email Action Buttons */}
                <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-semibold border border-white/15 transition-all duration-180 cursor-pointer shadow-xs active:scale-95"
                    aria-label="Sao chép địa chỉ email"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-300">Đã sao chép!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Sao chép email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={CONTACT_INFO.mailto}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#315D9C] hover:bg-[#254677] text-white font-sans text-xs font-semibold shadow-xs transition-all duration-180 cursor-pointer active:scale-95"
                  >
                    <Send size={14} />
                    <span>Gửi thư</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Follow Me Links (Carrd Button Grid) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-[#75B8E6] dark:text-[#79ACE0] uppercase tracking-wider block">
                  Kênh theo dõi chính thức
                </span>
                <span className="font-mono text-[11px] text-white/40">
                  {SOCIAL_LINKS.length} kênh kết nối
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {SOCIAL_LINKS.map((social) => (
                  <TiltCard key={social.platform} className="rounded-2xl h-full" maxTilt={5}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-glass dark:bg-[#181A1E] dark:border-white/[0.08] p-4 rounded-2xl flex items-center justify-between group hover:border-[#C9A95C] dark:hover:border-[#D4B86A]/70 hover:shadow-md transition-all duration-200 h-full bg-white/[0.03] border border-white/10"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-[#22252B] border border-white/10 dark:border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                          {socialIcons[social.platform] || <ExternalLink size={16} />}
                        </div>
                        <div className="min-w-0">
                          <span className="font-sans text-sm font-semibold text-white dark:text-[#ECEBE6] block group-hover:text-[#C9A95C] dark:group-hover:text-[#D4B86A] transition-colors duration-180 truncate">
                            {social.platform}
                          </span>
                          <span className="font-sans text-xs text-white/50 dark:text-[#7A808E] block truncate mt-0.5">
                            {social.handle}
                          </span>
                        </div>
                      </div>

                      <ExternalLink
                        size={15}
                        className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-2"
                      />
                    </a>
                  </TiltCard>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================================
            OFFICIAL HASHTAG INDEX
           ===================================================================== */}
        <div className="space-y-3">
          <span className="font-sans text-xs font-semibold text-[#C9A95C] dark:text-[#D4B86A] block uppercase tracking-wider">
            Hashtag chính thức
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {officialHashtags.map((ht) => (
              <div
                key={ht.tag}
                className="p-3.5 rounded-2xl bg-white/5 dark:bg-[#181A1E] border border-white/10 dark:border-white/[0.08] flex items-center justify-between"
              >
                <div>
                  <span className="font-sans text-sm font-semibold text-white dark:text-[#ECEBE6] block">
                    {ht.tag}
                  </span>
                  <span className="font-sans text-xs text-white/60 dark:text-[#A1A6B3] block mt-0.5">
                    {ht.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            BOTTOM CREDITS & COPYRIGHT
           ===================================================================== */}
        <div className="pt-6 border-t border-white/10 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50 dark:text-[#7A808E]">
          <p>© 2021 - 2026 Suri Mukeki (無敵スリ). Bảo lưu mọi quyền.</p>
          <p className="flex items-center gap-1.5">
            Đồng hành cùng cộng đồng <span className="text-white dark:text-[#ECEBE6] font-semibold">Sureiya & Slayers</span> với
            <Heart size={13} className="text-[#FF4B4B] fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

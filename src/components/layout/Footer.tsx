import React from 'react';
import {
  Youtube,
  Twitter,
  MessageSquare,
  Globe,
  Sparkles,
  Facebook,
  ExternalLink,
  Heart,
  ArrowUp,
  Radio,
} from 'lucide-react';
import { SURI_DATA, SOCIAL_LINKS, NAV_LINKS, CREDITS_DATA } from '../../data/suriData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons: Record<string, React.ReactNode> = {
    YouTube: <Youtube size={18} className="fill-[#282436] text-[#282436]" />,
    'X (Twitter)': <Twitter size={18} className="text-[#282436]" />,
    Discord: <MessageSquare size={18} className="text-[#282436]" />,
    Carrd: <Globe size={18} className="text-[#282436]" />,
    Facebook: <Facebook size={18} className="text-[#282436]" />,
    Marshmallow: <Sparkles size={18} className="text-[#282436]" />,
  };

  const officialHashtags = [
    { tag: '#SuriMukeki', label: 'General / Thông tin chung', category: 'Official', bg: 'bg-[#FF79AC]' },
    { tag: '#Suristream', label: 'Livestreams / Phát sóng', category: 'Broadcast', bg: 'bg-[#65E4E0]' },
    { tag: '#SuriArt', label: 'Fanart Showcase / Tranh vẽ', category: 'Creative', bg: 'bg-[#FFE36E]' },
    { tag: '#Sureiya', label: 'Fanbase & Community / Người hâm mộ', category: 'Community', bg: 'bg-[#B7A1FF]' },
  ];

  return (
    <footer className="relative bg-[#282436] text-[#FFF5EE] overflow-hidden pt-20 pb-14 border-t-4 border-[#282436]">
      {/* Background Halftone Pattern */}
      <div className="absolute inset-0 bg-halftone-pink opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Top Tier: Giant Brand Headline, Quick Navigation & Scroll to Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b-2 border-white/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#65E4E0] border-3 border-[#FFF5EE] p-1 flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#FF79AC]">
              <img
                src="/images/icons/logo_suri.png"
                alt="Suri Mukeki Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#FFE36E] tracking-tight">
                  SURI MUKEKI
                </h3>
                <span className="font-display text-xs text-[#282436] font-bold px-2.5 py-1 rounded-md bg-[#FF79AC] border border-white">
                  無敵スリ
                </span>
              </div>
              <p className="font-mono text-xs text-white/70 mt-1 max-w-md">
                {SURI_DATA.alias} • Independent Virtual YouTuber connecting hearts worldwide with sweet energy.
              </p>
            </div>
          </div>

          {/* Navigation Links & Return To Top Rocket Button */}
          <div className="flex flex-wrap items-center gap-3">
            <nav className="flex flex-wrap items-center gap-2 font-display text-xs" aria-label="Footer Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#FFE36E] hover:text-[#282436] transition-colors border border-white/20"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-[#FFE36E] text-[#282436] border-2 border-[#FFF5EE] shadow-[3px_3px_0px_#FF79AC] hover:scale-105 transition-all cursor-pointer"
              aria-label="Scroll to top of page"
              title="Return to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Official Channels & Community Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-display text-sm font-bold text-[#65E4E0]">
              <Radio size={16} />
              <span>OFFICIAL CHANNELS & COMMUNITY MATRIX</span>
            </div>
            <span className="font-mono text-xs text-white/50">Verified Profiles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title={`${link.platform} - ${link.label}`}
              >
                <div className="p-4 rounded-xl bg-[#FFF5EE] text-[#282436] border-2 border-[#282436] shadow-[4px_4px_0px_#FFE36E] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[6px_6px_0px_#FF79AC] transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFE36E] border-2 border-[#282436] flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                      {socialIcons[link.platform] || <Sparkles size={18} />}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-[#282436] group-hover:text-[#FF79AC] transition-colors">
                        {link.platform}
                      </div>
                      <div className="font-mono text-xs text-[#282436]/60">
                        {link.handle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-[#282436]/40 group-hover:text-[#282436] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Official Community Hashtags */}
        <div className="p-6 rounded-2xl bg-[#FFF5EE] text-[#282436] border-3 border-[#282436] shadow-[5px_5px_0px_#FF79AC]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="font-display text-sm font-black text-[#282436] block">
                ★ OFFICIAL COMMUNITY HASHTAGS
              </span>
              <p className="font-mono text-xs text-[#282436]/70 mt-0.5">
                Sử dụng các hashtag sau trên X (Twitter), YouTube và cộng đồng để chia sẻ fanart và khoảnh khắc stream.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {officialHashtags.map((item) => (
                <div
                  key={item.tag}
                  className={`px-3.5 py-1.5 rounded-xl ${item.bg} text-[#282436] border-2 border-[#282436] shadow-[2px_2px_0px_#282436] font-display text-xs font-bold flex items-center gap-2`}
                >
                  <span>{item.tag}</span>
                  <span className="font-mono text-[10px] text-[#282436]/60 hidden sm:inline">
                    • {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Artisan Design & Rigging Credits */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-display text-sm font-bold text-[#FFE36E]">
              <Sparkles size={16} />
              <span>ARTISAN DESIGN & KINEMATICS CREDITS</span>
            </div>
            <span className="font-mono text-xs text-white/50">Model 3.0 & Genesis Rigs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {CREDITS_DATA.map((credit) => (
              <div
                key={credit.role}
                className="p-4 rounded-xl bg-white/10 border border-white/20"
              >
                <div className="border-b border-white/10 pb-2 mb-2 font-mono">
                  <span className="font-bold text-xs text-[#FFE36E] block">{credit.role}</span>
                  <span className="text-[10px] text-white/50 block">{credit.label}</span>
                </div>
                <ul className="space-y-1.5 font-mono text-xs">
                  {credit.people.map((person) => (
                    <li key={person.name} className="flex flex-col">
                      {person.url ? (
                        <a
                          href={person.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#65E4E0] hover:text-[#FFE36E] inline-flex items-center gap-1 font-semibold transition-colors"
                        >
                          <span>{person.name}</span>
                          <ExternalLink size={10} />
                        </a>
                      ) : (
                        <span className="text-white/80 font-medium">{person.name}</span>
                      )}
                      {person.note && (
                        <span className="text-[10px] text-white/40">{person.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-white/60 gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Heart size={14} className="text-[#FF79AC] fill-[#FF79AC]" />
            <span>TRI ÂN & LƯU TRỮ VỀ VTUBER SURI MUKEKI • FAN-CREATED ARCHIVE</span>
          </div>
          <div>
            <span>© 2021–2026 Suri Mukeki Project. All art, character & music belong to Suri Mukeki & respective creators.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

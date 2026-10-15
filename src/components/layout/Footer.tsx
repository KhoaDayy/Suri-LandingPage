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
  ShieldCheck,
  Radio,
} from 'lucide-react';
import { SURI_DATA, SOCIAL_LINKS, NAV_LINKS, CREDITS_DATA } from '../../data/suriData';
import { LiquidCard } from '../ui/LiquidCard';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons: Record<string, React.ReactNode> = {
    YouTube: <Youtube size={18} className="text-red-500" />,
    'X (Twitter)': <Twitter size={18} className="text-sky-400" />,
    Discord: <MessageSquare size={18} className="text-indigo-400" />,
    Carrd: <Globe size={18} className="text-cyan-400" />,
    Facebook: <Facebook size={18} className="text-blue-500" />,
    Marshmallow: <Sparkles size={18} className="text-pink-400" />,
  };

  const officialHashtags = [
    { tag: '#SuriMukeki', label: 'General / Thông tin chung', category: 'Official' },
    { tag: '#Suristream', label: 'Livestreams / Phát sóng', category: 'Broadcast' },
    { tag: '#SuriArt', label: 'Fanart Showcase / Tranh vẽ', category: 'Creative' },
    { tag: '#Sureiya', label: 'Fanbase & Community / Người hâm mộ', category: 'Community' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden text-white pt-16 pb-12">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl opacity-60"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Top Tier: Identity, Quick Links & Scroll to Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand Identity */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl liquid-glass-strong border border-white/20 p-1 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/10">
              <img
                src="/images/icons/logo_suri.png"
                alt="Suri Mukeki Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading italic font-bold text-2xl text-white tracking-wide">
                  SURI MUKEKI
                </h3>
                <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                  無敵スリ
                </span>
              </div>
              <p className="text-xs font-mono text-white/60 mt-1 max-w-md">
                {SURI_DATA.alias} • Proudly independent Vietnamese VTuber connecting hearts worldwide.
              </p>
            </div>
          </div>

          {/* Navigation Anchor Links & Scroll to top */}
          <div className="flex flex-wrap items-center gap-3">
            <nav className="flex flex-wrap items-center gap-1 font-mono text-xs" aria-label="Footer Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full liquid-glass border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:scale-105"
              aria-label="Scroll to top of page"
              title="Return to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Social Platforms Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Radio size={14} />
              <span>Official Channels & Community Matrix</span>
            </h4>
            <span className="text-[11px] font-mono text-white/40">Verified Profiles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title={`${social.platform} - ${social.label}`}
              >
                <LiquidCard
                  variant="subtle"
                  glow="none"
                  hoverEffect={true}
                  className="p-4 border border-white/10 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        {socialIcons[social.platform] || <ExternalLink size={16} />}
                      </div>
                      <div>
                        <div className="font-mono font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                          {social.platform}
                        </div>
                        <div className="font-mono text-[11px] text-white/50">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-white/30 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </LiquidCard>
              </a>
            ))}
          </div>
        </div>

        {/* Official Community Hashtags */}
        <div className="liquid-glass rounded-2xl border border-white/10 p-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                Official Community Hashtags
              </span>
              <p className="text-[11px] font-mono text-white/50">
                Use these tags across Twitter/X, YouTube, and Facebook to share creations and stream highlights.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {officialHashtags.map((item) => (
                <div
                  key={item.tag}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors group cursor-default"
                >
                  <span className="font-mono font-bold text-xs text-cyan-300 group-hover:text-white transition-colors">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Creator Artisan Credits */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <Sparkles size={14} />
              <span>Artisan Design & Kinematics Credits</span>
            </h4>
            <span className="text-[11px] font-mono text-white/40">Model 3.0 & Genesis Rigs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CREDITS_DATA.map((group) => (
              <LiquidCard
                key={group.role}
                variant="subtle"
                glow="none"
                className="p-4 border border-white/10"
              >
                <div className="border-b border-white/10 pb-2 mb-2.5">
                  <span className="font-mono font-bold text-xs text-white block">
                    {group.role}
                  </span>
                  <span className="font-mono text-[10px] text-white/50 block">
                    {group.label}
                  </span>
                </div>
                <ul className="space-y-2 text-xs font-mono">
                  {group.people.map((person) => (
                    <li key={person.name} className="flex flex-col">
                      {person.url ? (
                        <a
                          href={person.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1 font-semibold transition-colors"
                        >
                          <span>{person.name}</span>
                          <ExternalLink size={11} />
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
              </LiquidCard>
            ))}
          </div>
        </div>

        {/* Legal, Fan Tribute & Copyright Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Heart size={14} className="text-red-500 fill-red-500 shrink-0" />
            <span>TRI ÂN & LƯU TRỮ VỀ VTUBER SURI MUKEKI • FAN-CREATED ARCHIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-cyan-400 shrink-0" />
            <span>ART, CHARACTER & MUSIC BELONG TO SURI MUKEKI & RESPECTIVE CREATORS</span>
          </div>
          <div>
            <span>© 2021–2026 Suri Mukeki Project. Independent VTuber Showcase.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

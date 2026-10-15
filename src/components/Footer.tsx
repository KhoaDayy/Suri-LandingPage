import React from 'react';
import { Youtube, Twitter, ExternalLink, Heart, Sparkles, MessageSquare, Globe, Facebook } from 'lucide-react';
import { SURI_DATA, CREDITS_DATA } from '../data/suriData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050407] border-t border-lavender-400/20 py-16 font-display text-xs text-lavender-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Brand & Socials Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-lavender-400/15">
          {/* Identity */}
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-roseAccent-500 via-plum-700 to-lavender-400 p-0.5 shadow-[0_0_20px_rgba(157,83,105,0.4)] flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#0E0C12] rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={SURI_DATA.assets.portrait}
                  alt="Suri Mukeki"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-gothic text-xl sm:text-2xl text-ivory-100 font-bold tracking-wider drop-shadow-[0_2px_12px_rgba(157,83,105,0.5)]">
                {SURI_DATA.displayName}
              </h3>
              <p className="text-lavender-300 font-editorial text-sm sm:text-base italic flex items-center space-x-2 justify-center md:justify-start mt-0.5">
                <span>{SURI_DATA.title}</span>
                <span className="text-roseAccent-400 text-xs">✦</span>
                <span className="text-ivory-300">{SURI_DATA.japaneseName}</span>
              </p>
            </div>
          </div>

          {/* Social Platform Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2.5" aria-label="Official Social Channels">
            <a
              href={SURI_DATA.officialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/20 hover:border-roseAccent-400 text-ivory-200 hover:text-white transition group flex items-center space-x-2"
              title="YouTube @surimukeki"
            >
              <Youtube size={17} className="text-roseAccent-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono">YouTube</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/20 hover:border-roseAccent-400 text-ivory-200 hover:text-white transition group flex items-center space-x-2"
              title="Twitter / X @SuriMukeki"
            >
              <Twitter size={17} className="text-waterCyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono">Twitter / X</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/20 hover:border-roseAccent-400 text-ivory-200 hover:text-white transition group flex items-center space-x-2"
              title="Discord Suri Solo Leveling"
            >
              <MessageSquare size={17} className="text-lavender-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono">Discord</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.carrd}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/20 hover:border-roseAccent-400 text-ivory-200 hover:text-white transition group flex items-center space-x-2"
              title="Carrd Portfolio"
            >
              <Globe size={17} className="text-lavender-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono">Carrd</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.marshmallow}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/20 hover:border-roseAccent-400 text-ivory-200 hover:text-white transition group flex items-center space-x-2"
              title="Marshmallow Q&A"
            >
              <Sparkles size={17} className="text-roseAccent-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono">Marshmallow</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-charcoal-800 hover:bg-plum-800 border border-lavender-400/20 hover:border-roseAccent-400 text-ivory-200 hover:text-white transition group flex items-center space-x-2"
              title="Facebook Fanpage"
            >
              <Facebook size={17} className="text-waterCyan-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono">Facebook</span>
            </a>
          </nav>
        </div>

        {/* Credits Section */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-xs text-roseAccent-400 tracking-widest uppercase">
              NHỮNG TÁC GIẢ TẠO HÌNH & ĐỒNG HÀNH
            </p>
            <h4 className="text-2xl font-gothic text-ivory-100 uppercase tracking-wide">
              Credits & Special Thanks
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDITS_DATA.map((group) => (
              <div key={group.role} className="p-5 rounded-2xl bg-charcoal-900/80 border border-lavender-400/15 space-y-3">
                <div className="border-b border-lavender-400/15 pb-2">
                  <h5 className="font-gothic text-sm font-bold text-ivory-100">{group.role}</h5>
                  <p className="text-[11px] text-lavender-400">{group.label}</p>
                </div>
                <ul className="space-y-2 text-xs font-mono">
                  {group.people.map((p) => (
                    <li key={p.name} className="flex flex-col">
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ivory-200 hover:text-roseAccent-400 flex items-center space-x-1 transition font-bold"
                        >
                          <span>{p.name}</span>
                          <ExternalLink size={11} />
                        </a>
                      ) : (
                        <span className="text-ivory-200 font-bold">{p.name}</span>
                      )}
                      {p.note && <span className="text-[10px] text-ivory-400/70">{p.note}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Tribute Disclaimer */}
        <div className="pt-8 border-t border-lavender-400/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory-400/70 gap-4 font-mono text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Heart size={14} className="text-roseAccent-500 fill-roseAccent-500 shrink-0" />
            <span>TRI ÂN & LƯU TRỮ VỀ VTUBER SURI MUKEKI • ALL RIGHTS RESERVED</span>
          </div>
          <div>
            <span>ART, CHARACTER & MUSIC BELONG TO SURI MUKEKI & RESPECTIVE CREATORS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

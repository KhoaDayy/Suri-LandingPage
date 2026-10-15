import React from 'react';
import { Youtube, Twitter, ExternalLink, Heart, Sparkles, MessageSquare, Globe, Facebook, Coffee } from 'lucide-react';
import { SURI_DATA, CREDITS_DATA } from '../data/suriData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F4EE] border-t-2 border-taro-200/80 py-16 font-sans text-xs text-chocolate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Brand & Socials Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-taro-200">
          {/* Identity */}
          <div className="flex items-center space-x-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-3xl bg-gradient-to-tr from-berry-400 via-taro-400 to-pudding-300 p-0.5 shadow-cafe flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center overflow-hidden p-1">
                <img
                  src={SURI_DATA.assets.logo}
                  alt="Suri Mukeki Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="font-kawaii text-2xl text-chocolate-900 font-extrabold tracking-tight">
                {SURI_DATA.displayName}
              </h3>
              <p className="text-chocolate-600 font-sans text-sm flex items-center space-x-2 justify-center lg:justify-start mt-0.5 font-medium">
                <span>{SURI_DATA.title}</span>
                <span className="text-berry-500">✦</span>
                <span className="text-chocolate-800 font-bold">{SURI_DATA.japaneseName}</span>
              </p>
            </div>
          </div>

          {/* Social Platform Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2.5" aria-label="Official Social Channels">
            <a
              href={SURI_DATA.officialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-berry-50 border border-taro-200 hover:border-berry-300 text-chocolate-800 transition bubble-btn shadow-xs flex items-center space-x-2"
              title="YouTube @surimukeki"
            >
              <Youtube size={16} className="text-red-500" />
              <span className="text-xs font-display font-bold">YouTube</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-taro-50 border border-taro-200 hover:border-taro-300 text-chocolate-800 transition bubble-btn shadow-xs flex items-center space-x-2"
              title="Twitter / X @SuriMukeki"
            >
              <Twitter size={16} className="text-sky-500" />
              <span className="text-xs font-display font-bold">Twitter / X</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-taro-50 border border-taro-200 hover:border-taro-300 text-chocolate-800 transition bubble-btn shadow-xs flex items-center space-x-2"
              title="Discord Server"
            >
              <MessageSquare size={16} className="text-indigo-500" />
              <span className="text-xs font-display font-bold">Discord</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.carrd}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-taro-50 border border-taro-200 hover:border-taro-300 text-chocolate-800 transition bubble-btn shadow-xs flex items-center space-x-2"
              title="Carrd Portfolio"
            >
              <Globe size={16} className="text-emerald-500" />
              <span className="text-xs font-display font-bold">Carrd</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.marshmallow}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-berry-50 border border-taro-200 hover:border-berry-300 text-chocolate-800 transition bubble-btn shadow-xs flex items-center space-x-2"
              title="Hộp thư Marshmallow"
            >
              <Sparkles size={16} className="text-berry-500" />
              <span className="text-xs font-display font-bold">Marshmallow</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-taro-50 border border-taro-200 hover:border-taro-300 text-chocolate-800 transition bubble-btn shadow-xs flex items-center space-x-2"
              title="Facebook Fanpage"
            >
              <Facebook size={16} className="text-blue-600" />
              <span className="text-xs font-display font-bold">Facebook</span>
            </a>
          </nav>
        </div>

        {/* Community Hashtags Banner */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-mono font-bold text-chocolate-500 uppercase tracking-wider mr-2">
            HASHTAGS CHÍNH THỨC:
          </span>
          {Object.entries(SURI_DATA.profile.hashtags).map(([key, tag]) => (
            <span
              key={key}
              className="px-3.5 py-1.5 rounded-full bg-white border border-taro-200 text-chocolate-800 font-mono text-xs font-bold shadow-xs hover:border-berry-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Credits Section */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <p className="font-mono text-xs text-berry-600 tracking-wider uppercase font-bold">
              NHỮNG TÁC GIẢ TẠO HÌNH & ĐỒNG HÀNH
            </p>
            <h4 className="text-2xl font-kawaii font-extrabold text-chocolate-900 tracking-tight">
              Credits & Special Thanks
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDITS_DATA.map((group) => (
              <div key={group.role} className="p-5 rounded-3xl bg-white/90 border border-taro-200 space-y-3 shadow-sm">
                <div className="border-b border-taro-100 pb-2.5">
                  <h5 className="font-kawaii text-sm font-bold text-chocolate-900">{group.role}</h5>
                  <p className="text-[11px] text-chocolate-500 font-sans">{group.label}</p>
                </div>
                <ul className="space-y-2 text-xs font-mono">
                  {group.people.map((p) => (
                    <li key={p.name} className="flex flex-col">
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-chocolate-800 hover:text-berry-600 flex items-center space-x-1 transition font-bold"
                        >
                          <span>{p.name}</span>
                          <ExternalLink size={11} />
                        </a>
                      ) : (
                        <span className="text-chocolate-800 font-bold">{p.name}</span>
                      )}
                      {p.note && <span className="text-[10px] text-chocolate-500">{p.note}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Tribute Disclaimer */}
        <div className="pt-8 border-t border-taro-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-chocolate-600 gap-4 font-mono text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Heart size={14} className="text-berry-500 fill-berry-500 shrink-0" />
            <span>TRI ÂN & LƯU TRỮ VỀ VTUBER SURI MUKEKI • FAN-CREATED ARCHIVE</span>
          </div>
          <div className="flex items-center space-x-2">
            <Coffee size={13} className="text-pudding-600" />
            <span>ART, CHARACTER & MUSIC BELONG TO SURI MUKEKI & RESPECTIVE CREATORS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

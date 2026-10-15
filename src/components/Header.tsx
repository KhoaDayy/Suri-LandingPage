import React, { useState } from 'react';
import { Menu, X, Youtube, Twitter, Coffee } from 'lucide-react';
import { SURI_DATA } from '../data/suriData';

interface HeaderProps {
  onExploreStory: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onExploreStory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'QUÁN CAFE', href: '#hero' },
    { label: 'BENTO MENU', href: '#motifs' },
    { label: 'STORYBOOK', href: '#story' },
    { label: 'ROADMAP', href: '#timeline' },
    { label: 'BENTO ART', href: '#gallery' },
    { label: 'HỒ SƠ MẬT', href: '#archive' },
    { label: 'VINYL JUKEBOX', href: '#music' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF5EE]/90 backdrop-blur-md border-b border-taro-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="h-12 w-auto max-w-[140px] flex items-center justify-center p-1 rounded-2xl bg-white/80 border border-taro-200/60 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <img 
              src={SURI_DATA.assets.logo} 
              alt="Suri Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <div>
            <div className="font-kawaii text-lg sm:text-xl font-bold tracking-wider text-chocolate-800 group-hover:text-taro-600 transition-colors flex items-center space-x-2">
              <span>{SURI_DATA.displayName}</span>
              <span className="text-[10px] font-display font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-pudding-100 text-pudding-600 border border-pudding-300 uppercase shadow-xs">
                🍮 SLIME CAFE
              </span>
            </div>
            <div className="text-[11px] font-display font-medium tracking-wide text-chocolate-500 flex items-center space-x-1.5 mt-0.5">
              <span>{SURI_DATA.japaneseName}</span>
              <span className="text-berry-400 text-[10px]">🌸</span>
              <span className="text-chocolate-400">Cozy Character Showcase</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 font-display text-xs font-bold tracking-wider" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-chocolate-700 hover:text-taro-600 py-1 px-2.5 rounded-full hover:bg-taro-100/60 transition-all duration-200"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <a
            href={SURI_DATA.officialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            title="Kênh YouTube Suri Mukeki"
            className="p-2.5 rounded-2xl bg-white border border-taro-200/60 text-berry-500 hover:bg-berry-50 hover:border-berry-300 transition-all shadow-xs"
          >
            <Youtube size={17} />
          </a>
          <a
            href={SURI_DATA.officialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter / X @SuriMukeki"
            className="p-2.5 rounded-2xl bg-white border border-taro-200/60 text-taro-600 hover:bg-taro-50 hover:border-taro-300 transition-all shadow-xs"
          >
            <Twitter size={17} />
          </a>
          <button
            onClick={onExploreStory}
            className="px-5 py-2.5 rounded-full text-xs font-display font-bold tracking-wider text-white uppercase bg-gradient-to-r from-taro-500 via-berry-400 to-pudding-400 hover:brightness-105 shadow-md shadow-taro-400/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2 bubble-btn"
          >
            <Coffee size={15} />
            <span>GHÉ TIỆM TRÀ</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-chocolate-800 bg-white border border-taro-200 rounded-2xl shadow-xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF5EE]/95 border-b border-taro-200 px-6 py-4 space-y-2 font-display text-sm font-semibold backdrop-blur-md animate-fade-in shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-chocolate-700 hover:text-taro-600 border-b border-taro-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex items-center space-x-4 text-xs">
            <a
              href={SURI_DATA.officialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-berry-600"
            >
              <Youtube size={16} />
              <span>YouTube</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-taro-600"
            >
              <Twitter size={16} />
              <span>Twitter / X</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

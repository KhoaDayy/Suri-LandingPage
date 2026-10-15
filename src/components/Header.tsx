import React, { useState } from 'react';
import { Sparkles, Menu, X, ExternalLink, Youtube, Twitter } from 'lucide-react';
import { SURI_DATA } from '../data/suriData';

interface HeaderProps {
  onExploreStory: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onExploreStory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'TỔNG QUAN', href: '#hero' },
    { label: 'BIỂU TƯỢNG', href: '#motifs' },
    { label: 'CỐT TRUYỆN', href: '#story' },
    { label: 'LỊCH SỬ', href: '#timeline' },
    { label: 'TRANG PHỤC', href: '#gallery' },
    { label: 'HỒ SƠ MẬT', href: '#archive' },
    { label: 'ÂM NHẠC', href: '#music' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09080B]/90 backdrop-blur-xl border-b border-lavender-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#hero" className="flex items-center space-x-3.5 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-roseAccent-500 via-plum-700 to-lavender-400 p-0.5 shadow-[0_0_20px_rgba(157,83,105,0.4)] group-hover:shadow-[0_0_28px_rgba(188,165,216,0.6)] transition-all duration-300">
            <div className="w-full h-full bg-[#111014] rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src={SURI_DATA.assets.portrait} 
                alt="Suri Mukeki Avatar" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div>
            <div className="font-gothic text-lg sm:text-xl font-bold tracking-wider text-ivory-200 group-hover:text-lavender-300 transition-colors flex items-center space-x-2">
              <span className="drop-shadow-[0_2px_10px_rgba(157,83,105,0.4)]">{SURI_DATA.displayName}</span>
              <span className="text-[10px] font-display tracking-widest px-2 py-0.5 rounded-full bg-plum-800 text-lavender-200 border border-lavender-400/30 uppercase">
                ✦ VTUBER ✦
              </span>
            </div>
            <div className="text-[11px] font-display tracking-[0.16em] text-lavender-400 flex items-center space-x-1.5 mt-0.5">
              <span>{SURI_DATA.japaneseName}</span>
              <span className="text-roseAccent-400 text-[9px]">✦</span>
              <span className="text-ivory-400">Official Character Showcase</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 font-display text-xs tracking-[0.18em]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-ivory-300/80 hover:text-ivory-100 py-1 transition-colors duration-200 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-roseAccent-500 to-lavender-300 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(188,165,216,0.8)]" />
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={SURI_DATA.officialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            title="Kênh YouTube Suri Mukeki"
            className="p-2.5 rounded-xl bg-charcoal-800 border border-lavender-400/20 text-lavender-300 hover:text-white hover:border-roseAccent-500 transition-colors"
          >
            <Youtube size={17} />
          </a>
          <a
            href={SURI_DATA.officialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter / X @SuriMukeki"
            className="p-2.5 rounded-xl bg-charcoal-800 border border-lavender-400/20 text-lavender-300 hover:text-white hover:border-roseAccent-500 transition-colors"
          >
            <Twitter size={17} />
          </a>
          <button
            onClick={onExploreStory}
            className="px-5 py-2.5 rounded-full text-xs font-display font-bold tracking-widest text-white uppercase bg-gradient-to-r from-roseAccent-500 via-plum-700 to-lavender-500 hover:brightness-110 shadow-[0_0_20px_rgba(157,83,105,0.4)] hover:shadow-[0_0_30px_rgba(188,165,216,0.6)] hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-lavender-200" />
            <span>KHÁM PHÁ CỐT TRUYỆN</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ivory-200 hover:text-white bg-charcoal-800 border border-lavender-400/30 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900/95 border-b border-lavender-400/30 px-6 py-5 space-y-3 font-display text-sm backdrop-blur-xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-ivory-300 hover:text-roseAccent-400 border-b border-ivory-300/10 tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center space-x-4">
            <a
              href={SURI_DATA.officialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-lavender-300 hover:text-white"
            >
              <Youtube size={16} />
              <span>YouTube</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-lavender-300 hover:text-white"
            >
              <Twitter size={16} />
              <span>Twitter / X</span>
            </a>
            <a
              href={SURI_DATA.officialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-lavender-300 hover:text-white"
            >
              <ExternalLink size={16} />
              <span>Discord</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

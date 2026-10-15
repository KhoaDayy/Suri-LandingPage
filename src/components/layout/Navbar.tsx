import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Youtube, MessageSquare, Twitter } from 'lucide-react';
import { NAV_LINKS, SURI_DATA } from '../../data/suriData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#hero');
  const [scrolled, setScrolled] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['hero', 'lore', 'specs', 'schedule'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock and ESC key listener for mobile drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          scrolled ? 'pt-3 pb-2 bg-black/50 backdrop-blur-md' : 'pt-5 pb-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Pill */}
          <a
            href="#hero"
            className="pointer-events-auto flex items-center gap-3 px-3 py-1.5 rounded-full liquid-glass hover:bg-white/5 transition-all group border border-white/10"
            aria-label="Suri Mukeki Home"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10 p-0.5 border border-cyan-400/30 flex items-center justify-center shrink-0 group-hover:border-cyan-400/80 transition-colors">
              <img
                src="/images/icons/logo_suri.png"
                alt="Suri Mukeki Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="pr-1.5">
              <span className="font-heading italic font-bold text-sm sm:text-base tracking-wide text-white block leading-none group-hover:text-cyan-300 transition-colors">
                SURI MUKEKI
              </span>
              <span className="font-mono text-[9px] text-cyan-400 tracking-wider block mt-0.5 uppercase">
                無敵スリ // VTUBER
              </span>
            </div>
          </a>

          {/* Desktop Capsule Navigation */}
          <nav
            className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full liquid-glass border border-white/10 backdrop-blur-md shadow-lg shadow-black/40"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-400/40 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.badge && (
                    <span
                      className={`text-[9px] font-mono opacity-60 ${
                        isActive ? 'text-cyan-300' : ''
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Desktop Action CTA Pill */}
            <a
              href={SURI_DATA.officialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-strong text-xs font-mono font-bold tracking-wider text-white hover:text-cyan-300 border border-white/15 transition-all hover:scale-105 shadow-sm shadow-cyan-500/10 group"
              title="Official YouTube Channel"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>LIVE TRANSMISSION</span>
              <Youtube size={14} className="text-red-500 group-hover:text-red-400 transition-colors" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="pointer-events-auto flex md:hidden items-center justify-center w-10 h-10 rounded-full liquid-glass text-white hover:text-cyan-400 border border-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
              aria-hidden="true"
            />

            {/* Liquid-Glass Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-4 top-20 z-50 md:hidden liquid-glass-strong rounded-3xl border border-white/20 p-6 shadow-2xl backdrop-blur-2xl max-h-[calc(100vh-6rem)] overflow-y-auto pointer-events-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/icons/logo_suri.png"
                    alt="Suri Logo"
                    className="w-7 h-7 object-contain"
                  />
                  <div>
                    <span className="font-heading italic font-bold text-base text-white block leading-none">
                      SURI MUKEKI
                    </span>
                    <span className="font-mono text-[9px] text-cyan-400 uppercase">
                      無敵スリ // MOBILE DIRECTORY
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white"
                  aria-label="Close navigation menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 py-4" aria-label="Mobile Navigation Links">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl font-mono text-sm tracking-wider transition-all ${
                        isActive
                          ? 'bg-cyan-500/15 border border-cyan-400/30 text-white font-semibold'
                          : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* CTA & Social Channels in Drawer */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={SURI_DATA.officialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                >
                  <Youtube size={16} />
                  <span>WATCH ON YOUTUBE</span>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={SURI_DATA.officialLinks.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare size={14} className="text-indigo-400" />
                    <span>Discord</span>
                  </a>
                  <a
                    href={SURI_DATA.officialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Twitter size={14} className="text-sky-400" />
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

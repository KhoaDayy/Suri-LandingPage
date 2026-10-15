import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Youtube } from 'lucide-react';
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

  // Body scroll lock on mobile drawer
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
          scrolled ? 'pt-3 pb-2' : 'pt-5 pb-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo Pill (Candy Pop Sticker Badge) */}
          <a
            href="#hero"
            className="pointer-events-auto flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#FFF5EE] border-2 border-[#282436] shadow-[3px_3px_0px_#282436] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#282436] transition-all group liquid-glass"
            aria-label="Suri Mukeki Home"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#65E4E0] border border-[#282436] flex items-center justify-center shrink-0">
              <img
                src="/images/icons/logo_suri.png"
                alt="Suri Mukeki Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="pr-1">
              <span className="font-display text-sm sm:text-base font-black tracking-wide text-[#282436] block leading-none group-hover:text-[#FF79AC] transition-colors">
                SURI MUKEKI
              </span>
              <span className="font-mono text-[9px] text-[#282436]/70 font-bold tracking-wider block mt-0.5 uppercase">
                無敵スリ // VTUBER
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation Bar (Editorial Pill) */}
          <nav
            className="hidden md:flex pointer-events-auto items-center gap-1 px-4 py-1.5 rounded-full bg-[#FFF5EE]/95 backdrop-blur-md border-2 border-[#282436] shadow-[4px_4px_0px_#282436]"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full font-display text-xs tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#FFE36E] text-[#282436] border border-[#282436] shadow-[2px_2px_0px_#282436]'
                      : 'text-[#282436]/75 hover:text-[#282436] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Live Stream Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2.5 pointer-events-auto">
            <a
              href={SURI_DATA.officialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF79AC] text-[#282436] font-display text-xs border-2 border-[#282436] shadow-[3px_3px_0px_#282436] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#282436] transition-all"
            >
              <Youtube size={15} className="fill-[#282436]" />
              <span>YOUTUBE LIVE</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-full bg-[#FFF5EE] border-2 border-[#282436] shadow-[3px_3px_0px_#282436] text-[#282436] hover:bg-[#FFE36E] transition-all"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden bg-[#282436]/70 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm h-full bg-[#FFF5EE] border-l-4 border-[#282436] p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-[#282436] mb-6">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/icons/logo_suri.png"
                      alt="Suri Logo"
                      className="w-7 h-7 object-contain"
                    />
                    <span className="font-display font-black text-lg text-[#282436]">
                      SURI MUKEKI
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg border-2 border-[#282436] bg-[#FF79AC] text-[#282436] shadow-[2px_2px_0px_#282436]"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-3">
                  {NAV_LINKS.map((link, idx) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-3.5 rounded-xl font-display text-base font-bold border-2 border-[#282436] shadow-[3px_3px_0px_#282436] bg-[#FFE36E] text-[#282436] hover:bg-[#FF79AC] transition-all"
                    >
                      <span className="font-mono text-xs text-[#282436]/60 mr-2">0{idx + 1}.</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Footer Socials */}
              <div className="pt-6 border-t-2 border-[#282436] space-y-3">
                <a
                  href={SURI_DATA.officialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#FF79AC] text-[#282436] font-display text-sm font-bold border-2 border-[#282436] shadow-[3px_3px_0px_#282436]"
                >
                  <Youtube size={17} className="fill-[#282436]" />
                  <span>YOUTUBE CHANNEL</span>
                </a>
                <p className="font-mono text-[10px] text-center text-[#282436]/60 uppercase font-bold">
                  Suri Mukeki • Official Showcase
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

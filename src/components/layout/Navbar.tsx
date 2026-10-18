import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { NAV_LINKS, SURI_DATA } from '../../data/suriData';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'lore', 'specs', 'schedule', 'contact'];
      const scrollPosition = window.scrollY + 180;

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? 'h-16 bg-[#FAFAF7]/95 dark:bg-[#141517]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
            : 'h-18 sm:h-20 bg-[#FAFAF7]/90 dark:bg-[#141517]/90 backdrop-blur-md border-b border-slate-200/60 dark:border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          
          {/* Brand Wordmark & Japanese Registry Label */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 whitespace-nowrap group select-none transition-opacity focus:outline-none"
            aria-label="Suri Mukeki: Hồ sơ nhân vật chính thức"
          >
            <img
              src="/images/icons/logo_suri.png"
              alt="Suri Mukeki Crest"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-200 group-hover:scale-[1.02] shrink-0"
            />

            <div className="flex flex-col justify-center">
              <span className="font-heading font-bold text-base sm:text-lg tracking-[0.12em] text-[#1E293B] dark:text-[#ECEBE6] uppercase transition-colors duration-180 group-hover:text-[#315D9C] dark:group-hover:text-[#79ACE0] whitespace-nowrap leading-none">
                SURI MUKEKI
              </span>
              <span className="mt-1 text-[10px] font-sans font-medium tracking-[0.14em] text-[#315D9C] dark:text-[#79ACE0] uppercase whitespace-nowrap leading-none">
                無敵・スリ
              </span>
            </div>
          </a>

          {/* Desktop Center Primary Navigation */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-9 text-xs font-sans tracking-[0.12em] uppercase font-medium shrink-0"
            aria-label="Điều hướng chính"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1.5 whitespace-nowrap transition-colors duration-180 flex items-center ${
                    isActive
                      ? 'text-[#1E293B] dark:text-[#ECEBE6] font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#1E293B] dark:hover:text-[#ECEBE6]'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.label}</span>

                  {/* Understated Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="editorial-nav-indicator"
                      className="absolute -bottom-1 left-1 right-1 h-[2px] rounded-full bg-[#315D9C] dark:bg-[#79ACE0]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Switcher, YouTube Link & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Desktop / Tablet Theme Switcher */}
            <div
              className="relative hidden sm:inline-flex items-center p-0.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-[#1E232B] shrink-0"
              role="group"
              aria-label="Chọn chế độ giao diện sáng hoặc tối"
            >
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer select-none ${
                  !isDark
                    ? 'bg-white text-[#1E293B] shadow-xs font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-[#1E293B] dark:hover:text-[#ECEBE6] font-medium'
                }`}
                aria-pressed={!isDark}
                aria-label="Giao diện sáng"
                title="Giao diện sáng"
              >
                <Sun size={13} className={!isDark ? 'text-amber-500' : 'text-slate-400'} />
                <span className="text-[11px] uppercase tracking-wider">Sáng</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer select-none ${
                  isDark
                    ? 'bg-[#2A2E36] text-[#ECEBE6] shadow-xs font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-[#1E293B] dark:hover:text-[#ECEBE6] font-medium'
                }`}
                aria-pressed={isDark}
                aria-label="Giao diện tối"
                title="Giao diện tối"
              >
                <Moon size={13} className={isDark ? 'text-[#79ACE0]' : 'text-slate-400'} />
                <span className="text-[11px] uppercase tracking-wider">Tối</span>
              </button>
            </div>

            {/* Mobile Header Quick Toggle (<640px) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="sm:hidden p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#1B1D21] text-slate-700 dark:text-[#ECEBE6] hover:text-[#315D9C] dark:hover:text-[#79ACE0] transition-colors duration-180 cursor-pointer shadow-xs shrink-0"
              aria-label={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
              title={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            >
              {isDark ? (
                <Sun size={15} className="text-amber-400" />
              ) : (
                <Moon size={15} className="text-[#315D9C]" />
              )}
            </button>

            {/* Header YouTube Link */}
            <a
              href={SURI_DATA.officialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#1E232B] hover:border-[#315D9C]/50 dark:hover:border-[#79ACE0]/50 shadow-xs hover:shadow-sm transition-all duration-200 shrink-0 whitespace-nowrap"
              aria-label="Kênh YouTube chính thức của Suri Mukeki (mở trong tab mới)"
            >
              <span className="font-sans text-xs font-medium tracking-[0.12em] uppercase text-slate-700 dark:text-[#ECEBE6] group-hover:text-[#315D9C] dark:group-hover:text-[#79ACE0] transition-colors duration-180 whitespace-nowrap">
                Kênh YouTube
              </span>

              <ArrowUpRight
                size={14}
                className="text-slate-400 dark:text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#315D9C] dark:group-hover:text-[#79ACE0] shrink-0"
              />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-lg text-[#1E293B] dark:text-[#ECEBE6] hover:text-[#315D9C] dark:hover:text-[#79ACE0] hover:bg-black/5 dark:hover:bg-white/[0.08] transition-colors duration-200"
              aria-label={isOpen ? 'Đóng mục lục hồ sơ' : 'Mở mục lục hồ sơ'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} className="text-[#315D9C] dark:text-[#79ACE0]" /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-xs flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-xs h-full bg-[#FAF8F5] dark:bg-[#1B1D21] text-[#292D3A] dark:text-[#ECEBE6] border-l border-[#C9A95C]/25 dark:border-[#D4B86A]/25 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Drawer Editorial Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#C9A95C]/20 dark:border-[#D4B86A]/20 mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/icons/logo_suri.png"
                      alt="Suri Logo"
                      className="w-8 h-8 object-contain drop-shadow-[0_2px_8px_rgba(117,184,230,0.3)] shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-sm tracking-[0.16em] text-[#1E2533] dark:text-[#ECEBE6] leading-none uppercase">
                        SURI MUKEKI
                      </span>
                      <span className="font-sans text-[8.5px] tracking-wider text-[#315D9C] dark:text-[#79ACE0] mt-1 font-medium">
                        無敵・スリ
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Mobile Drawer Theme Toggle */}
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="p-1.5 rounded-lg border border-[#292D3A]/10 dark:border-white/10 text-[#292D3A] dark:text-[#ECEBE6] hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-180"
                      aria-label={isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
                    >
                      {isDark ? <Sun size={17} className="text-[#D4B86A]" /> : <Moon size={17} className="text-[#315D9C]" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="p-1.5 rounded-md text-[#5A6376] dark:text-[#A1A6B3] hover:text-[#1E2533] dark:hover:text-[#ECEBE6] hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-180"
                      aria-label="Đóng mục lục"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1.5" aria-label="Mục lục di động">
                  {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.href;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-md text-xs font-sans uppercase tracking-[0.12em] transition-colors duration-180 ${
                          isActive
                            ? 'bg-[#EAF3FB]/80 dark:bg-[#22252B] text-[#315D9C] dark:text-[#79ACE0] font-semibold border-l-2 border-[#C9A95C] dark:border-[#D4B86A]'
                            : 'text-[#4A5364] dark:text-[#A1A6B3] hover:bg-black/5 dark:hover:bg-white/[0.06] hover:text-[#1E2533] dark:hover:text-[#ECEBE6] font-medium'
                        }`}
                      >
                        <span className="whitespace-nowrap">{link.label}</span>
                        {link.jpLabel && (
                          <span
                            aria-hidden="true"
                            className="text-[9px] tracking-widest text-[#75B8E6] dark:text-[#79ACE0] font-normal shrink-0"
                          >
                            {link.jpLabel}
                          </span>
                        )}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Theme Switcher Row */}
              <div className="py-3 px-3.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#292D3A]/10 dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-[0.12em] font-medium text-[#4A5364] dark:text-[#A1A6B3]">
                  Giao diện
                </span>
                <div
                  className="flex items-center p-0.5 rounded-full border border-[#292D3A]/12 dark:border-white/[0.12] bg-[#EAE8E3]/90 dark:bg-[#181A1E]"
                  role="group"
                  aria-label="Chọn giao diện di động"
                >
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-medium transition-all duration-180 cursor-pointer ${
                      !isDark
                        ? 'bg-white text-[#1E2533] shadow-xs font-semibold'
                        : 'text-[#6B7280] dark:text-[#9CA3AF]'
                    }`}
                    aria-label="Giao diện sáng"
                  >
                    <Sun size={13} className={!isDark ? 'text-[#E5A93C]' : 'text-[#8C93A4]'} />
                    <span className="text-[11px] uppercase tracking-wider">Sáng</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-medium transition-all duration-180 cursor-pointer ${
                      isDark
                        ? 'bg-[#252830] text-[#ECEBE6] shadow-xs font-semibold border border-white/[0.08]'
                        : 'text-[#6B7280] dark:text-[#9CA3AF]'
                    }`}
                    aria-label="Giao diện tối"
                  >
                    <Moon size={13} className={isDark ? 'text-[#79ACE0]' : 'text-[#8C93A4]'} />
                    <span className="text-[11px] uppercase tracking-wider">Tối</span>
                  </button>
                </div>
              </div>

              {/* Drawer Archival Footer */}
              <div className="pt-6 border-t border-[#C9A95C]/20 dark:border-[#D4B86A]/20 space-y-3.5">
                <a
                  href={SURI_DATA.officialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[#C9A95C]/40 dark:border-[#D4B86A]/40 bg-white/80 dark:bg-[#22252B] hover:bg-white dark:hover:bg-[#2A2E36] text-[#292D3A] dark:text-[#ECEBE6] hover:text-[#315D9C] dark:hover:text-[#79ACE0] text-xs font-sans font-medium tracking-[0.14em] uppercase shadow-sm transition-all duration-200"
                >
                  <span className="whitespace-nowrap">Kênh YouTube Chính Thức</span>
                  <ArrowUpRight size={14} className="text-[#C9A95C] dark:text-[#D4B86A] shrink-0" />
                </a>
                <p className="font-sans text-[10px] text-center text-[#8C93A4] dark:text-[#7A808E]">
                  Suri Mukeki • Trang thông tin chính thức
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

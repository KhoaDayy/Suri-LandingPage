import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const SECTIONS = [
  { id: 'story', label: 'CỐT TRUYỆN' },
  { id: 'motifs', label: 'BIỂU TƯỢNG' },
  { id: 'timeline', label: 'LỊCH SỬ' },
  { id: 'gallery', label: 'TRANG PHỤC' },
  { id: 'archive', label: 'HỒ SƠ MẬT' },
  { id: 'music', label: 'ÂM NHẠC' },
];

export const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show side nav only when scrolled past the top hero banner
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
    );

    document.querySelectorAll('main > section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-2 p-2 rounded-full bg-[#110E18]/85 border border-lavender-400/25 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.85)] animate-fade-in"
      aria-label="Archive Section Navigation"
    >
      {/* Scroll to Top */}
      <a
        href="#hero"
        aria-label="Về đầu trang"
        className="w-8 h-8 rounded-full bg-charcoal-800 hover:bg-roseAccent-600/80 text-ivory-300 hover:text-white flex items-center justify-center transition-all duration-300 mb-1 border border-lavender-400/20"
      >
        <ChevronUp size={16} />
      </a>

      {/* Navigation Pills */}
      {SECTIONS.map((sec, idx) => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            aria-label={sec.label}
            className={`group relative flex items-center justify-between px-3 py-2 rounded-full text-[11px] font-display tracking-widest uppercase transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-roseAccent-500/80 to-plum-700 text-white shadow-[0_0_15px_rgba(157,83,105,0.5)] border border-lavender-400/50 scale-105'
                : 'text-ivory-400/70 hover:text-ivory-100 hover:bg-white/5'
            }`}
          >
            <span className="hidden group-hover:inline-block mr-2 text-[10px] whitespace-nowrap text-lavender-200">
              {sec.label}
            </span>
            <span className="font-mono text-[10px] font-bold text-lavender-300">
              {String(idx + 1).padStart(2, '0')}
            </span>
          </a>
        );
      })}
    </aside>
  );
};

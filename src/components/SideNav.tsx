import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const SECTIONS = [
  { id: 'motifs', label: 'BENTO MENU' },
  { id: 'story', label: 'STORYBOOK' },
  { id: 'timeline', label: 'ROADMAP' },
  { id: 'gallery', label: 'BENTO ART' },
  { id: 'archive', label: 'HỒ SƠ MẬT' },
  { id: 'music', label: 'JUKEBOX' },
];

export const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
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
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-2 p-2 rounded-full bg-white/90 border border-taro-200/80 backdrop-blur-md shadow-cafe animate-fade-in"
      aria-label="Cafe Section Navigation"
    >
      {/* Scroll to Top */}
      <a
        href="#hero"
        aria-label="Về đầu trang"
        className="w-8 h-8 rounded-full bg-cream-100 hover:bg-berry-100 text-chocolate-600 hover:text-berry-600 flex items-center justify-center transition-all duration-300 mb-1 border border-taro-200/40"
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
            className={`group relative flex items-center justify-between px-3 py-2 rounded-full text-[11px] font-display font-bold tracking-wider uppercase transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-taro-500 to-berry-400 text-white shadow-sm scale-105'
                : 'text-chocolate-500 hover:text-chocolate-800 hover:bg-taro-50'
            }`}
          >
            <span className="hidden group-hover:inline-block mr-2 text-[10px] whitespace-nowrap text-chocolate-800">
              {sec.label}
            </span>
            <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-white' : 'text-taro-500'}`}>
              {String(idx + 1).padStart(2, '0')}
            </span>
          </a>
        );
      })}
    </aside>
  );
};

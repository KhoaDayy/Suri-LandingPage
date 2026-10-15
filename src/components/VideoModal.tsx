import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { CoverItem } from '../data/suriData';

interface VideoModalProps {
  isOpen: boolean;
  cover: CoverItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, cover, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !cover) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Video ${cover.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#09080B]/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full flex flex-col bg-charcoal-900 border border-lavender-400/30 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="px-6 py-4 border-b border-lavender-400/20 flex items-center justify-between bg-charcoal-950/70">
          <div>
            <h3 className="font-gothic text-lg text-ivory-100 font-bold">
              {cover.title}
            </h3>
            <p className="text-xs font-mono text-lavender-400">
              Nguyên tác: {cover.originalArtist} • Cover bởi Suri Mukeki
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-charcoal-800 hover:bg-roseAccent-600 text-ivory-300 hover:text-white transition"
            title="Đóng video"
          >
            <X size={20} />
          </button>
        </header>

        {/* Video Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${cover.youtubeId}?autoplay=1&rel=0&playsinline=1`}
            title={cover.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Modal Footer */}
        <footer className="px-6 py-3.5 border-t border-lavender-400/20 flex items-center justify-between text-xs font-mono text-lavender-400 bg-charcoal-950/70">
          <a
            href={`https://www.youtube.com/watch?v=${cover.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-roseAccent-400 hover:text-roseAccent-300 transition font-bold"
          >
            <span>Mở xem trên YouTube</span>
            <ExternalLink size={14} />
          </a>
          <span>PHÍM ESC ĐỂ ĐÓNG</span>
        </footer>
      </div>
    </div>
  );
};

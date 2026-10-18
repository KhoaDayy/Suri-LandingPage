import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Music, Sparkles } from 'lucide-react';
import type { MusicCoverShowcase } from '../../types';

export interface VideoModalProps {
  isOpen: boolean;
  video?: MusicCoverShowcase | null;
  cover?: MusicCoverShowcase | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  video,
  cover,
  onClose,
}) => {
  const activeVideo = video || cover || null;

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !activeVideo) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Music Showcase: ${activeVideo.title}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass-strong relative w-full max-w-4xl overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 dark:border-white/[0.08] bg-black/90 dark:bg-[#1B1D21] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <header className="flex items-center justify-between border-b border-white/10 dark:border-white/[0.08] px-5 py-3.5 md:px-6 md:py-4 bg-black/40 dark:bg-[#141517]">
            <div className="flex items-center gap-3 min-w-0 pr-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#79ACE0]/15 text-[#79ACE0] border border-[#79ACE0]/30">
                <Music size={18} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-heading text-lg md:text-xl text-white dark:text-[#ECEBE6] font-semibold tracking-tight">
                    {activeVideo.title}
                  </h3>
                  {activeVideo.badge && (
                    <span className="shrink-0 rounded-full bg-[#79ACE0]/15 border border-[#79ACE0]/30 px-2 py-0.5 text-[10px] font-sans font-medium text-[#79ACE0] uppercase">
                      {activeVideo.badge}
                    </span>
                  )}
                </div>
                <p className="truncate text-xs font-sans text-white/60 dark:text-[#A1A6B3] mt-0.5">
                  Bản gốc: {activeVideo.originalArtist || activeVideo.artist || 'Kanaria'} • Trình bày: Suri Mukeki
                </p>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Đóng cửa sổ"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 dark:border-white/[0.08] bg-white/5 dark:bg-white/[0.05] text-white/70 dark:text-[#A1A6B3] hover:bg-white/10 hover:text-white dark:hover:text-[#ECEBE6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79ACE0]"
            >
              <X size={18} />
            </button>
          </header>

          {/* Video Iframe Container */}
          <div className="relative aspect-video w-full bg-black">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&playsinline=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Footer Info */}
          <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 dark:border-white/[0.08] px-5 py-3 md:px-6 md:py-3.5 bg-black/60 dark:bg-[#141517] text-xs font-sans text-white/60 dark:text-[#A1A6B3]">
            <div className="flex items-center gap-2">
              {activeVideo.sweetDrink && (
                <span className="flex items-center gap-1.5 text-[#D4B86A] font-sans text-xs">
                  <Sparkles size={13} className="shrink-0" />
                  Đồ uống kèm theo: {activeVideo.sweetDrink}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#79ACE0] hover:text-[#9EC5EB] transition-colors font-medium font-sans"
              >
                <span>Xem trên YouTube</span>
                <ExternalLink size={13} />
              </a>
              <span className="hidden sm:inline text-white/40 dark:text-[#7A808E]">|</span>
              <span className="text-[11px] text-white/40 dark:text-[#7A808E] font-sans">Nhấn ESC để đóng</span>
            </div>
          </footer>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VideoModal;

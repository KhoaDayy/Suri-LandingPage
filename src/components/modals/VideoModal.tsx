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
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass-strong relative w-full max-w-4xl overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-black/90 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 md:px-6 md:py-4">
            <div className="flex items-center gap-3 min-w-0 pr-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                <Music size={18} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-heading italic text-lg md:text-xl text-white font-semibold tracking-tight">
                    {activeVideo.title}
                  </h3>
                  {activeVideo.badge && (
                    <span className="shrink-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 px-2 py-0.5 text-[10px] font-mono font-medium text-cyan-300 uppercase">
                      {activeVideo.badge}
                    </span>
                  )}
                </div>
                <p className="truncate text-xs font-mono text-white/60 mt-0.5">
                  Original: {activeVideo.originalArtist || activeVideo.artist || 'Kanaria'} • Performed by Suri Mukeki
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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
          <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 px-5 py-3 md:px-6 md:py-3.5 bg-black/60 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              {activeVideo.sweetDrink && (
                <span className="flex items-center gap-1.5 text-amber-300 font-sans text-xs">
                  <Sparkles size={13} className="shrink-0" />
                  Pairing: {activeVideo.sweetDrink}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                <span>Watch on YouTube</span>
                <ExternalLink size={13} />
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <span className="text-[11px] text-white/40 tracking-wider">PRESS ESC TO CLOSE</span>
            </div>
          </footer>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VideoModal;

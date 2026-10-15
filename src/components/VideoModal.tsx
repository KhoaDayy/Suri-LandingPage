import React, { useEffect } from 'react';
import { X, ExternalLink, Music } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-chocolate-950/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full flex flex-col bg-white border-2 border-taro-200 rounded-4xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="px-6 py-4 border-b border-taro-200 flex items-center justify-between bg-[#FDFBF7]">
          <div>
            <div className="flex items-center space-x-2">
              <Music size={16} className="text-berry-500" />
              <h3 className="font-kawaii text-lg text-chocolate-900 font-extrabold">
                {cover.title}
              </h3>
            </div>
            <p className="text-xs font-mono text-chocolate-600 mt-0.5">
              Nguyên tác: {cover.originalArtist} • Trình bày: Suri Mukeki
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-berry-50 hover:bg-berry-100 text-berry-700 hover:text-berry-900 transition bubble-btn"
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
        <footer className="px-6 py-3.5 border-t border-taro-200 flex items-center justify-between text-xs font-mono text-chocolate-600 bg-[#FDFBF7]">
          <a
            href={`https://www.youtube.com/watch?v=${cover.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-berry-600 hover:text-berry-700 transition font-bold"
          >
            <span>Mở xem trên YouTube</span>
            <ExternalLink size={14} />
          </a>
          <span>BẤM PHÍM ESC HOẶC VÙNG NGOÀI ĐỂ ĐÓNG</span>
        </footer>
      </div>
    </div>
  );
};

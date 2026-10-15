import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ isOpen, imageUrl, onClose }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      return;
    }

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

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hình ảnh toàn màn hình"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#09080B]/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-charcoal-900 border border-lavender-400/30 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="px-6 py-4 border-b border-lavender-400/20 flex items-center justify-between bg-charcoal-950/70">
          <span className="font-mono text-xs tracking-widest text-lavender-300 uppercase">
            SURI MUKEKI // VISUAL ARCHIVE VIEWER
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-lg bg-charcoal-800 hover:bg-plum-800 text-ivory-300 hover:text-white transition"
              title={isZoomed ? 'Thu nhỏ' : 'Phóng to'}
            >
              {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </button>
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-charcoal-800 hover:bg-plum-800 text-ivory-300 hover:text-white transition"
              title="Mở ảnh gốc trong tab mới"
            >
              <ExternalLink size={18} />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-charcoal-800 hover:bg-roseAccent-600 text-ivory-300 hover:text-white transition"
              title="Đóng cửa sổ"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Modal Viewport */}
        <div className="flex-grow overflow-auto p-4 flex items-center justify-center bg-[#07060A]">
          <img
            src={imageUrl}
            alt="Expanded view"
            className={`transition-all duration-300 max-h-[75vh] w-auto object-contain ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </div>

        {/* Modal Footer */}
        <footer className="px-6 py-3 border-t border-lavender-400/20 flex items-center justify-between text-[11px] font-mono text-lavender-400 bg-charcoal-950/70">
          <span>NHẤP VÀO ẢNH ĐỂ PHÓNG TO / THU NHỎ</span>
          <span>PHÍM ESC ĐỂ ĐÓNG</span>
        </footer>
      </div>
    </div>
  );
};

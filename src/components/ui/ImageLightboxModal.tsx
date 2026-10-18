import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export interface LightboxImageData {
  src: string;
  title: string;
  desc: string;
}

export interface ImageLightboxModalProps {
  image: LightboxImageData | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  image,
  onClose,
}) => {
  // Lock body scroll and listen for ESC key while modal is active
  useEffect(() => {
    if (!image) return;

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
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          role="dialog"
          aria-modal="true"
          aria-label={image.title}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#1B1D21] text-[#ECEBE6] rounded-3xl overflow-hidden shadow-2xl border border-white/[0.08] cursor-default flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/[0.08] bg-[#141517]">
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-[#ECEBE6]">
                  {image.title}
                </h3>
                <p className="font-sans text-xs text-[#A1A6B3] mt-0.5">
                  {image.desc}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng bản vẽ"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#ECEBE6] transition-colors duration-180 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#141517]/80">
              <img
                src={image.src}
                alt={image.title}
                className="max-h-[72vh] w-auto object-contain rounded-xl shadow-lg select-none"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-[#141517] border-t border-white/[0.08] text-center font-sans text-[11px] text-[#7A808E]">
              Nhấn ESC hoặc nhấp ra ngoài để đóng xem ảnh
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightboxModal;

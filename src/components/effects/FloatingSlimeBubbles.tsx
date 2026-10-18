import React from 'react';
import { motion } from 'framer-motion';

interface FloatingSlimeBubblesProps {
  count?: number;
  className?: string;
  variant?: 'aquatic' | 'celestial' | 'mixed';
}

export const FloatingSlimeBubbles: React.FC<FloatingSlimeBubblesProps> = ({
  count = 7,
  className = '',
  variant = 'mixed',
}) => {
  // Predefined organic bubble coordinates and timings for deterministic rendering
  const bubbleDefs = [
    { left: '8%', top: '15%', size: 48, duration: 18, delay: 0, xOffset: 16 },
    { left: '85%', top: '22%', size: 64, duration: 22, delay: 2, xOffset: -20 },
    { left: '18%', top: '65%', size: 36, duration: 14, delay: 1, xOffset: 12 },
    { left: '76%', top: '75%', size: 52, duration: 20, delay: 3, xOffset: -14 },
    { left: '45%', top: '35%', size: 72, duration: 26, delay: 1.5, xOffset: 18 },
    { left: '92%', top: '50%', size: 32, duration: 16, delay: 4, xOffset: -10 },
    { left: '28%', top: '82%', size: 58, duration: 24, delay: 2.5, xOffset: 15 },
    { left: '60%', top: '12%', size: 40, duration: 19, delay: 0.5, xOffset: -12 },
  ];

  const bubbles = bubbleDefs.slice(0, count);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
    >
      {bubbles.map((b, i) => {
        const isGold = variant === 'celestial' || (variant === 'mixed' && i % 3 === 1);
        const isLavender = variant === 'mixed' && i % 3 === 2;

        const colorClasses = isGold
          ? 'bg-[#C9A95C]/12 dark:bg-[#D4B86A]/10 border-[#C9A95C]/20 dark:border-[#D4B86A]/18'
          : isLavender
          ? 'bg-[#8F7BC9]/10 dark:bg-[#A593D1]/10 border-[#8F7BC9]/18 dark:border-[#A593D1]/16'
          : 'bg-[#75B8E6]/14 dark:bg-[#79ACE0]/10 border-[#75B8E6]/25 dark:border-[#79ACE0]/18';

        return (
          <motion.div
            key={i}
            style={{
              left: b.left,
              top: b.top,
              width: `${b.size}px`,
              height: `${b.size}px`,
            }}
            animate={{
              y: [0, -32, 0],
              x: [0, b.xOffset, 0],
              scale: [1, 1.08, 0.96, 1],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: b.delay,
            }}
            className={`absolute rounded-full border backdrop-blur-[1px] shadow-xs will-change-transform ${colorClasses}`}
          >
            {/* Inner specular glossy highlight */}
            <div className="absolute top-[18%] left-[22%] w-[26%] h-[26%] rounded-full bg-white/40 dark:bg-white/30 blur-[0.5px]" />
          </motion.div>
        );
      })}
    </div>
  );
};

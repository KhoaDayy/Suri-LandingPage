import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { WaterParticlesProps, WaterParticleItem } from '../../types/animation';

const COLOR_MAP = {
  cyan: 'radial-gradient(circle, rgba(112, 215, 225, 0.45) 0%, rgba(112, 215, 225, 0.05) 60%, transparent 100%)',
  blue: 'radial-gradient(circle, rgba(117, 184, 230, 0.40) 0%, rgba(117, 184, 230, 0.05) 60%, transparent 100%)',
  gold: 'radial-gradient(circle, rgba(201, 169, 92, 0.35) 0%, rgba(201, 169, 92, 0.04) 60%, transparent 100%)',
  lavender: 'radial-gradient(circle, rgba(168, 164, 220, 0.35) 0%, rgba(168, 164, 220, 0.04) 60%, transparent 100%)',
};

const BORDER_COLOR_MAP = {
  cyan: 'rgba(112, 215, 225, 0.3)',
  blue: 'rgba(117, 184, 230, 0.25)',
  gold: 'rgba(201, 169, 92, 0.25)',
  lavender: 'rgba(168, 164, 220, 0.25)',
};

export const WaterParticles: React.FC<WaterParticlesProps> = ({
  count = 14,
  className = '',
  palette = 'mixed',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Deterministic seed generation so particles stay stable without layout shifts
  const particles = useMemo<WaterParticleItem[]>(() => {
    const list: WaterParticleItem[] = [];
    const colorChoices: ('cyan' | 'blue' | 'gold' | 'lavender')[] =
      palette === 'water'
        ? ['cyan', 'blue', 'cyan', 'blue']
        : palette === 'celestial'
        ? ['gold', 'lavender', 'blue', 'gold']
        : ['cyan', 'blue', 'gold', 'lavender'];

    // Predefined coordinates distributed across screen quadrants
    const positions = [
      { x: 12, y: 18, s: 28, d: 0.2, dur: 9 },
      { x: 82, y: 14, s: 42, d: 1.5, dur: 11 },
      { x: 25, y: 72, s: 34, d: 2.1, dur: 10 },
      { x: 92, y: 68, s: 22, d: 0.8, dur: 8 },
      { x: 48, y: 28, s: 18, d: 3.2, dur: 12 },
      { x: 68, y: 84, s: 36, d: 1.1, dur: 9.5 },
      { x: 8, y: 45, s: 26, d: 2.7, dur: 10.5 },
      { x: 78, y: 38, s: 16, d: 0.5, dur: 8.5 },
      { x: 38, y: 88, s: 30, d: 1.9, dur: 11.2 },
      { x: 62, y: 12, s: 24, d: 2.4, dur: 9.8 },
      { x: 88, y: 92, s: 38, d: 0.3, dur: 10.8 },
      { x: 18, y: 90, s: 20, d: 3.6, dur: 8.9 },
      { x: 55, y: 60, s: 14, d: 1.7, dur: 11.5 },
      { x: 32, y: 40, s: 22, d: 2.9, dur: 9.2 },
    ];

    const safeCount = Math.min(count, positions.length);
    for (let i = 0; i < safeCount; i++) {
      const pos = positions[i];
      list.push({
        id: i,
        x: pos.x,
        y: pos.y,
        size: pos.s,
        duration: pos.dur,
        delay: pos.d,
        opacity: 0.65,
        color: colorChoices[i % colorChoices.length],
      });
    }
    return list;
  }, [count, palette]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full backdrop-blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: COLOR_MAP[p.color],
            border: `1px solid ${BORDER_COLOR_MAP[p.color]}`,
            boxShadow: `0 0 16px ${BORDER_COLOR_MAP[p.color]}`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default WaterParticles;

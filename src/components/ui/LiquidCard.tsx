import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export type LiquidCardVariant = 'subtle' | 'strong';
export type LiquidCardGlow = 'none' | 'cyan' | 'violet' | 'amber' | 'emerald';

export interface LiquidCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  variant?: LiquidCardVariant;
  glow?: LiquidCardGlow;
  hoverEffect?: boolean;
  className?: string;
  role?: string;
}

const glowGradients: Record<LiquidCardGlow, string> = {
  none: '',
  cyan: 'from-cyan-500/15 via-sky-500/5 to-transparent',
  violet: 'from-purple-500/15 via-violet-500/5 to-transparent',
  amber: 'from-amber-500/15 via-yellow-500/5 to-transparent',
  emerald: 'from-emerald-500/15 via-teal-500/5 to-transparent',
};

const glowAuraColors: Record<LiquidCardGlow, string> = {
  none: '',
  cyan: 'bg-cyan-500/10 shadow-[0_0_30px_rgba(58,168,232,0.15)]',
  violet: 'bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.15)]',
  amber: 'bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  emerald: 'bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.15)]',
};

export const LiquidCard: React.FC<LiquidCardProps> = ({
  children,
  variant = 'subtle',
  glow = 'none',
  hoverEffect = false,
  className = '',
  role,
  onClick,
  ...motionProps
}) => {
  const isInteractive = Boolean(onClick);
  const baseGlassClass = variant === 'strong' ? 'liquid-glass-strong' : 'liquid-glass';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.(e as any);
    }
  };

  return (
    <motion.div
      role={role || (isInteractive ? 'button' : undefined)}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      whileHover={hoverEffect ? { y: -3, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      whileTap={isInteractive ? { scale: 0.99 } : undefined}
      className={`
        ${baseGlassClass}
        group relative rounded-2xl p-6 text-white transition-colors duration-300
        ${isInteractive ? 'cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50' : ''}
        ${glow !== 'none' ? glowAuraColors[glow] : ''}
        ${className}
      `}
      {...motionProps}
    >
      {/* Optional ambient color wash inside the card */}
      {glow !== 'none' && (
        <div
          aria-hidden="true"
          className={`
            pointer-events-none absolute inset-0 -z-10 rounded-[inherit]
            bg-gradient-to-b ${glowGradients[glow]}
            opacity-70 transition-opacity duration-300 group-hover:opacity-100
          `}
        />
      )}

      {/* Subtle top edge specular highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default LiquidCard;

import React from 'react';

export type LiquidBadgeVariant = 'default' | 'cyan' | 'violet' | 'amber' | 'emerald';
export type LiquidBadgeSize = 'sm' | 'md';

export interface LiquidBadgeProps {
  text: string;
  icon?: React.ReactNode;
  variant?: LiquidBadgeVariant;
  live?: boolean;
  size?: LiquidBadgeSize;
  className?: string;
  pulseLabel?: string;
}

const variantStyles: Record<
  LiquidBadgeVariant,
  { text: string; bg: string; dot: string; ping: string; border: string }
> = {
  default: {
    text: 'text-white/90',
    bg: 'bg-white/5',
    dot: 'bg-white',
    ping: 'bg-white',
    border: 'border-white/15',
  },
  cyan: {
    text: 'text-cyan-300',
    bg: 'bg-cyan-500/10',
    dot: 'bg-cyan-400',
    ping: 'bg-cyan-400',
    border: 'border-cyan-500/30',
  },
  violet: {
    text: 'text-purple-300',
    bg: 'bg-purple-500/10',
    dot: 'bg-purple-400',
    ping: 'bg-purple-400',
    border: 'border-purple-500/30',
  },
  amber: {
    text: 'text-amber-300',
    bg: 'bg-amber-500/10',
    dot: 'bg-amber-400',
    ping: 'bg-amber-400',
    border: 'border-amber-500/30',
  },
  emerald: {
    text: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    dot: 'bg-emerald-400',
    ping: 'bg-emerald-400',
    border: 'border-emerald-500/30',
  },
};

const sizeStyles: Record<LiquidBadgeSize, { badge: string; text: string; dotSize: string }> = {
  sm: {
    badge: 'px-2.5 py-0.5 gap-1.5',
    text: 'text-[10px] tracking-wider',
    dotSize: 'h-1.5 w-1.5',
  },
  md: {
    badge: 'px-3.5 py-1 gap-2',
    text: 'text-xs tracking-wide',
    dotSize: 'h-2 w-2',
  },
};

export const LiquidBadge: React.FC<LiquidBadgeProps> = ({
  text,
  icon,
  variant = 'default',
  live = true,
  size = 'md',
  className = '',
  pulseLabel = 'Status active',
}) => {
  const v = variantStyles[variant];
  const s = sizeStyles[size];

  return (
    <span
      className={`
        liquid-glass inline-flex items-center rounded-full font-sans font-medium uppercase
        border ${v.border} ${v.bg} ${v.text} ${s.badge} ${s.text}
        shadow-[0_0_12px_rgba(0,0,0,0.5)] transition-all duration-300
        ${className}
      `}
    >
      {live && (
        <span className={`relative flex ${s.dotSize} flex-shrink-0`} aria-label={pulseLabel}>
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${v.ping} opacity-75`}
            aria-hidden="true"
          />
          <span className={`relative inline-flex h-full w-full rounded-full ${v.dot}`} />
        </span>
      )}

      {icon && <span className="flex-shrink-0" aria-hidden="true">{icon}</span>}

      <span className="truncate">{text}</span>
    </span>
  );
};

export default LiquidBadge;

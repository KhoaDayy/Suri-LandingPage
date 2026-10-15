import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export interface BlurTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  align?: 'left' | 'center' | 'right';
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  style,
  align = 'center',
  delay = 0.08,
  duration = 0.7,
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const words = text.split(' ');

  const justifyMap: Record<'left' | 'center' | 'right', string> = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const justifyClassMap: Record<'left' | 'center' | 'right', string> = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right',
  };

  return (
    <Component
      // Cast ref because Component is generic HTML element
      ref={containerRef as any}
      aria-label={text}
      className={`flex flex-wrap items-center ${justifyClassMap[align]} ${className}`}
      style={{
        justifyContent: justifyMap[align],
        rowGap: '0.1em',
        ...style,
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { filter: 'blur(10px)', opacity: 0, y: 35 }
          }
          animate={
            isInView
              ? shouldReduceMotion
                ? { opacity: 1 }
                : { filter: 'blur(0px)', opacity: 1, y: 0 }
              : shouldReduceMotion
                ? { opacity: 0 }
                : { filter: 'blur(10px)', opacity: 0, y: 35 }
          }
          transition={{
            duration,
            delay: index * delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

export default BlurText;

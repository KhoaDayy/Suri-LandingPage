import React from 'react';

/**
 * Animation direction for scroll reveal transitions
 */
export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

/**
 * Props for declarative scroll reveal wrapper
 */
export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

/**
 * Configuration for floating ambient particles
 */
export interface WaterParticleItem {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: 'cyan' | 'blue' | 'gold' | 'lavender';
}

/**
 * Props for WaterParticles ambient visual layer
 */
export interface WaterParticlesProps {
  count?: number;
  className?: string;
  palette?: 'water' | 'celestial' | 'mixed';
  interactive?: boolean;
}

/**
 * Props for floating micro-animation wrapper
 */
export interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  rotate?: number;
  className?: string;
}

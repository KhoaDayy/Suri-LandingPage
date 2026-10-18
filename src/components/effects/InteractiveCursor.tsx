import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxLife: number;
  life: number;
  color: string;
  type: 'bubble' | 'sparkle' | 'splash';
  rotation?: number;
  rotationSpeed?: number;
}

export const InteractiveCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect touch / reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    let particles: Particle[] = [];
    let animationFrameId: number;
    let isRunning = false;

    // Theme color palettes
    const getColors = () => {
      const dark = document.documentElement.classList.contains('dark');
      if (dark) {
        return {
          bubbles: ['rgba(121, 172, 224, 0.65)', 'rgba(212, 184, 106, 0.55)', 'rgba(165, 147, 209, 0.6)'],
          sparkles: ['#FFFFFF', '#D4B86A', '#79ACE0', '#E5DCFF'],
          splash: ['#79ACE0', '#D4B86A', '#ECEBE6', '#9EC5EF', '#A593D1'],
        };
      } else {
        return {
          bubbles: ['rgba(49, 93, 156, 0.45)', 'rgba(201, 169, 92, 0.45)', 'rgba(117, 184, 230, 0.55)'],
          sparkles: ['#315D9C', '#C9A95C', '#1E5090', '#75B8E6'],
          splash: ['#315D9C', '#C9A95C', '#75B8E6', '#254778', '#5B9DD9'],
        };
      }
    };

    const drawStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      c.beginPath();
      c.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        c.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        c.lineTo(x, y);
        rot += step;
      }
      c.lineTo(cx, cy - outerRadius);
      c.closePath();
      c.fill();
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        render();
      }
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--;
        p.x += p.vx;
        p.y += p.vy;

        // Apply slight drag and buoyancy
        if (p.type === 'bubble') {
          p.vy -= 0.04; // float upward gently
          p.vx *= 0.98;
        } else if (p.type === 'splash') {
          p.vy += 0.09; // slight gravity
          p.vx *= 0.97;
        } else if (p.type === 'sparkle') {
          p.vx *= 0.96;
          p.vy *= 0.96;
          if (p.rotation !== undefined && p.rotationSpeed !== undefined) {
            p.rotation += p.rotationSpeed;
          }
        }

        const progress = p.life / p.maxLife; // 1 down to 0
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, progress));

        if (p.type === 'bubble') {
          // Organic translucent water slime bubble with highlight
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (1.2 - progress * 0.2), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Highlight shine
          ctx.beginPath();
          ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.fill();
        } else if (p.type === 'sparkle') {
          // Magic twinkling 4-point star
          ctx.fillStyle = p.color;
          ctx.translate(p.x, p.y);
          if (p.rotation !== undefined) ctx.rotate(p.rotation);
          drawStar(ctx, 0, 0, 4, p.size * progress, (p.size * progress) / 2.8);
        } else if (p.type === 'splash') {
          // Radiating water droplet with trailing bead
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (0.8 + progress * 0.4), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    // Track mouse movement
    let lastX = 0;
    let lastY = 0;
    let moveCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      lastX = x;
      lastY = y;

      moveCounter++;
      // Spawn trail particle every few moves or when moving fast
      if (dist > 4 && moveCounter % 2 === 0) {
        const colors = getColors();
        const isSparkle = Math.random() > 0.65;

        if (isSparkle) {
          particles.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 0.8 + dx * 0.05,
            vy: (Math.random() - 0.5) * 0.8 + dy * 0.05,
            size: Math.random() * 5 + 4,
            maxLife: 26,
            life: 26,
            color: colors.sparkles[Math.floor(Math.random() * colors.sparkles.length)],
            type: 'sparkle',
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.15,
          });
        } else {
          particles.push({
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 0.6 + dx * 0.03,
            vy: -Math.random() * 0.6 - 0.2,
            size: Math.random() * 3.5 + 2.5,
            maxLife: 28,
            life: 28,
            color: colors.bubbles[Math.floor(Math.random() * colors.bubbles.length)],
            type: 'bubble',
          });
        }

        // Limit maximum particle count for performance
        if (particles.length > 90) particles.shift();
        startLoop();
      }
    };

    // Handle click splash
    const handleClick = (e: MouseEvent | TouchEvent) => {
      let x = 0;
      let y = 0;
      if ('clientX' in e) {
        x = e.clientX;
        y = e.clientY;
      } else if (e.touches && e.touches[0]) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        return;
      }

      const colors = getColors();
      const splashCount = isTouch ? 8 : 16;

      for (let i = 0; i < splashCount; i++) {
        const angle = (Math.PI * 2 * i) / splashCount + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 4.5 + 2.2;
        const isStar = i % 3 === 0;

        if (isStar) {
          particles.push({
            x,
            y,
            vx: Math.cos(angle) * (speed * 0.8),
            vy: Math.sin(angle) * (speed * 0.8),
            size: Math.random() * 6 + 4,
            maxLife: 32,
            life: 32,
            color: colors.sparkles[Math.floor(Math.random() * colors.sparkles.length)],
            type: 'sparkle',
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.2,
          });
        } else {
          particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1.2, // upward initial pop
            size: Math.random() * 4 + 3,
            maxLife: 28,
            life: 28,
            color: colors.splash[Math.floor(Math.random() * colors.splash.length)],
            type: 'splash',
          });
        }
      }

      if (particles.length > 120) {
        particles.splice(0, particles.length - 120);
      }
      startLoop();
    };

    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isTouch) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('click', handleClick);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
    />
  );
};

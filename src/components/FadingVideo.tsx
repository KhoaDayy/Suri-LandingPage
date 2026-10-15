import React, { useRef, useEffect, useState, useCallback } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className = '', style }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sources = Array.isArray(src) ? src : [src];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFadingOutRef = useRef(false);
  const fadeAnimRef = useRef<number | null>(null);

  const currentSrc = sources[currentIndex % sources.length];

  const cancelActiveFade = useCallback(() => {
    if (fadeAnimRef.current !== null) {
      cancelAnimationFrame(fadeAnimRef.current);
      fadeAnimRef.current = null;
    }
  }, []);

  const fadeIn = useCallback((duration = 500) => {
    cancelActiveFade();
    isFadingOutRef.current = false;
    const video = videoRef.current;
    if (!video) return;

    const start = performance.now();
    const initialOpacity = parseFloat(video.style.opacity || '0');

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = initialOpacity + (1 - initialOpacity) * progress;
      video.style.opacity = String(currentOpacity);

      if (progress < 1) {
        fadeAnimRef.current = requestAnimationFrame(step);
      }
    };

    fadeAnimRef.current = requestAnimationFrame(step);
  }, [cancelActiveFade]);

  const fadeOut = useCallback((duration = 550) => {
    if (isFadingOutRef.current) return;
    isFadingOutRef.current = true;
    cancelActiveFade();

    const video = videoRef.current;
    if (!video) return;

    const start = performance.now();
    const initialOpacity = parseFloat(video.style.opacity || '1');

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = initialOpacity * (1 - progress);
      video.style.opacity = String(currentOpacity);

      if (progress < 1) {
        fadeAnimRef.current = requestAnimationFrame(step);
      }
    };

    fadeAnimRef.current = requestAnimationFrame(step);
  }, [cancelActiveFade]);

  const handleLoadedData = () => {
    fadeIn(500);
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const remaining = video.duration - video.currentTime;
    if (remaining <= 0.55 && !isFadingOutRef.current) {
      fadeOut(550);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    if (sources.length === 1) {
      video.currentTime = 0;
      video.play().catch(() => {});
      fadeIn(500);
    } else {
      isFadingOutRef.current = false;
      if (video) video.style.opacity = '0';
      setCurrentIndex((prev) => (prev + 1) % sources.length);
    }
  };

  useEffect(() => {
    return () => {
      cancelActiveFade();
    };
  }, [cancelActiveFade]);

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};

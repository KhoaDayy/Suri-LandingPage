import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { ImageIcon, MovieIcon, LightbulbIcon } from './Icons';

interface CapabilityCardData {
  title: string;
  icon: React.ReactNode;
  tags: string[];
  body: string;
}

const capabilities: CapabilityCardData[] = [
  {
    title: 'Design',
    icon: <ImageIcon size={22} className="text-white" />,
    tags: ['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion'],
    body: 'We shape identities and interfaces that feel unmistakably yours -- typographic systems, component libraries, and art-directed pages that scale without losing soul.',
  },
  {
    title: 'Engineering',
    icon: <MovieIcon size={22} className="text-white" />,
    tags: ['React', 'Next.js', 'Headless CMS', 'Edge-Ready'],
    body: 'Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented -- with code your team will enjoy extending long after launch.',
  },
  {
    title: 'Growth',
    icon: <LightbulbIcon size={22} className="text-white" />,
    tags: ['SEO', 'Analytics', 'A/B Testing', 'Retention'],
    body: 'Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.',
  },
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="services" className="relative min-h-screen overflow-hidden bg-black flex flex-col">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="mb-auto">
          <p className="text-sm font-body text-white/80 mb-6 tracking-wide">
            // Capabilities
          </p>

          <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white whitespace-pre-line">
            {'Studio craft,\nend to end'}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
            >
              {/* Top Row: Icon on left, Tags on right */}
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                <div className="flex flex-wrap gap-1.5 justify-end">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom: Title & Body */}
              <div className="mt-8">
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

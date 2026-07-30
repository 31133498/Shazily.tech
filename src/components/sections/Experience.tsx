import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import type { Experience } from '../../types';

const typeLabel: Record<string, string> = {
  internship: 'Internship',
  ngo: 'NGO',
  startup: 'Startup',
  community: 'Community',
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cooldown = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (cooldown.current) return;
      const next = activeIndex + dir;
      if (next < 0 || next >= experience.length) return;
      cooldown.current = true;
      setActiveIndex(next);
      setTimeout(() => { cooldown.current = false; }, 480);
    },
    [activeIndex]
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      const down = e.deltaY > 0;
      // At the boundary, let the page scroll normally
      if (down && activeIndex === experience.length - 1) return;
      if (!down && activeIndex === 0) return;
      e.preventDefault();
      go(down ? 1 : -1);
    };

    section.addEventListener('wheel', onWheel, { passive: false });
    return () => section.removeEventListener('wheel', onWheel);
  }, [activeIndex, go]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full px-5 lg:px-20 py-16 bg-black"
    >
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-6">

        {/* Heading */}
        <div className="flex gap-4 items-center justify-center py-5 text-[48px] leading-[56px] tracking-[-0.96px]">
          <span className="font-sora font-normal text-white">My</span>
          <span className="font-sora font-extrabold text-white">Experience</span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2">
          {experience.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-white w-6' : 'bg-zinc-600 w-2'
              }`}
            />
          ))}
        </div>

        {/* Card stack */}
        <div className="relative h-[520px] sm:h-[460px] md:h-[400px] max-w-[900px] mx-auto w-full overflow-hidden">
          {experience.map((item, index) => {
            const depth = activeIndex - index; // positive = behind active
            const isBelow = index > activeIndex;

            return (
              <motion.div
                key={`${item.role}-${index}`}
                animate={{
                  y: isBelow ? '110%' : depth * 16,
                  scale: isBelow ? 0.94 : Math.max(0.78, 1 - depth * 0.055),
                  opacity: isBelow ? 0 : Math.max(0.35, 1 - depth * 0.18),
                  zIndex: isBelow ? 0 : experience.length - depth,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 32, mass: 0.8 }}
                className="absolute inset-x-0 top-0 bg-zinc-900 border border-zinc-700 rounded-[12px] px-5 py-5 sm:px-8 sm:py-7"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-sora font-semibold text-xs text-zinc-300 border border-zinc-600 px-3 py-1 rounded-[4px] uppercase tracking-widest whitespace-nowrap">
                      {typeLabel[item.type]}
                    </span>
                    <p className="font-sora font-semibold text-xl text-white leading-7 tracking-[-0.48px]">
                      {item.role} at {item.organisation}
                    </p>
                  </div>
                  <span className="font-sora font-semibold text-sm text-zinc-400 tracking-[-0.32px] whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sora font-normal text-sm text-zinc-300 leading-6 tracking-[0.28px] mb-5">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="font-sora font-normal text-sm text-zinc-400 leading-5 flex items-start gap-3"
                    >
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Ghost index */}
                <span className="absolute bottom-3 right-6 font-sora font-extrabold text-7xl text-zinc-800 leading-none select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Arrow controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            disabled={activeIndex === 0}
            className="w-11 h-11 rounded-[4px] border border-zinc-600 text-white flex items-center justify-center hover:border-white transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="font-sora font-semibold text-sm text-zinc-400 w-12 text-center tabular-nums">
            {activeIndex + 1} / {experience.length}
          </span>
          <button
            onClick={() => go(1)}
            disabled={activeIndex === experience.length - 1}
            className="w-11 h-11 rounded-[4px] border border-zinc-600 text-white flex items-center justify-center hover:border-white transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

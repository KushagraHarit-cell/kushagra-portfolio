'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@/lib/data';

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ stat, index, started }: { stat: typeof stats[0]; index: number; started: boolean }) {
  const count = useCounter(stat.value, 2000, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={started ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="text-center"
    >
      <motion.div 
        className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text mb-2 tabular-nums"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {count}{stat.suffix}
      </motion.div>
      <div className="text-gray-500 text-xs sm:text-sm tracking-wide">{stat.label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 border-t border-b border-white/5" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: 'white' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

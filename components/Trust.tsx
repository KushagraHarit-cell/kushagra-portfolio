'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  'Modern Websites',
  'Landing Pages',
  'Portfolio Sites',
  'Business Websites',
  'UI/UX Design',
];

export default function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-16 md:py-20 px-6 border-y border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">What I Do</span>
        </motion.div>

        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-lg md:text-xl text-gray-400 font-light tracking-wide">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

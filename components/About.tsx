'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timeline } from '@/lib/data';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs tracking-widest text-gray-500 uppercase">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-8 gradient-text"
            >
              Building the web,
              <br />
              one pixel at a time.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-gray-400 text-base leading-relaxed"
            >
              <p>
                I'm Kushagra — a freelance web developer and digital creator based in India.
                I build premium digital experiences that sit at the intersection of design
                and engineering.
              </p>
              <p>
                My work spans from crafting pixel-perfect landing pages to architecting
                full-stack applications. I care deeply about performance, animation, and
                the tiny details that separate good from extraordinary.
              </p>
              <p>
                When I'm not pushing pixels, I'm exploring new tools, contributing to open
                source, or breaking my own code just to see how to fix it better.
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {['Next.js', 'TypeScript', 'Design Systems', 'Framer Motion', 'Node.js'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-white/20 bg-black" />

                <span className="text-xs text-gray-600 tracking-widest uppercase mb-2 block">{item.year}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

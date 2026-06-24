'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timeline } from '@/lib/data';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10 gradient-text tracking-[-0.04em]"
            >
              Building products
              <br />
              that solve problems.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed"
            >
              <p>
                I'm Kushagra — a freelance web developer focused on building premium digital products that drive real business results. I specialize in creating high-performance websites and applications that convert visitors into customers.
              </p>
              <p>
                My approach combines technical excellence with strategic thinking. I don't just build websites — I craft digital experiences that solve business problems, improve user engagement, and deliver measurable outcomes for my clients.
              </p>
              <p>
                From concept to deployment, I work closely with businesses to understand their goals and translate them into elegant, scalable solutions. Every project is an opportunity to create something exceptional.
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {['Next.js', 'TypeScript', 'Design Systems', 'Framer Motion', 'Node.js'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  className="text-sm px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:border-white/30 hover:text-white transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                className="relative pl-10 pb-12 last:pb-0 group"
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                  className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-white/30 bg-black group-hover:border-white/60 group-hover:bg-white/10 transition-colors"
                />

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="text-sm text-gray-500 tracking-[0.15em] uppercase mb-3 block font-medium"
                >
                  {item.year}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                  className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                  className="text-gray-500 text-base leading-relaxed group-hover:text-gray-400 transition-colors"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Experience</span>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative mb-16 md:mb-24 ${i % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
            >
              {/* Year badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
                className={`inline-block mb-6 ${i % 2 === 0 ? 'md:mr-0 md:ml-auto' : 'md:ml-0 md:mr-auto'}`}
              >
                <span className="text-sm md:text-base font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white">
                  {exp.year}
                </span>
              </motion.div>

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 + 0.2 }}
                className={`glass rounded-2xl p-8 border border-white/10 ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  {exp.title}
                </h3>
                {exp.company && (
                  <p className="text-gray-400 text-base mb-4">{exp.company}</p>
                )}
                <p className="text-gray-500 text-base leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>

              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                className={`absolute top-8 w-4 h-4 rounded-full border-2 border-white/40 bg-black hidden md:block ${
                  i % 2 === 0 ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

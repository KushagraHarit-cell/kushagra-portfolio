'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

const testimonialColors = [
  { glow: 'rgba(99,102,241,0.2)', border: 'hover:border-indigo-500/30' },
  { glow: 'rgba(16,185,129,0.2)', border: 'hover:border-emerald-500/30' },
  { glow: 'rgba(249,115,22,0.2)', border: 'hover:border-orange-500/30' },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-32 md:py-40 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 uppercase">Testimonials</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-16 tracking-[-0.04em]"
        >
          What clients say.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => {
            const colors = testimonialColors[i % testimonialColors.length];
            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group glass rounded-3xl p-8 border border-white/5 ${colors.border} transition-all duration-400 relative overflow-hidden`}
              >
                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: `radial-gradient(circle at 50% 0%, ${colors.glow}, transparent 70%)` }}
                />

                {/* Quote icon */}
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={inView ? { opacity: 0.1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="absolute top-6 right-6"
                >
                  <Quote size={48} className="text-white" />
                </motion.div>

                <div className="relative z-10">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                    className="text-gray-300 text-base leading-relaxed mb-8 min-h-[120px]"
                  >
                    "{testimonial.content}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                      <div className="text-gray-600 text-xs">{testimonial.company}</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
